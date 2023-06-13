import { useEffect } from 'react';
import { ReactFlowProvider } from 'reactflow';
import { useDispatch, useSelector } from 'react-redux';
import { setNodes } from './slices/nodesSlice';
import { setEdges } from './slices/edgesSlice';
import { setBg } from './slices/bgSlice';
import { nodesExplore } from './nodeUtils';

import ControlPanel from './components/ControlPanel';
import BgControl from './components/BgControl';
import EdgeControl from './components/EdgeControl';
import NodesList from './components/NodesList';
import ReactFlowWrapper from './components/ReactFlowWrapper';

import 'reactflow/dist/style.css';
import 'react-tabs/style/react-tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
    const { nodes, edges, bg } = useSelector((state) => {
        return { nodes: state.nodes, edges: state.edges, bg: state.bg };
    });

    const dispatch = useDispatch();

    const nodeSelected = nodes.findIndex((e) => e.selected);
    const edgeSelected = edges.findIndex((e) => e.selected);

    let NodeController;
    if (nodeSelected !== -1) {
        NodeController = nodesExplore[nodes[nodeSelected].type].controller;
    }

    useEffect(() => {
        if (localStorage.getItem('flow') !== null) {
            const data = JSON.parse(localStorage.getItem('flow'));
            dispatch(setNodes(data.nodes));
            dispatch(setEdges(data.edges));
            dispatch(setBg(data.bg));
        }
    }, []);

    return (
        <main className='dndflow'>
            <ReactFlowProvider>
                <NodesList />
                <ReactFlowWrapper />
                <ControlPanel>
                    {nodeSelected !== -1 ? (
                        <NodeController
                            id={nodeSelected}
                            node={nodes[nodeSelected]}
                        />
                    ) : edgeSelected !== -1 ? (
                        <EdgeControl
                            id={edgeSelected}
                            edge={edges[edgeSelected]}
                        />
                    ) : (
                        <BgControl nodes={nodes} edges={edges} bg={bg} />
                    )}
                </ControlPanel>
            </ReactFlowProvider>
        </main>
    );
}

export default App;
