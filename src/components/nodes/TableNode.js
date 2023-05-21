import { memo, useState, useEffect } from 'react';
import { Handle, Position, NodeResizer } from 'reactflow';

export const TableNodeControl = memo(({ id, data, setNodes }) => {
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

    console.log('Table Node Control render!');

    return (
        <div>
            <input
                type='text'
                value={label[0]}
                onChange={(e) => setLabel([e.target.value])}
            />
            <button onClick={() => setLabel((lbl) => [...lbl, 'New Line'])}>
                Add Line
            </button>
            <button
                onClick={() =>
                    setLabel((lbl) => {
                        const arr = [...lbl];
                        arr.pop();
                        return arr;
                    })
                }
            >
                Delete line
            </button>
        </div>
    );
});

const TableNode = ({ data, selected }) => {
    return (
        <div className='table-node'>
            <NodeResizer
                color='#ff0071'
                isVisible={selected}
                minWidth={100}
                minHeight={30 * data.label.length}
            />
            <Handle type='target' position={Position.Left} />
            <div className='table-node__inner'>
                {data.label.map((l, id) => (
                    <div key={id} className='table-node__inner-item'>
                        {l}
                    </div>
                ))}
            </div>
            <Handle type='source' position={Position.Right} />
        </div>
    );
};

export default memo(TableNode);
