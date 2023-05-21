import { useState, useEffect, memo } from 'react';
import { Handle, Position } from 'reactflow';

export const RectNodeControl = memo(({ id, data, setNodes }) => {
    const [label, setLabel] = useState(data.label);

    useEffect(() => {
        setNodes((nds) =>
            nds.map((node, nodeId) => {
                if (nodeId === id) {
                    node.data = {
                        ...node.data,
                        label: label,
                    };
                }

                return node;
            })
        );
    }, [label, setNodes]);

    console.log('Rect Node Control render!');

    return (
        <input
            type='text'
            value={label}
            onChange={(e) => setLabel([e.target.value])}
        />
    );
});

const RectNode = ({ data }) => {
    return (
        <div className='rect-node'>
            <div>{data.label}</div>
            <Handle type='target' position={Position.Right} />
        </div>
    );
};

export default RectNode;
