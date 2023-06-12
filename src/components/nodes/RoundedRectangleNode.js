import { memo } from 'react';
import DefaultNodeInner from '../DefaultNodeInner';

const RoundedRectangleNode = ({ data, selected }) => {
    return (
        <div className='node'>
            <DefaultNodeInner data={data} selected={selected} />
            <svg width={data.width} height={data.height}>
                <rect
                    x='1'
                    y='1'
                    width={data.width - 2}
                    height={data.height - 2}
                    rx='7'
                    ry='7'
                    fill={data.fillColor}
                    stroke='rgb(0, 0, 0)'
                    strokeWidth='1'
                />
            </svg>
        </div>
    );
};

export default memo(RoundedRectangleNode);

export const RoundedRectangleNodeIcon = (
    <svg style={{ width: '80%', height: '50%' }}>
        <rect
            x='1.3'
            y='1.3'
            width='96%'
            height='96%'
            rx='7'
            ry='7'
            fill='rgb(241, 243, 244)'
            stroke='rgb(0, 0, 0)'
            strokeWidth='1.3'
        />
    </svg>
);
