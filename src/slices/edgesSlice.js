import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    // {
    //     id: 'e1-2',
    //     source: '1',
    //     target: '2',
    //     label: 'label 1',
    //     type: 'default',
    //     animated: false,
    // },
];

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
    },
});

export const { setEdges, setType, toggleAnimation, setLabel } =
    edgesSlice.actions;
export default edgesSlice.reducer;
