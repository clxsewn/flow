import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Handle, Position } from 'reactflow';
import { setLabel } from '../../slices/nodesSlice';
import { NodeResizer } from 'reactflow';
import ResizerWrapper from '../ResizerWrapper';

export const RoundedRectangleNodeControl = ({ id }) => {
    const dispatch = useDispatch();

    const setLabelHandle = (e) => {
        dispatch(setLabel({ id: id, label: e.target.value }));
    };

    const data = useSelector((state) => state.nodes[id]);

    return (
        <input type='text' value={data.data.label} onChange={setLabelHandle} />
    );
};

const RoundedRectangleNode = ({ data, selected }) => {
    return (
        <div className='node rounded-rectangle-node'>
            <ResizerWrapper
                color='#ff0071'
                isVisible={selected}
                width={data.width}
                height={data.height}
            />
            <div className='node-label'>
                <div>{data.label.text}</div>
            </div>
            <Handle type='target' position={Position.Right} />
        </div>
    );
};

export default RoundedRectangleNode;

export const RoundedRectangleNodeIcon = (
    <svg style={{ width: '80%', height: '50%' }}>
        <rect
            x='1.3'
            y='1.3'
            width='96%'
            height='96%'
            rx='7'
            ry='7'
            fill='rgb(241, 243, 244)'
            stroke='rgb(0, 0, 0)'
            strokeWidth='1.3'
        />
    </svg>
);
