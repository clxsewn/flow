import { useState, useCallback, useRef } from 'react';
import {
    ReactFlow,
    addEdge,
    applyNodeChanges,
    applyEdgeChanges,
    MiniMap,
    Controls,
    MarkerType,
} from 'reactflow';
import { useSelector, useDispatch } from 'react-redux';
import { setEdges } from '../slices/edgesSlice';
import { setNodes, addNode } from '../slices/nodesSlice';
import BgWrapper from './BgWrapper';
import { nodeTypes, nodesExplore } from '../nodeUtils';
import { v4 as uid } from 'uuid';

const getId = () => `node_${uid().slice(0, 8)}`;

const ReactFlowWrapper = () => {
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    const { nodes, edges, bg } = useSelector((state) => {
        return { nodes: state.nodes, edges: state.edges, bg: state.bg };
    });

    const dispatch = useDispatch();

    const onConnect = (params) => {
        const newEdges = addEdge(params, edges);
        if (newEdges.length !== edges.length) {
            newEdges[newEdges.length - 1] = {
                ...newEdges[newEdges.length - 1],
                animated: false,
                type: 'default',
                label: '',
                markerEnd: {
                    type: MarkerType.ArrowClosed,
                    width: 20,
                    height: 20,
                    color: '#b1b1b7',
                },
                style: {
                    strokeWidth: 1,
                    stroke: '#b1b1b7',
                },
            };
        }
        dispatch(setEdges(newEdges));
        return newEdges;
    };

    const onEdgesChange = useCallback(
        (changes) => {
            const newEdges = applyEdgeChanges(changes, edges);
            dispatch(setEdges(newEdges));
            return newEdges;
        },
        [edges]
    );

    const onNodesChange = useCallback(
        (changes) => {
            const newArr = applyNodeChanges(changes, nodes);
            const dimenstionsId = changes.findIndex(
                (c) => c.dimensions !== undefined
            );

            if (dimenstionsId === -1) {
                dispatch(setNodes(newArr));
                return newArr;
            }

            const mnewArr = newArr.map((i) => {
                return {
                    ...i,
                    data: {
                        ...i.data,
                        width: i.width,
                        height: i.height,
                    },
                };
            });

            dispatch(setNodes(mnewArr));
            return mnewArr;
        },
        [nodes]
    );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event) => {
            event.preventDefault();

            const reactFlowBounds =
                reactFlowWrapper.current.getBoundingClientRect();
            const type = event.dataTransfer.getData('application/reactflow');

            if (typeof type === 'undefined' || !type) {
                return;
            }

            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left - 50,
                y: event.clientY - reactFlowBounds.top - 50,
            });
            const newNode = {
                id: getId(),
                type,
                position,
                width: 100,
                height: 100,
                data: nodesExplore[type].defaultData,
            };

            dispatch(addNode(newNode));
        },
        [reactFlowInstance]
    );

    return (
        <div className='reactflow-wrapper' ref={reactFlowWrapper}>
            <ReactFlow
                nodes={nodes}
                nodeTypes={nodeTypes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onInit={setReactFlowInstance}
                onDrop={onDrop}
                onDragOver={onDragOver}
                snapToGrid={true}
                snapGrid={[10, 10]}
            >
                <Controls />
                <MiniMap />
                <BgWrapper bg={bg} />
            </ReactFlow>
        </div>
    );
};

export default ReactFlowWrapper;
