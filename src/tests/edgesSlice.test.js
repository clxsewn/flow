import edgeReducer, {
    setType,
    toggleAnimation,
    setLabel,
    setEndMarkerType,
} from '../slices/edgesSlice';

const initialState = [
    {
        source: 'node_1',
        sourceHandle: 'right_1',
        target: 'node_2',
        targetHandle: 'left_1',
        id: 'reactflow__edge-node_1right_1-node_2left_1',
        animated: false,
        type: 'smoothstep',
        label: '<<include>>',
        markerEnd: {
            type: 'arrowclosed',
            width: 20,
            height: 20,
            color: '#6868fd',
        },
        style: {
            strokeWidth: 1,
            stroke: '#6868fd',
        },
        selected: false,
    },
];

describe('edgesSlice', () => {
    it('should return default state when passed an empty action', () => {
        const result = edgeReducer(undefined, { type: '' });

        expect(result).toEqual([]);
    });

    it('should set type of edge with "setType" action', () => {
        const action = { type: setType.type, payload: { id: 0, type: 'step' } };

        const result = edgeReducer(initialState, action);

        expect(result[0].type).toBe('step');
    });

    it('should toggle animation of edge with "toggleAnimation" action', () => {
        const action = { type: toggleAnimation.type, payload: 0 };

        const result = edgeReducer(initialState, action);

        expect(result[0].animated).toBe(true);
    });

    it('should set label of edge with "setLabel" action', () => {
        const action = {
            type: setLabel.type,
            payload: { id: 0, label: 'changed' },
        };

        const result = edgeReducer(initialState, action);

        expect(result[0].label).toBe('changed');
    });

    it('should set end marker type of edge with "setEndMarketType" action', () => {
        const action = {
            type: setEndMarkerType.type,
            payload: { id: 0, type: 'arrow' },
        };

        const result = edgeReducer(initialState, action);

        expect(result[0].markerEnd.type).toBe('arrow');
    });
});
