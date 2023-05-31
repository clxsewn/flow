import { useDispatch, useSelector } from 'react-redux';
import { setLabel, setType, toggleAnimation } from '../slices/edgesSlice';

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
        text: 'Smoothstep',
        type: 'smoothstep',
    },
    {
        text: 'Пряма',
        type: 'straight',
    },
];

const EdgeControl = () => {
    const dispatch = useDispatch();
    const edges = useSelector((state) => state.edges);
    const selectedIndex = edges.findIndex((e) => e.selected);

    const setTypeHandle = (event) => {
        dispatch(setType({ id: selectedIndex, type: event.target.value }));
    };

    const setAnimated = () => {
        dispatch(toggleAnimation(selectedIndex));
    };

    const setLabelHandle = (event) => {
        dispatch(
            setLabel({
                id: selectedIndex,
                label: event.target.value,
            })
        );
    };

    return (
        <div>
            <div>
                <input
                    type='text'
                    value={edges[selectedIndex].label}
                    onChange={setLabelHandle}
                />
            </div>
            <select value={edges[selectedIndex].type} onChange={setTypeHandle}>
                {edgeTypes.map((t) => (
                    <option key={t.type} value={t.type}>
                        {t.text}
                    </option>
                ))}
            </select>
            <input
                type='checkbox'
                checked={edges[selectedIndex].animated}
                onChange={setAnimated}
            />
        </div>
    );
};

export default EdgeControl;
