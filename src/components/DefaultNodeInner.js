import ResizerWrapper from './ResizerWrapper';
import { Handle } from 'reactflow';

const DefaultNodeInner = ({ data, selected }) => {
    return (
        <>
            <ResizerWrapper
                color='#ff0071'
                isVisible={selected}
                width={data.width}
                height={data.height}
            />
            <div
                className='node-text'
                style={{
                    color: data.label.color,
                    fontSize: data.label.fontSize,
                }}
            >
                {data.label.text}
            </div>
            {data.handles.map((h) => (
                <Handle
                    key={h.id}
                    type={h.type}
                    position={h.position}
                    id={h.id}
                    style={h.style}
                />
            ))}
        </>
    );
};

export default DefaultNodeInner;
