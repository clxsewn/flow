import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

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

        toggleHandleType: (state, action) => {
            const currentType =
                state[action.payload.id].data.handles[action.payload.hId].type;
            state[action.payload.id].data.handles[action.payload.hId].type =
                currentType === 'source' ? 'target' : 'source';
        },

        deleteHandle: (state, action) => {
            state[action.payload.id].data.handles.splice(action.payload.hId, 1);
        },

        toggleHandleVisibility: (state, action) => {
            const currentVis =
                state[action.payload.id].data.handles[action.payload.hId].style
                    .opacity;

            state[action.payload.id].data.handles[
                action.payload.hId
            ].style.opacity = currentVis === '0' ? '1' : '0';
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
    toggleHandleType,
    toggleHandleVisibility,
    changeFontSize,
} = nodesSlice.actions;
export default nodesSlice.reducer;
