import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { Background } from 'reactflow';

const BgWrapper = () => {
    const opts = useSelector((state) => state.bg);

    // console.log('<BgWrapper /> render');

    return (
        <Background
            variant={opts.variant}
            size={opts.size}
            gap={opts.gap}
            lineWidth={opts.lineWidth}
            color={opts.color}
        />
    );
};

export default BgWrapper;
