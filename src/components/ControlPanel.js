import { createSelector } from '@reduxjs/toolkit';

const getSelectedNode = (state) => state.nodes.find((n) => n.selected === true);
const getSelectedEdge = (state) => state.edges.find((e) => e.selected === true);

const getControlPanel = createSelector(
    [getSelectedNode, getSelectedEdge],
    (selectedNode, selectedEdge) => {
        if (selectedNode !== -1) {
            return { type: 'node', id: selectedNode };
        } else if (selectedEdge !== -1) {
        } else {
        }
    }
);

const ControlPanel = ({ children }) => {
    return <div id='control-panel'>{children}</div>;
};

export default ControlPanel;
