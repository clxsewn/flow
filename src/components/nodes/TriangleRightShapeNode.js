import { Handle, NodeResizer, Position } from 'reactflow';
import { useDispatch, useSelector } from 'react-redux';
import { setLabel } from '../../slices/nodesSlice';
import { memo } from 'react';

export const TriangleRightShapeNodeControl = ({ id }) => {
    const dispatch = useDispatch();

    const setLabelHandle = (e) => {
        dispatch(setLabel({ id: id, label: e.target.value }));
    };

    const data = useSelector((state) => state.nodes[id]);

    return (
        <input type='text' value={data.data.label} onChange={setLabelHandle} />
    );
};

const possibleHandles = [
    {
        id: 'top_1',
        name: 'Top',
        position: Position.Top,
        style: {
            left: '50%',
            top: '25%',
            transform: 'translate(-50%, -50%)',
        },
    },
    {
        id: 'bottom_1',
        name: 'Top',
        position: Position.Bottom,
        style: {
            left: '50%',
            top: '75%',
            transform: 'translate(-50%, -50%)',
        },
    },
    {
        id: 'left_1',
        name: 'Left',
        position: Position.Left,
        style: {},
    },
    {
        id: 'right_1',
        name: 'Right',
        position: Position.Right,
        style: {},
    },
];

export const TR_PH = possibleHandles;

const TriangleRightShapeNode = ({ selected, data }) => {
    return (
        <div className='node'>
            <NodeResizer color='#ff0071' isVisible={selected} />
            <svg width='100%' height='100%'>
                <polygon
                    points={`1,1 ${data.width},${data.height / 2} 1,${
                        data.height
                    }`}
                    style={{ fill: 'white', stroke: 'black', strokeWidth: 1 }}
                />
            </svg>
            {possibleHandles.map((h) => (
                <Handle
                    key={h.id}
                    id={h.id}
                    position={h.position}
                    style={h.style}
                />
            ))}
        </div>
    );
};

export default memo(TriangleRightShapeNode);

export const TriangleRightShapeNodeIcon = (
    <svg style={{ width: '100%', height: '100%' }}>
        <polygon
            points='10,10 10,90 90,50'
            fill='rgb(241, 243, 244)'
            stroke='rgb(0, 0, 0)'
            strokeWidth='1.3'
        />
    </svg>
);
