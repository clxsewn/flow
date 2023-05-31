import { useState, useCallback, useRef } from 'react';
import {
    ReactFlow,
    addEdge,
    applyNodeChanges,
    applyEdgeChanges,
    MiniMap,
    Controls,
} from 'reactflow';
import { useSelector, useDispatch } from 'react-redux';
import { setEdges } from '../slices/edgesSlice';
import { setNodes, addNode } from '../slices/nodesSlice';
import BgWrapper from './BgWrapper';
import { nodeTypes, defaultNodesData, nodesExplore } from '../nodeUtils';

let id = 0;
const getId = () => `dndnode_${id++}`;

const ReactFlowWrapper = () => {
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    const nodes = useSelector((state) => state.nodes);
    const edges = useSelector((state) => state.edges);

    const dispatch = useDispatch();

    const onConnect = (params) => {
        const newEdges = addEdge(params, edges);
        if (newEdges.length !== edges.length) {
            newEdges[newEdges.length - 1] = {
                ...newEdges[newEdges.length - 1],
                animated: false,
                type: 'default',
                label: '',
                color: '#ff1100',
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

            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
                return;
            }

            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            });
            const newNode = {
                id: getId(),
                type,
                position,
                data: nodesExplore[type].defaultData,
            };

            console.log(newNode);

            dispatch(addNode(newNode));
        },
        [reactFlowInstance]
    );

    const selectedd = useSelector((state) =>
        state.nodes.find((i) => i.selected === true)
    );

    console.log(selectedd);

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
                {/* <Panel position='top-left'>
                <ul onClick={() => console.log(setNodes([]))}>
                    {nodes.map((i) => (
                        <li key={i.id}>
                            {i.data.label}
                            {i.selected ? ' - selected' : ''}
                        </li>
                    ))}
                </ul>
                <ul>
                    {edges.map((i) => (
                        <li key={i.id}>
                            {i.id}
                            {i.selected ? ' - selected' : ''}
                        </li>
                    ))}
                </ul>
            </Panel> */}
                <Controls />
                <MiniMap />
                {/* <Background
        variant={bgOpts.value}
        size={bgOpts.size}
        gap={bgOpts.gap}
        lineWidth={bgOpts.lineWidth}
        color={bgOpts.color}
    /> */}
                <BgWrapper />
            </ReactFlow>
        </div>
    );
};

export default ReactFlowWrapper;
