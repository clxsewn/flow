import { memo } from 'react';
import { Handle } from 'reactflow';
import { NodeResizer } from 'reactflow';

const OctagonNode = ({ data, selected }) => {
    const { width, height } = data;
    return (
        <div className='node'>
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
                    points={`${width * 0.25},1 ${width * 0.75},1 ${width - 1},${
                        height * 0.25
                    } ${width - 1},${height * 0.75} ${width * 0.75},${
                        height - 1
                    } ${width * 0.25},${height - 1} 1,${height * 0.75} 1,${
                        height * 0.25
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
            {selected ? (
                <div className='sizes-tip'>
                    {width}x{height}
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default memo(OctagonNode);

export const OctagonNodeIcon = (
    <svg style={{ width: '100%', height: '100%' }}>
        <polygon
            points='30,10 70,10 90,30 90,70 70,90 30,90 10,70 10,30'
            fill='rgb(241, 243, 244)'
            stroke='rgb(0, 0, 0)'
            strokeWidth='1.3'
        />
    </svg>
);
