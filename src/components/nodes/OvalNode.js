import { memo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Handle, Position, useUpdateNodeInternals } from 'reactflow';
import { setLabel } from '../../slices/nodesSlice';
import { NodeResizer } from 'reactflow';

export const OvalNodeControl = ({ id }) => {
    const dispatch = useDispatch();

    const setLabelHandle = (e) => {
        dispatch(setLabel({ id: id, label: e.target.value }));
    };

    const data = useSelector((state) => state.nodes[id]);

    return (
        <input type='text' value={data.data.label} onChange={setLabelHandle} />
    );
};

const possibleHandles = [
    {
        id: 'top_1',
        name: 'Top',
        position: Position.Top,
        style: {},
    },
    {
        id: 'bottom_1',
        name: 'Bottom',
        position: Position.Bottom,
        style: {},
    },
    {
        id: 'left_1',
        name: 'Left',
        position: Position.Left,
        style: {},
    },
    {
        id: 'right_1',
        name: 'Right',
        position: Position.Right,
        style: {},
    },
];

const OvalNode = ({ id, data, selected }) => {
    return (
        <div className='node oval-node'>
            <NodeResizer color='#ff0071' isVisible={selected} />
            <div>{data.label.text}</div>
            {possibleHandles.map((h) => (
                <Handle
                    key={h.id}
                    id={h.id}
                    position={h.position}
                    style={h.style}
                />
            ))}
        </div>
    );
};

export default memo(OvalNode);

export const OvalNodeIcon = (
    <svg style={{ width: '100%', height: '50%' }}>
        <ellipse
            cx='50'
            cy='25'
            rx='49'
            ry='24'
            fill='rgb(241, 243, 244)'
            stroke='rgb(0, 0, 0)'
            strokeWidth='1'
        />
    </svg>
);
