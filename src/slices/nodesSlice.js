import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    // {
    //     id: '1',
    //     type: 'tableNode',
    //     position: { x: 0, y: 0 },
    //     data: { label: ['Node 1', 'Node 55'] },
    // },
    // {
    //     id: '2',
    //     type: 'tableNode',
    //     position: { x: 0, y: 100 },
    //     data: { label: ['Node 2'] },
    //     isConnectable: false,
    // },
    // {
    //     id: '3',
    //     type: 'roundedRectNode',
    //     position: { x: 0, y: 200 },
    //     data: { label: ['Node 3'] },
    // },
];

const nodesSlice = createSlice({
    name: 'nodes',
    initialState,
    reducers: {
        addNode: (state, action) => {
            state.push(action.payload);
        },
        setNodes: (state, action) => {
            return action.payload;
        },
        setLabel: (state, action) => {
            state[action.payload.id].data.label.text = action.payload.label;
        },
        changeFontSize: (state, action) => {
            state[action.payload.id].data.label.fontSize +=
                action.payload.shift;
        },
        setTextColor: (state, action) => {
            state[action.payload.id].data.label.color = action.payload.color;
        },
        setFillColor: (state, action) => {
            state[action.payload.id].data.fillColor = action.payload.color;
        },
        addHandle: (state, action) => {
            state[action.payload.id].data.handles.push(action.payload.handle);
        },
        toggleHandle: (state, action) => {
            const currentType =
                state[action.payload.id].data.handles[action.payload.hId].type;
            state[action.payload.id].data.handles[action.payload.hId].type =
                currentType === 'source' ? 'target' : 'source';
        },
        deleteHandle: (state, action) => {
            state[action.payload.id].data.handles.splice(action.payload.hId, 1);
        },
    },
});

export const {
    addNode,
    setNodes,
    setLabel,
    addHandle,
    deleteHandle,
    setTextColor,
    setFillColor,
    toggleHandle,
    changeFontSize,
} = nodesSlice.actions;
export default nodesSlice.reducer;
