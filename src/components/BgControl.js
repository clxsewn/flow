import { memo, useState } from 'react';
import ColorSelect from './ColorSelect';
import { useDispatch, useSelector } from 'react-redux';
import {
    changeGap,
    changeLineWidth,
    changeSize,
    selectBgVariant,
    bgVariants,
    setColor,
} from '../slices/bgSlice';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import DownloadButton from './DownloadButton';

const visibleSettings = {
    dots: [
        { title: 'Розмір', prop: 'size', handler: changeSize, step: 1 },
        { title: 'Проміжок', prop: 'gap', handler: changeGap, step: 1 },
    ],
    lines: [
        {
            title: 'Ширина ліній',
            prop: 'lineWidth',
            handler: changeLineWidth,
            step: 1,
        },
        { title: 'Проміжок', prop: 'gap', handler: changeGap, step: 1 },
    ],
    cross: [
        { title: 'Розмір', prop: 'size', handler: changeSize, step: 1 },
        { title: 'Проміжок', prop: 'gap', handler: changeGap, step: 1 },
    ],
};

const BgControl = () => {
    const dispatch = useDispatch();

    const opts = useSelector((state) => state.bg);

    console.log('<BgControl /> render');

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Фон полотна</Tab>
                    <Tab>I/O</Tab>
                </TabList>
                <TabPanel>
                    <div className='container'>
                        <div>
                            <div className='input-group flex-nowrap mb-3'>
                                <span
                                    className='input-group-text'
                                    id='addon-wrapping'
                                >
                                    Тип:
                                </span>
                                <select
                                    className='form-select'
                                    onChange={(e) =>
                                        dispatch(
                                            selectBgVariant(e.target.value)
                                        )
                                    }
                                    value={opts.variant}
                                >
                                    {bgVariants.map((v) => (
                                        <option
                                            key={v.variant}
                                            value={v.variant}
                                        >
                                            {v.text}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        {visibleSettings[opts.variant].map((s) => (
                            <div key={s.prop}>
                                <div>{s.title}</div>
                                <div className='input-group mb-3'>
                                    <button
                                        className='btn btn-outline-secondary'
                                        type='button'
                                        onClick={() =>
                                            dispatch(s.handler(-s.step))
                                        }
                                    >
                                        -{s.step}
                                    </button>
                                    <span className='input-group-text'>
                                        {opts[s.prop]}
                                    </span>
                                    <button
                                        className='btn btn-outline-secondary'
                                        type='button'
                                        onClick={() =>
                                            dispatch(s.handler(s.step))
                                        }
                                    >
                                        +{s.step}
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div className='justify-content'>
                            <label htmlFor='bg-color'>
                                Колір фону полотна:
                            </label>
                            <input
                                id='bg-color'
                                type='color'
                                value={opts.color}
                                onChange={(e) =>
                                    dispatch(setColor(e.target.value))
                                }
                            />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='container'>
                        <DownloadButton className='mb-3' />
                        <button className='btn btn-outline-success mb-3'>
                            <div className='justify-content'>
                                <i class='bi bi-file-earmark-arrow-down-fill'></i>
                                <span>Зберегти JSON</span>
                            </div>
                        </button>
                        <button className='btn btn-outline-success mb-3'>
                            <div className='justify-content'>
                                <i class='bi bi-file-earmark-arrow-up-fill'></i>{' '}
                                <span>Завантажити JSON</span>
                            </div>
                        </button>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default BgControl;
