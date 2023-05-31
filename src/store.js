import { configureStore } from '@reduxjs/toolkit';
import nodes from './slices/nodesSlice';
import edges from './slices/edgesSlice';
import bg from './slices/bgSlice';

export const store = configureStore({
    reducer: {
        nodes,
        edges,
        bg,
    },
    devTools: true,
});
