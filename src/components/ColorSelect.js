import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setColor } from '../slices/bgSlice';

const ColorSelect = () => {
    const dispatch = useDispatch();
    const color = useSelector((state) => state.bg.color);

    return (
        <div>
            <label>Колір: </label>
            <input
                type='color'
                value={color}
                onChange={(e) => dispatch(setColor(e.target.value))}
            />
        </div>
    );
};

export default memo(ColorSelect);
