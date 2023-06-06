import { NodeResizer } from 'reactflow';

const ResizerWrapper = ({ width, height, isVisible, ...props }) => {
    return (
        <>
            {isVisible ? (
                <>
                    <NodeResizer {...props} />
                    <div className='sizes-tip'>
                        {width}x{height}
                    </div>
                </>
            ) : (
                ''
            )}
        </>
    );
};

export default ResizerWrapper;
