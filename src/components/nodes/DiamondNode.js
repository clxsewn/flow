import { memo } from 'react';
import DefaultNodeInner from '../DefaultNodeInner';

const DiamondNode = ({ data, selected }) => {
    return (
        <div className='node'>
            <DefaultNodeInner data={data} selected={selected} />
            <svg width={data.width} height={data.height}>
                <polygon
                    points={`${data.width / 2},0 ${data.width},${
                        data.height / 2
                    } ${data.width / 2},${data.height} 0,${data.height / 2}`}
                    style={{
                        fill: data.fillColor,
                        stroke: 'black',
                        strokeWidth: 1,
                    }}
                />
            </svg>
        </div>
    );
};

export default memo(DiamondNode);

export const DiamondNodeIcon = (
    <svg style={{ width: '100%', height: '100%' }}>
        <polygon
            points='50,10 90,50 50, 90, 10,50'
            fill='rgb(241, 243, 244)'
            stroke='rgb(0, 0, 0)'
            strokeWidth='1.3'
        />
    </svg>
);
