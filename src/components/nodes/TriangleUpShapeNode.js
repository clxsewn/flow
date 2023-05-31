import {
    Handle,
    NodeResizer,
    Position,
    useUpdateNodeInternals,
} from 'reactflow';
import { useDispatch, useSelector } from 'react-redux';
import {
    setLabel,
    addHandle,
    deleteHandle,
    setTextColor,
    setFillColor,
    toggleHandle,
} from '../../slices/nodesSlice';
import { memo } from 'react';
import { TabList, Tabs, Tab, TabPanel } from 'react-tabs';

export const TriangleUpShapeNodeControl = ({ id }) => {
    const node = useSelector((state) => state.nodes[id]);

    const dispatch = useDispatch();
    const updateNodeInternals = useUpdateNodeInternals();

    const unusedHandles = possibleHandles.filter((h) => {
        return node.data.handles.findIndex((n) => n.id === h.id) === -1;
    });

    const setLabelHandle = (e) => {
        dispatch(setLabel({ id: id, label: e.target.value }));
    };

    const addHandle_ = (pId) => {
        dispatch(addHandle({ id: id, handle: unusedHandles[pId] }));
        updateNodeInternals(node.id);
    };

    const deleteHandle_ = (hId) => {
        dispatch(deleteHandle({ id: id, hId: hId }));
        updateNodeInternals(node.id);
    };

    const setTextColorHandle = (e) => {
        dispatch(setTextColor({ id: id, color: e.target.value }));
    };

    const setFillColorHandle = (e) => {
        dispatch(setFillColor({ id: id, color: e.target.value }));
    };

    const toggleHndl = (hId) => {
        dispatch(toggleHandle({ id: id, hId: hId }));
        updateNodeInternals(node.id);
    };

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Вигляд</Tab>
                    <Tab>Підключення</Tab>
                </TabList>
                <TabPanel className='container'>
                    <label htmlFor='label' className='form-label'>
                        Текст
                    </label>
                    <input
                        type='text'
                        id='label'
                        className='form-control mb-3'
                        value={node.data.label.text}
                        onChange={setLabelHandle}
                    />
                    <div className='justify-content mb-1'>
                        <label htmlFor='text-color' className='form-label'>
                            Колір тексту
                        </label>
                        <input
                            id='text-color'
                            type='color'
                            value={node.data.label.color}
                            onChange={setTextColorHandle}
                        />
                    </div>
                    <div className='justify-content'>
                        <label htmlFor='fill-color' className='form-label'>
                            Колір фону
                        </label>
                        <input
                            id='bg-color'
                            type='color'
                            value={node.data.fillColor}
                            onChange={setFillColorHandle}
                        />
                    </div>
                </TabPanel>
                <TabPanel>
                    {unusedHandles.map((h, hId) => {
                        return (
                            <div key={h.id}>
                                <button onClick={() => addHandle_(hId)}>
                                    Add {h.name} handle
                                </button>
                            </div>
                        );
                    })}
                    {node.data.handles.map((h, hId) => {
                        return (
                            <fieldset key={h.id} className='handle-border'>
                                <legend className='handle-border'>
                                    Хендл:{' '}
                                    {h.type === 'source' ? 'Джерело' : 'Ціль'}
                                </legend>
                                <button
                                    className='btn btn-outline-danger btn-sm'
                                    onClick={() => toggleHndl(hId)}
                                >
                                    Змінити {h.name}
                                </button>
                                <button
                                    className='btn btn-outline-danger btn-sm'
                                    onClick={() => deleteHandle_(hId)}
                                >
                                    Видалити {h.name}
                                </button>
                            </fieldset>
                        );
                    })}
                </TabPanel>
            </Tabs>
        </div>
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
        style: {
            left: '25%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
        },
    },
    {
        id: 'right_1',
        name: 'Right',
        position: Position.Right,
        style: {
            left: '75%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
        },
    },
];

export const TU_PH = possibleHandles;

const TriangleUpShapeNode = ({ selected, data }) => {
    return (
        <div className='node triangle-node'>
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
                    points={`${data.width / 2},0 0,${data.height} 
                    ${data.width},${data.height}`}
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
                    id={h.id}
                    position={h.position}
                    style={h.style}
                    type={h.type}
                />
            ))}
        </div>
    );
};

export default memo(TriangleUpShapeNode);

export const TriangleUpShapeNodeIcon = (
    <svg style={{ width: '100%', height: '100%' }}>
        <polygon
            points='50,10 10,90 90,90'
            fill='rgb(241, 243, 244)'
            stroke='rgb(0, 0, 0)'
            strokeWidth='1.3'
        />
    </svg>
);
