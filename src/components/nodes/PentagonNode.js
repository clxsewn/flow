import { memo } from 'react';
import { Handle } from 'reactflow';
import { NodeResizer } from 'reactflow';
import ResizerWrapper from '../ResizerWrapper';

const PentagonNode = ({ data, selected }) => {
    const { width, height } = data;
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
                    points={`${width / 2},0 ${width},${height * 0.4} ${
                        width * 0.8
                    },${height - 1} ${width * 0.2},${height - 1} 0,${
                        height * 0.4
                    }`}
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
                    style={h.style}
                />
            ))}
        </div>
    );
};

export default memo(PentagonNode);

export const PentagonNodeIcon = (
    <svg style={{ width: '100%', height: '100%' }}>
        <polygon
            points='50,10 90,40 75,90 25,90 10,40'
            fill='rgb(241, 243, 244)'
            stroke='rgb(0, 0, 0)'
            strokeWidth='1.3'
        />
    </svg>
);
