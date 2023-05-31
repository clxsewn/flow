import { useUpdateNodeInternals } from 'reactflow';
import { useDispatch, useSelector } from 'react-redux';
import {
    setLabel,
    addHandle,
    deleteHandle,
    setTextColor,
    setFillColor,
    toggleHandle,
    changeFontSize,
} from '../slices/nodesSlice';
import { TabList, Tabs, Tab, TabPanel } from 'react-tabs';
import { nodesExplore } from '../nodeUtils';

const handleTranslate = {
    source: 'Джерело',
    target: 'Ціль',
};

const DefaultNodeController = ({ id }) => {
    const node = useSelector((state) => state.nodes[id]);

    const dispatch = useDispatch();
    const updateNodeInternals = useUpdateNodeInternals();

    const unusedHandles = nodesExplore[node.type].possibleHandles.filter(
        (h) => {
            return node.data.handles.findIndex((n) => n.id === h.id) === -1;
        }
    );

    const setLabelHandle = (e) => {
        dispatch(setLabel({ id: id, label: e.target.value }));
    };

    const changeFontSizeHandle = (shift) => {
        dispatch(changeFontSize({ id: id, shift: shift }));
    };

    const addHandle_ = (pId) => {
        dispatch(
            addHandle({
                id: id,
                handle: { ...unusedHandles[pId], type: 'source' },
            })
        );
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
                    <div>Розмір тексту</div>
                    <div className='input-group mb-3'>
                        <button
                            className='btn btn-outline-secondary'
                            type='button'
                            onClick={() => changeFontSizeHandle(-1)}
                        >
                            -1
                        </button>
                        <span className='input-group-text'>
                            {node.data.label.fontSize}
                        </span>
                        <button
                            className='btn btn-outline-secondary'
                            type='button'
                            onClick={() => changeFontSizeHandle(1)}
                        >
                            +1
                        </button>
                    </div>
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
                                    Хендл: {handleTranslate[h.type]}
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

export default DefaultNodeController;
