import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const edgesSlice = createSlice({
    name: 'edges',
    initialState,
    reducers: {
        setEdges: (state, action) => {
            return action.payload;
        },

        setType: (state, action) => {
            state[action.payload.id].type = action.payload.type;
        },

        toggleAnimation: (state, action) => {
            state[action.payload].animated = !state[action.payload].animated;
        },

        setLabel: (state, action) => {
            state[action.payload.id].label = action.payload.label;
        },

        setEndMarkerType: (state, action) => {
            state[action.payload.id].markerEnd.type = action.payload.type;
        },

        setColor: (state, action) => {
            state[action.payload.id].markerEnd.color = action.payload.color;
            state[action.payload.id].style.stroke = action.payload.color;
        },
    },
});

export const {
    setEdges,
    setType,
    toggleAnimation,
    setLabel,
    setEndMarkerType,
    setColor,
} = edgesSlice.actions;
export default edgesSlice.reducer;
