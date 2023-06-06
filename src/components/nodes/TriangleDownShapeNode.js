import { Handle, NodeResizer, Position } from 'reactflow';
import { useDispatch, useSelector } from 'react-redux';
import { setLabel } from '../../slices/nodesSlice';
import { memo } from 'react';

export const TriangleDownShapeNodeControl = ({ id }) => {
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
        style: {},
    },
    {
        id: 'bottom_1',
        name: 'Bottom',
        position: Position.Bottom,
        style: {},
    },
    {
        id: 'left_1',
        name: 'Left',
        position: Position.Left,
        style: {
            left: '25%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
        },
    },
    {
        id: 'right_1',
        name: 'Right',
        position: Position.Right,
        style: {
            opacity: '1',
            left: '75%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
        },
    },
];

export const TD_PH = possibleHandles;

const TriangleDownShapeNode = ({ selected, data }) => {
    return (
        <div className='node triangle-node'>
            <NodeResizer color='#ff0071' isVisible={selected} />
            <svg width='100%' height='100%'>
                <polygon
                    points={`1,1 ${data.width},1 ${data.width / 2},${
                        data.height
                    }`}
                    style={{ fill: 'white', stroke: 'black', strokeWidth: 1 }}
                />
            </svg>
            {data.handles.map((h) => (
                <Handle
                    key={h.id}
                    id={h.id}
                    position={h.position}
                    style={h.style}
                    type={h.type}
                />
            ))}
        </div>
    );
};

export default memo(TriangleDownShapeNode);

export const TriangleDownShapeNodeIcon = (
    <svg style={{ width: '100%', height: '100%' }}>
        <polygon
            points='10,10 90,10 50,90'
            fill='rgb(241, 243, 244)'
            stroke='rgb(0, 0, 0)'
            strokeWidth='1.3'
        />
    </svg>
);
