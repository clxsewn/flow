import { createSlice } from '@reduxjs/toolkit';

export const bgVariants = [
    {
        text: 'Точки',
        variant: 'dots',
        size: 1,
        gap: 20,
    },
    {
        text: 'Лінії',
        variant: 'lines',
        gap: 20,
        lineWidth: 1,
    },
    {
        text: 'Хрестики',
        variant: 'cross',
        size: 6,
        gap: 20,
    },
];

export const initialState = {
    ...bgVariants[0],
    color: '#81818a',
};

const bgSlice = createSlice({
    name: 'bg',
    initialState,
    reducers: {
        setBg: (state, action) => {
            return action.payload;
        },
        setColor: (state, action) => {
            state.color = action.payload;
        },

        selectBgVariant: (state, action) => {
            const varsId = bgVariants.findIndex(
                (i) => i.variant === action.payload
            );
            Object.keys(bgVariants[varsId]).forEach((i) => {
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
    setBg,
} = bgSlice.actions;

export default bgSlice.reducer;
