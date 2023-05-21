import { Checkbox, FormControlLabel, MenuItem, Select } from '@mui/material';

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

const EdgeControl = ({ id, data, setEdges }) => {
    const setTypeHandle = (event) => {
        setEdges((e) => {
            const t = [...e];
            t[id].type = event.target.value;
            return t;
        });
    };

    const setAnimated = (event) => {
        setEdges((e) => {
            const t = [...e];
            t[id].animated = event.target.checked;
            return t;
        });
    };

    if (!data.type) data.type = 'default';

    return (
        <div>
            <Select value={data.type} onChange={setTypeHandle}>
                {edgeTypes.map((t) => (
                    <MenuItem key={t.type} value={t.type}>
                        {t.text}
                    </MenuItem>
                ))}
            </Select>
            <FormControlLabel
                control={
                    <Checkbox checked={data?.animated} onChange={setAnimated} />
                }
                label='Анімація'
            />
        </div>
    );
};

export default EdgeControl;
