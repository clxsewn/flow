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
    const { nodes, edges } = useSelector((state) => {
        return { nodes: state.nodes, edges: state.edges };
    });

    const dispatch = useDispatch();

    const nodeSelected = nodes.findIndex((e) => e.selected);
    const edgeSelected = edges.findIndex((e) => e.selected);

    let NodeController;
    if (nodeSelected !== -1) {
        NodeController = nodesExplore[nodes[nodeSelected].type].controller;
    }

    const downloadJSON = (e) => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            //JSON.stringify(dataTransform(nodes, edges, bgOpts))
            JSON.stringify({})
        )}`;
        const link = document.createElement('a');
        link.href = jsonString;
        link.download = 'data.json';

        link.click();
    };

    const saveLocally = () => {
        // localStorage.setItem(
        //     'data',
        //     JSON.stringify(dataTransform(nodes, edges, bgOpts))
        // );
    };

    const clearLocally = () => {
        localStorage.removeItem('data');
    };

    useEffect(() => {
        if (localStorage.getItem('flow') !== null) {
            const data = JSON.parse(localStorage.getItem('flow'));
            dispatch(setNodes(data.nodes));
            dispatch(setEdges(data.edges));
            dispatch(setBg(data.bg));
        }
    }, []);

    console.log('app render');

    return (
        <main className='dndflow'>
            <ReactFlowProvider>
                <NodesList />
                <div style={{ width: 'calc(100vw - 480px)', height: '100vh' }}>
                    <ReactFlowWrapper />
                </div>
                <ControlPanel>
                    {nodeSelected !== -1 ? (
                        <NodeController
                            id={nodeSelected}
                            data={nodes[nodeSelected].data}
                            setNodes={setNodes}
                        />
                    ) : edgeSelected !== -1 ? (
                        <EdgeControl />
                    ) : (
                        <BgControl />
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
