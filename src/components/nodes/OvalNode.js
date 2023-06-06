import { memo } from 'react';
import { Handle } from 'reactflow';
import { NodeResizer } from 'reactflow';

const OvalNode = ({ data, selected }) => {
    return (
        <div className='node oval-node'>
            <NodeResizer color='#ff0071' isVisible={selected} />
            <div className='node-label'>{data.label.text}</div>
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

export default memo(OvalNode);

export const OvalNodeIcon = (
    <svg style={{ width: '100%', height: '60%' }}>
        <ellipse
            cx='50'
            cy='30'
            rx='40'
            ry='28'
            fill='rgb(241, 243, 244)'
            stroke='rgb(0, 0, 0)'
            strokeWidth='1'
        />
    </svg>
);
