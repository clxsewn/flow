import { memo } from 'react';
import { Position } from 'reactflow';
import DefaultNodeInner from '../DefaultNodeInner';

export const PRL_PH = [
    {
        id: 'top_1',
        name: 'Top',
        position: Position.Top,
        style: {
            left: 'calc(50% + 15px)',
            top: '0',
            transform: 'translate(-50%, -50%)',
        },
    },
    {
        id: 'bottom_1',
        name: 'Bottom',
        position: Position.Bottom,
        style: {
            left: 'calc(50% - 15px)',
            top: '100%',
            transform: 'translate(-50%, -50%)',
        },
    },
    {
        id: 'left_1',
        name: 'Left',
        position: Position.Left,
        style: {
            left: '15px',
            top: '50%',
            transform: 'translate(-50%, -50%)',
        },
    },
    {
        id: 'right_1',
        name: 'Right',
        position: Position.Right,
        style: {
            left: 'calc(100% - 15px)',
            top: '50%',
            transform: 'translate(-50%, -50%)',
        },
    },
];

const ParallelogramNode = ({ data, selected }) => {
    return (
        <div className='node'>
            <DefaultNodeInner data={data} selected={selected} />
            <svg width={data.width} height={data.height}>
                <polygon
                    points={`30,1 ${data.width - 1},0 ${data.width - 30},${
                        data.height - 1
                    } 1,${data.height - 1}`}
                    style={{
                        fill: data.fillColor,
                        stroke: 'black',
                        strokeWidth: 1,
                    }}
                />
            </svg>
        </div>
    );
};

export default memo(ParallelogramNode);

export const ParallelogramNodeIcon = (
    <svg style={{ width: '100%', height: '60%' }}>
        <polygon
            points='25,10 90,10 75,59 10,59'
            fill='rgb(241, 243, 244)'
            stroke='rgb(0, 0, 0)'
            strokeWidth='1.3'
        />
    </svg>
);
