import { createSlice } from '@reduxjs/toolkit';

export const bgVariants = [
    {
        text: 'Точки',
        variant: 'dots',
        size: 1,
        gap: 25,
    },
    {
        text: 'Лінії',
        variant: 'lines',
        gap: 25,
        lineWidth: 1,
    },
    {
        text: 'Хрестики',
        variant: 'cross',
        size: 6,
        gap: 25,
    },
];

export const initialState = {
    ...bgVariants[0],
    color: '#81818a',
};

const bgSlice = createSlice({
    name: 'edges',
    initialState,
    reducers: {
        setColor: (state, action) => {
            state.color = action.payload;
        },

        selectBgVariant: (state, action) => {
            const varsId = bgVariants.findIndex(
                (i) => i.variant === action.payload
            );
            Object.keys(bgVariants[varsId]).forEach((i) => {
                console.log(i);
                state[i] = bgVariants[varsId][i];
            });
        },

        changeGap: (state, action) => {
            state.gap += action.payload;
        },

        changeSize: (state, action) => {
            state.size += action.payload;
        },

        changeLineWidth: (state, action) => {
            state.lineWidth += action.payload;
        },
    },
});

export const {
    setColor,
    selectBgVariant,
    changeGap,
    changeSize,
    changeLineWidth,
} = bgSlice.actions;
export default bgSlice.reducer;