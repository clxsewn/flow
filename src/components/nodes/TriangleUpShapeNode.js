import { Handle, NodeResizer, Position } from 'reactflow';
import { memo } from 'react';

const TriangleUpShapeNode = ({ selected, data }) => {
    return (
        <div className='node triangle-node'>
            <NodeResizer color='#ff0071' isVisible={selected} />
            <div
                className='node-text'
                style={{
                    color: data.label.color,
                    fontSize: data.label.fontSize,
                }}
            >
                {data.label.text}
            </div>
            <svg height='100%' width='100%'>
                <polygon
                    points={`${data.width / 2},0 0,${data.height - 1} 
                    ${data.width},${data.height - 1}`}
                    style={{
                        fill: data.fillColor,
                        stroke: 'black',
                        strokeWidth: 1,
                    }}
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

export default memo(TriangleUpShapeNode);

export const TriangleUpShapeNodeIcon = (
    <svg style={{ width: '100%', height: '100%' }}>
        <polygon
            points='50,10 10,90 90,90'
            fill='rgb(241, 243, 244)'
            stroke='rgb(0, 0, 0)'
            strokeWidth='1.3'
        />
    </svg>
);

export const TU_PH = [
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
            left: '75%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
        },
    },
];
