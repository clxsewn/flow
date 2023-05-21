import React, {
    useCallback,
    useState,
    useMemo,
    useEffect,
    useRef,
} from 'react';
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    addEdge,
    Panel,
    applyEdgeChanges,
    applyNodeChanges,
    useOnSelectionChange,
    ReactFlowProvider,
} from 'reactflow';

import 'reactflow/dist/style.css';
import TextUpdaterNode, {
    TextUpdaterNodeControl,
} from './components/nodes/TextUpdaterNode';
import TableNode, { TableNodeControl } from './components/nodes/TableNode';
import ControlPanel from './components/ControlPanel';
import BgControl, { initialBgOpts } from './components/BgControl';
import EdgeControl from './components/EdgeControl';
import { dataTransform } from './utils';
import NodesList from './components/NodesList';
import RectNode, { RectNodeControl } from './components/nodes/RectNode';

const initialNodes = [
    {
        id: '1',
        type: 'tableNode',
        position: { x: 0, y: 0 },
        data: { label: ['Node 1', 'Node 55'] },
    },
    {
        id: '2',
        type: 'tableNode',
        position: { x: 0, y: 100 },
        data: { label: ['Node 2'] },
        isConnectable: false,
    },
    {
        id: '3',
        type: 'tableNode',
        position: { x: 0, y: 200 },
        data: { label: ['Node 3'] },
    },
];

const defaultNodesData = {
    textUpdater: { label: 'Text Updater Node' },
    tableNode: { label: ['Table Node'] },
    rectNode: { label: 'Rect Node' },
};

const nodeControls = {
    textUpdater: TextUpdaterNode,
    tableNode: TableNodeControl,
    rectNode: RectNodeControl,
};

const nodeTypes = {
    textUpdater: TextUpdaterNode,
    tableNode: TableNode,
    rectNode: RectNode,
};

const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', label: 'label 1' },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

function App() {
    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes] = useState(initialNodes);
    // const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [edges, setEdges] = useState(initialEdges);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    const [bgOpts, setBgOpts] = useState({
        ...initialBgOpts,
        color: '#81818a',
    });

    const nodeSelected = useMemo(() => {
        return nodes.findIndex((e) => e.selected);
    }, [nodes]);
    const edgeSelected = edges.findIndex((e) => e.selected);

    const onConnect = useCallback(
        (params) =>
            setEdges((eds) => {
                return addEdge(params, eds);
            }),
        [setEdges]
    );

    const onEdgesChange = useCallback((changes) => {
        if (changes.length === 2) {
            onEdgesChange([changes[0]]);
            changes = [changes[1]];
        }
        return setEdges((eds) => {
            return applyEdgeChanges(changes, eds);
        });
    }, []);

    const onNodesChange = useCallback((changes) => {
        return setNodes((nds) => {
            return applyNodeChanges(changes, nds);
        });
    }, []);

    // const onEdgesChange = useCallback((changes) => {
    //     if (changes.length === 2)
    //         setEdges((eds) => {
    //             console.log(changes);
    //             return applyEdgeChanges(changes[1], eds);
    //         });

    //     return setEdges((eds) => {
    //         return applyEdgeChanges(changes[0], eds);
    //     });
    // }, []);

    let NodeController;
    if (nodeSelected !== -1) {
        NodeController = nodeControls[nodes[nodeSelected].type];
    }

    const downloadJSON = (e) => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            JSON.stringify(dataTransform(nodes, edges, bgOpts))
        )}`;
        const link = document.createElement('a');
        link.href = jsonString;
        link.download = 'data.json';

        link.click();
    };

    const saveLocally = () => {
        localStorage.setItem(
            'data',
            JSON.stringify(dataTransform(nodes, edges, bgOpts))
        );
    };

    const clearLocally = () => {
        localStorage.removeItem('data');
    };

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
                data: defaultNodesData[type],
            };

            setNodes((nds) => nds.concat(newNode));
        },
        [reactFlowInstance]
    );

    useEffect(() => {
        if (localStorage.getItem('data') !== null) {
            const data = JSON.parse(localStorage.getItem('data'));
            setNodes(data.nodes);
            setEdges(data.edges);
            setBgOpts(data.bg);
        }
    }, []);

    return (
        <main className='dndflow'>
            <ReactFlowProvider>
                <NodesList />
                <div style={{ width: 'calc(100vw - 480px)', height: '100vh' }}>
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
                        >
                            <Panel position='top-left'>
                                <ul>
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
                            </Panel>
                            <Controls />
                            <MiniMap />
                            <Background
                                variant={bgOpts.value}
                                size={bgOpts.size}
                                gap={bgOpts.gap}
                                lineWidth={bgOpts.lineWidth}
                                color={bgOpts.color}
                            />
                        </ReactFlow>
                    </div>
                </div>
                <ControlPanel>
                    {nodeSelected !== -1 ? (
                        <NodeController
                            id={nodeSelected}
                            data={nodes[nodeSelected].data}
                            setNodes={setNodes}
                        />
                    ) : edgeSelected !== -1 ? (
                        <EdgeControl
                            id={edgeSelected}
                            data={edges[edgeSelected]}
                            setEdges={setEdges}
                        />
                    ) : (
                        <BgControl opts={bgOpts} setOpts={setBgOpts} />
                    )}
                    <button onClick={downloadJSON}>Download JSON</button>
                    <button onClick={saveLocally}>Save Locally</button>
                    <button onClick={clearLocally}>Clear local storage</button>
                </ControlPanel>
            </ReactFlowProvider>
        </main>
    );
}

export default App;
