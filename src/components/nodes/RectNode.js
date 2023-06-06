import { memo } from 'react';
import { Handle } from 'reactflow';
import ResizerWrapper from '../ResizerWrapper';

const RectNode = ({ data, selected }) => {
    return (
        <div className='node rect-node'>
            <ResizerWrapper
                color='#ff0071'
                isVisible={selected}
                width={data.width}
                height={data.height}
            />
            <div className='node-label'>{data.label.text}</div>
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

export default memo(RectNode);

export const rectNodeIcon = (
    <svg style={{ width: '80%', height: '50%' }}>
        <rect
            x='1.3'
            y='1.3'
            width='96%'
            height='96%'
            fill='rgb(241, 243, 244)'
            stroke='rgb(0, 0, 0)'
            strokeWidth='1.3'
        />
    </svg>
);
