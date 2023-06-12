import { memo } from 'react';
import DefaultNodeInner from '../DefaultNodeInner';

const HexagonNode = ({ data, selected }) => {
    const { width, height } = data;
    return (
        <div className='node'>
            <DefaultNodeInner data={data} selected={selected} />
            <svg width={data.width} height={data.height}>
                <polygon
                    points={`${width / 2},1 ${width - 1},${height * 0.25} ${
                        width - 1
                    },${height * 0.75} ${width / 2},${height} 1,${
                        height * 0.75
                    } 1,${height * 0.25}`}
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

export default memo(HexagonNode);

export const HexagonNodeIcon = (
    <svg style={{ width: '100%', height: '100%' }}>
        <polygon
            points='50,10 90,30 90,70 50,90 10,70 10,30'
            fill='rgb(241, 243, 244)'
            stroke='rgb(0, 0, 0)'
            strokeWidth='1.3'
        />
    </svg>
);
