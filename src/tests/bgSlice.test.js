import bgReducer, {
    selectBgVariant,
    changeGap,
    changeSize,
    changeLineWidth,
    initialState as bgis,
    bgVariants,
} from '../slices/bgSlice';

const initialState = {
    ...bgis,
    text: 'Лінії',
    variant: 'lines',
    gap: 20,
    lineWidth: 1,
    size: 6,
};

describe('bgSlice', () => {
    it('should return default state when passed an empty action', () => {
        const result = bgReducer(undefined, { type: '' });

        expect(result).toEqual(bgis);
    });

    it('should select bg variant with "selectBgVariant" action', () => {
        const action = { type: selectBgVariant.type, payload: 'cross' };

        const result = bgReducer(initialState, action);

        expect(result).toEqual({ ...result, ...bgVariants[2] });
    });

    it('should change bg gap with "changeGap" action', () => {
        const action = { type: changeGap.type, payload: 2 };

        const result = bgReducer(initialState, action);

        expect(result.gap).toBe(initialState.gap + 2);
    });

    it('should change bg size with "changeSize" action', () => {
        const action = { type: changeSize.type, payload: 2 };

        const result = bgReducer(initialState, action);

        expect(result.size).toBe(initialState.size + 2);
    });

    it('should change bg line width with "changeLineWidth" action', () => {
        const action = { type: changeLineWidth.type, payload: 2 };

        const result = bgReducer(initialState, action);

        expect(result.lineWidth).toBe(initialState.lineWidth + 2);
    });
});
