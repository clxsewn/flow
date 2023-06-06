import { memo } from 'react';
import { Handle } from 'reactflow';
import { NodeResizer } from 'reactflow';

const TextNode = ({ data, selected }) => {
    return (
        <div className='node'>
            <NodeResizer color='#ff0071' isVisible={selected} />
            <span
                className='node-label'
                style={{
                    fontSize: data.label.fontSize,
                    color: data.label.color,
                }}
            >
                {data.label.text}
            </span>
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

export default memo(TextNode);

export const TextNodeIcon = <span style={{ fontSize: 20 }}>Текст</span>;
