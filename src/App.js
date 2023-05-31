import React, { useEffect } from 'react';
import { ReactFlowProvider } from 'reactflow';

import 'reactflow/dist/style.css';
import 'react-tabs/style/react-tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

import ControlPanel from './components/ControlPanel';
import BgControl, { initialBgOpts } from './components/BgControl';
import EdgeControl from './components/EdgeControl';
import NodesList from './components/NodesList';
import { useDispatch, useSelector } from 'react-redux';
import { addNode, setNodes } from './slices/nodesSlice';
import { setEdges } from './slices/edgesSlice';
import ReactFlowWrapper from './components/ReactFlowWrapper';

import { nodeControls, nodesExplore } from './nodeUtils';

let id = 0;
const getId = () => `dndnode_${id++}`;

function App() {
    const nodes = useSelector((state) => state.nodes);
    const edges = useSelector((state) => state.edges);

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
        if (localStorage.getItem('data') !== null) {
            const data = JSON.parse(localStorage.getItem('data'));
            dispatch(setNodes(data.nodes));
            dispatch(setEdges(data.edges));
            // setBgOpts(data.bg);
        }
    }, []);

    console.log('<App /> render');

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
