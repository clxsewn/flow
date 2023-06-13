import nodeReducer, {
    setLabel,
    changeFontSize,
    toggleHandleType,
    deleteHandle,
} from '../slices/nodesSlice';

const initialState = [
    {
        id: 'node_5eba3065',
        type: 'rectNode',
        position: {
            x: 160,
            y: 640,
        },
        width: 120,
        height: 120,
        data: {
            label: {
                text: 'Квадрат',
                color: '#000000',
                fontSize: 18,
            },
            fillColor: '#ffffff',
            handles: [
                {
                    id: 'right_1',
                    name: 'Справа',
                    position: 'right',
                    style: {
                        left: 'calc(100% - 1px)',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        opacity: '1',
                    },
                    type: 'source',
                },
            ],
            width: 120,
            height: 120,
        },
        selected: false,
        dragging: false,
        style: {
            width: 120,
            height: 120,
        },
        resizing: false,
        positionAbsolute: {
            x: 160,
            y: 640,
        },
    },
];

describe('nodesSlice', () => {
    it('should return default state when passed an empty action', () => {
        const result = nodeReducer(undefined, { type: '' });

        expect(result).toEqual([]);
    });

    it('should change node label with "setLabel" action', () => {
        const action = {
            type: setLabel.type,
            payload: { id: 0, label: 'changed' },
        };

        const result = nodeReducer(initialState, action);

        expect(result[0].data.label.text).toBe('changed');
    });

    it('should change node label font size with "changeFontSize" action', () => {
        const action = {
            type: changeFontSize.type,
            payload: { id: 0, shift: 2 },
        };

        const result = nodeReducer(initialState, action);

        expect(result[0].data.label.fontSize).toBe(
            initialState[0].data.label.fontSize + 2
        );
    });

    it('should change node handle type from "source" to "target" with "toggleHandleType" action', () => {
        const action = {
            type: toggleHandleType.type,
            payload: { id: 0, hId: 0 },
        };

        const result = nodeReducer(initialState, action);

        expect(result[0].data.handles[0].type).toBe('target');
    });

    it('should delete node handle with "deleteHandle" action', () => {
        const action = {
            type: deleteHandle.type,
            payload: { id: 0, hId: 0 },
        };

        const result = nodeReducer(initialState, action);

        expect(result[0].data.handles.length).toBe(0);
    });
});
