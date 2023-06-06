import { Background } from 'reactflow';

const BgWrapper = ({ bg }) => {
    return (
        <Background
            variant={bg.variant}
            size={bg.size}
            gap={bg.gap}
            lineWidth={bg.lineWidth}
            color={bg.color}
        />
    );
};

export default BgWrapper;
