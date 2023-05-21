import { memo, useState } from 'react';
import ColorSelect from './ColorSelect';
import { Select, MenuItem, Button, Tabs, Tab, Box } from '@mui/material';

const bgVariants = [
    {
        text: 'Точки',
        value: 'dots',
        size: 1,
        gap: 25,
    },
    {
        text: 'Лінії',
        value: 'lines',
        gap: 25,
        lineWidth: 1,
    },
    {
        text: 'Хрестики',
        value: 'cross',
        size: 6,
        gap: 25,
    },
];

export const initialBgOpts = bgVariants[0];

const BgControl = memo(({ opts, setOpts }) => {
    const selectBgVariantHandle = (e) => {
        bgVariants.forEach((i) => {
            if (i.value === e.target.value) {
                setOpts(i);
            }
        });
    };

    const changeGapHandle = (op) => {
        setOpts((s) => {
            return {
                ...s,
                gap: s.gap + op,
            };
        });
    };

    const changeSizeHandle = (op) => {
        setOpts((s) => {
            return {
                ...s,
                size: s.size + op,
            };
        });
    };

    const changeLineWidthHandle = (op) => {
        setOpts((s) => {
            return {
                ...s,
                lineWidth: s.lineWidth + op,
            };
        });
    };

    const changeColorHandle = (e) => {
        setOpts((s) => {
            return {
                ...s,
                color: e.target.value,
            };
        });
    };

    // const SelItems = () => {
    //     return (
    //         <Select onChange={selectBgVariantHandle} value={'dots'}>
    //             {bgVariants.map((v) => (
    //                 <MenuItem key={v.value} value={v.value}>
    //                     {v.text}
    //                 </MenuItem>
    //             ))}
    //         </Select>
    //     );
    // };

    console.log('bg control render');

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box
                sx={{
                    maxWidth: { xs: 320, sm: 480 },
                    bgcolor: 'background.paper',
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant='scrollable'
                    scrollButtons='auto'
                    aria-label='scrollable auto tabs example'
                >
                    <Tab label='Item One' />
                    <Tab label='Item Two' />
                    <Tab label='Item Three' />
                    <Tab label='Item Four' />
                    <Tab label='Item Five' />
                    <Tab label='Item Six' />
                    <Tab label='Item Seven' />
                </Tabs>
            </Box>
            <label htmlFor='bgVar'>Тип фону:</label>
            <div>
                <Select onChange={selectBgVariantHandle} value={opts.value}>
                    {bgVariants.map((v) => (
                        <MenuItem key={v.value} value={v.value}>
                            {v.text}
                        </MenuItem>
                    ))}
                </Select>
                <Button variant='outlined' onClick={() => changeGapHandle(-2)}>
                    -2
                </Button>
                <label>Gap {opts.gap}</label>
                <Button variant='outlined' onClick={() => changeGapHandle(2)}>
                    +2
                </Button>
            </div>

            {opts.value !== 'lines' ? (
                <div>
                    <Button
                        variant='outlined'
                        onClick={() => changeSizeHandle(-2)}
                    >
                        -2
                    </Button>
                    <label>Size {opts.size}</label>
                    <Button
                        variant='outlined'
                        onClick={() => changeSizeHandle(2)}
                    >
                        +2
                    </Button>
                </div>
            ) : (
                <div>
                    <Button
                        variant='outlined'
                        onClick={() => changeLineWidthHandle(-2)}
                    >
                        -2
                    </Button>
                    <label>Line Width {opts.lineWidth}</label>
                    <Button
                        variant='outlined'
                        onClick={() => changeLineWidthHandle(2)}
                    >
                        +2
                    </Button>
                </div>
            )}
            <ColorSelect
                value={opts.value}
                changeColorHandle={changeColorHandle}
            />
        </div>
    );
});

export default BgControl;
