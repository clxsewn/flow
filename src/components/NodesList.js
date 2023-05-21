import { memo } from 'react';

const NodesList = memo(() => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    console.log('Node List render!');

    return (
        <aside>
            <div className='description'>
                You can drag these nodes to the pane on the right.
            </div>
            <div
                className='dndnode input'
                onDragStart={(event) => onDragStart(event, 'textUpdater')}
                draggable
            >
                Text Updater
            </div>
            <div
                className='dndnode'
                onDragStart={(event) => onDragStart(event, 'tableNode')}
                draggable
            >
                Table Node
            </div>
            <div
                onDragStart={(event) => onDragStart(event, 'rectNode')}
                draggable
            >
                <svg
                    style={{
                        left: '1px',
                        top: '1px',
                        width: '32px',
                        height: '30px',
                        display: 'block',
                        position: 'relative',
                        overflow: 'hidden',
                        pointerEvents: 'none',
                    }}
                >
                    <g style={{ pointerEvents: 'none' }}>
                        <g style={{ pointerEvents: 'none' }}></g>
                        <g style={{ pointerEvents: 'none' }}>
                            <g
                                transform='translate(0.5,0.5)'
                                style={{
                                    visibility: 'visible',
                                    pointerEvents: 'none',
                                }}
                            >
                                <rect
                                    x='1.44'
                                    y='7.68'
                                    width='28.8'
                                    height='14.4'
                                    fill='rgb(241, 243, 244)'
                                    stroke='rgb(0, 0, 0)'
                                    strokeWidth='1.3'
                                    style={{ pointerEvents: 'none' }}
                                ></rect>
                            </g>
                        </g>
                        <g style={{ pointerEvents: 'none' }}></g>
                        <g style={{ pointerEvents: 'none' }}></g>
                    </g>
                </svg>
            </div>
        </aside>
    );
});

export default NodesList;
