import { memo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Handle, Position, useUpdateNodeInternals } from 'reactflow';
import { setLabel } from '../../slices/nodesSlice';
import { NodeResizer } from 'reactflow';

export const RectNodeControl = ({ id }) => {
    const dispatch = useDispatch();

    const setLabelHandle = (e) => {
        dispatch(setLabel({ id: id, label: e.target.value }));
    };

    const data = useSelector((state) => state.nodes[id]);

    return (
        <input type='text' value={data.data.label} onChange={setLabelHandle} />
    );
};

const RectNode = ({ id, data, selected }) => {
    const updateNodeInternals = useUpdateNodeInternals();

    const [handles, setHandles] = useState([
        { type: 'target', position: Position.Left, id: 'handle_1' },
    ]);

    const addHandle = () => {
        setHandles((h) => [
            ...h,
            { type: 'source', position: Position.Right, id: 'handle_2' },
        ]);
        updateNodeInternals(id);
    };

    console.log('RECT RENDER');

    return (
        <div className='node rect-node'>
            <NodeResizer color='#ff0071' isVisible={selected} />
            <button onClick={addHandle}>add</button>
            <div className='node-label'>{data.label}</div>
            {handles.map((h) => (
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
    <svg style={{ width: '100%', height: '50%' }}>
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
