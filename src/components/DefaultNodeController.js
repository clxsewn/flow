import { useUpdateNodeInternals } from 'reactflow';
import { useDispatch } from 'react-redux';
import {
    setLabel,
    addHandle,
    deleteHandle,
    setTextColor,
    setFillColor,
    toggleHandleType,
    changeFontSize,
    toggleHandleVisibility,
} from '../slices/nodesSlice';
import { TabList, Tabs, Tab, TabPanel } from 'react-tabs';
import { nodesExplore } from '../nodeUtils';
import { memo } from 'react';

const handleTranslate = {
    source: {
        text: 'Джерело',
        icon: <i className='bi bi-box-arrow-up'></i>,
    },
    target: {
        text: 'Ціль',
        icon: <i className='bi bi-box-arrow-in-down'></i>,
    },
};

const DefaultNodeController = ({ id, node }) => {
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
        dispatch(toggleHandleType({ id: id, hId: hId }));
        updateNodeInternals(node.id);
    };

    const toggleHndlVisibility = (hId) => {
        dispatch(toggleHandleVisibility({ id: id, hId: hId }));
        updateNodeInternals(node.id);
    };

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Вигляд</Tab>
                    <Tab>Точки з'єднань</Tab>
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
                        autoFocus={true}
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
                    <div className='justify-content mb-3'>
                        <label htmlFor='text-color'>Колір тексту</label>
                        <input
                            id='text-color'
                            type='color'
                            value={node.data.label.color}
                            onChange={setTextColorHandle}
                        />
                    </div>
                    <div className='justify-content'>
                        <label htmlFor='fill-color'>Колір фону</label>
                        <input
                            id='fill-color'
                            type='color'
                            value={node.data.fillColor}
                            onChange={setFillColorHandle}
                        />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='container'>
                        <div className='d-grid gap-2 mb-3'>
                            {unusedHandles.map((h, hId) => {
                                return (
                                    <button
                                        key={h.id}
                                        className='btn btn-outline-success mb-1'
                                        onClick={() => addHandle_(hId)}
                                        type='button'
                                    >
                                        + {h.name}
                                    </button>
                                );
                            })}
                        </div>
                        {node.data.handles.map((h, hId) => {
                            return (
                                <fieldset key={h.id} className='handle-border'>
                                    <legend className='handle-border'>
                                        {h.name}: {handleTranslate[h.type].text}{' '}
                                        {handleTranslate[h.type].icon}
                                    </legend>
                                    <div className='d-grid gap-2'>
                                        <button
                                            className='btn btn-outline-secondary btn-sm'
                                            onClick={() => toggleHndl(hId)}
                                        >
                                            <div className='justify-content'>
                                                <i className='bi bi-arrow-left-right'></i>
                                                <span>Переключити</span>
                                            </div>
                                        </button>
                                        <button
                                            className='btn btn-outline-secondary btn-sm'
                                            onClick={() =>
                                                toggleHndlVisibility(hId)
                                            }
                                        >
                                            <div className='justify-content'>
                                                <i className='bi bi-eye-fill'></i>
                                                <span>
                                                    Приховати / Відобразити
                                                </span>
                                            </div>
                                        </button>
                                        <button
                                            className='btn btn-outline-danger btn-sm'
                                            onClick={() => deleteHandle_(hId)}
                                        >
                                            <div className='justify-content'>
                                                <i className='bi bi-x-circle'></i>
                                                <span>Видалити</span>
                                            </div>
                                        </button>
                                    </div>
                                </fieldset>
                            );
                        })}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default memo(DefaultNodeController);
