import { memo } from 'react';

const ColorSelect = ({ changeColorHandle, value }) => {
    return (
        <div>
            <label>Color: </label>
            <input type='color' value={value} onChange={changeColorHandle} />
        </div>
    );
};

export default memo(ColorSelect);
