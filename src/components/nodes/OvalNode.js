import { memo } from 'react';
import DefaultNodeInner from '../DefaultNodeInner';

const OvalNode = ({ data, selected }) => {
    const { width, height } = data;

    return (
        <div className='node'>
            <DefaultNodeInner data={data} selected={selected} />
            <svg width={data.width} height={data.height}>
                <ellipse
                    cx={width / 2}
                    cy={height / 2}
                    rx={width / 2 - 1}
                    ry={height / 2 - 1}
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

export default memo(OvalNode);

export const OvalNodeIcon = (
    <svg style={{ width: '100%', height: '60%' }}>
        <ellipse
            cx='50'
            cy='30'
            rx='40'
            ry='28'
            fill='rgb(241, 243, 244)'
            stroke='rgb(0, 0, 0)'
            strokeWidth='1'
        />
    </svg>
);
