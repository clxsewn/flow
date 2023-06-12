import { useDispatch, useSelector } from 'react-redux';
import {
    setEndMarkerType,
    setLabel,
    setType,
    toggleAnimation,
    setColor,
} from '../slices/edgesSlice';
import { MarkerType } from 'reactflow';
import { memo } from 'react';

const edgeTypes = [
    {
        text: 'Крива (bezier)',
        type: 'default',
    },
    {
        text: 'Крок',
        type: 'step',
    },
    {
        text: 'Крок (заокруглений)',
        type: 'smoothstep',
    },
    {
        text: 'Пряма',
        type: 'straight',
    },
];

const markerTypes = [
    {
        text: 'Відсутній',
        type: '',
    },
    {
        text: 'Стрілка',
        type: MarkerType.Arrow,
    },
    {
        text: 'Стрілка (суцільна)',
        type: MarkerType.ArrowClosed,
    },
];

const EdgeControl = ({ id, edge }) => {
    const dispatch = useDispatch();

    const setTypeHandle = (event) => {
        dispatch(setType({ id: id, type: event.target.value }));
    };

    const setAnimated = () => {
        dispatch(toggleAnimation(id));
    };

    const setLabelHandle = (event) => {
        dispatch(
            setLabel({
                id: id,
                label: event.target.value,
            })
        );
    };

    const setEndMarkerTypeHandle = (type) => {
        dispatch(setEndMarkerType({ id: id, type: type }));
    };

    const setColorHandle = (color) => {
        dispatch(setColor({ id: id, color: color }));
    };

    return (
        <div className='container mt-3'>
            <div>
                <label htmlFor='edge-text' className='form-label'>
                    Текст
                </label>
                <input
                    id='edge-text'
                    type='text'
                    className='form-control mb-3'
                    value={edge.label}
                    onChange={setLabelHandle}
                />
            </div>
            <div className='input-group flex-nowrap mb-3'>
                <label htmlFor='edge-type' className='input-group-text'>
                    Тип
                </label>
                <select
                    id='edge-type'
                    value={edge.type}
                    className='form-select'
                    onChange={setTypeHandle}
                >
                    {edgeTypes.map((t) => (
                        <option key={t.type} value={t.type}>
                            {t.text}
                        </option>
                    ))}
                </select>
            </div>
            <div className='form-check'>
                <input
                    id='edge-anim'
                    className='form-check-input'
                    type='checkbox'
                    checked={edge.animated}
                    onChange={setAnimated}
                />
                <label className='form-check-label' htmlFor='edge-anim'>
                    Анімація
                </label>
            </div>
            <div className='input-group flex-nowrap mb-3'>
                <span className='input-group-text' id='addon-wrapping'>
                    Маркер:
                </span>
                <select
                    className='form-select'
                    onChange={(e) => setEndMarkerTypeHandle(e.target.value)}
                    value={edge.markerEnd.type}
                >
                    {markerTypes.map((v) => (
                        <option key={v.type} value={v.type}>
                            {v.text}
                        </option>
                    ))}
                </select>
            </div>
            <div className='justify-content mb-3'>
                <label htmlFor='edge-color'>Колір з'єднання:</label>
                <input
                    id='edge-color'
                    type='color'
                    value={edge.style.stroke}
                    onChange={(e) => setColorHandle(e.target.value)}
                />
            </div>
            <div>Ширина лінії</div>
            <div className='input-group mb-3'>
                <button className='btn btn-outline-secondary' type='button'>
                    -1
                </button>
                <span className='input-group-text'>
                    {edge.style.strokeWidth}
                </span>
                <button className='btn btn-outline-secondary' type='button'>
                    +1
                </button>
            </div>
        </div>
    );
};

export default memo(EdgeControl);
