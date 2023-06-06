import { memo } from 'react';
import { Handle } from 'reactflow';
import ResizerWrapper from '../ResizerWrapper';

const DiamondNode = ({ data, selected }) => {
    return (
        <div className='node'>
            <ResizerWrapper
                color='#ff0071'
                isVisible={selected}
                width={data.width}
                height={data.height}
            />
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
                    points={`${data.width / 2},0 ${data.width},${
                        data.height / 2
                    } ${data.width / 2},${data.height} 0,${data.height / 2}`}
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
                    type={h.type}
                    position={h.position}
                    id={h.id}
                />
            ))}
        </div>
    );
};

export default memo(DiamondNode);

export const DiamondNodeIcon = (
    <svg style={{ width: '100%', height: '100%' }}>
        <polygon
            points='50,10 90,50 50, 90, 10,50'
            fill='rgb(241, 243, 244)'
            stroke='rgb(0, 0, 0)'
            strokeWidth='1.3'
        />
    </svg>
);
