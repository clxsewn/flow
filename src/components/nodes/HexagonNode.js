import { memo } from 'react';
import { Handle } from 'reactflow';
import { NodeResizer } from 'reactflow';

const HexagonNode = ({ data, selected }) => {
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
                    points={`${width / 2},1 ${width - 1},${height * 0.25} ${
                        width - 1
                    },${height * 0.75} ${width / 2},${height} 1,${
                        height * 0.75
                    } 1,${height * 0.25}`}
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
            {selected ? (
                <div className='sizes-tip'>
                    {data.width}x{data.height}
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default memo(HexagonNode);

export const HexagonNodeIcon = (
    <svg style={{ width: '100%', height: '100%' }}>
        <polygon
            points='50,10 90,30 90,70 50,90 10,70 10,30'
            fill='rgb(241, 243, 244)'
            stroke='rgb(0, 0, 0)'
            strokeWidth='1.3'
        />
    </svg>
);
