import { memo } from 'react';
import { nodeListCategories } from '../nodeUtils';

const NodesList = () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    let categoryId = 0;

    return (
        <aside>
            <div className='description'>
                Ви можете перетягувати фігури на полотно.
            </div>
            <div
                className='accordion accordion-flush'
                id='accordionPanelsStayOpenExample'
            >
                {nodeListCategories.map((c) => (
                    <div key={c.id} className='accordion-item'>
                        <h2 className='accordion-header'>
                            <button
                                className='accordion-button'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target={`#panelsStayOpen-collapse${categoryId}`}
                                aria-expanded='true'
                                aria-controls={`panelsStayOpen-collapse${categoryId}`}
                            >
                                {c.title}
                            </button>
                        </h2>
                        <div
                            id={`panelsStayOpen-collapse${categoryId++}`}
                            className='accordion-collapse collapse show'
                        >
                            <div className='accordion-body node-list'>
                                {c.nodes.map((n) => (
                                    <div
                                        key={n.id}
                                        className='node-item'
                                        onDragStart={(event) =>
                                            onDragStart(event, n.name)
                                        }
                                        draggable
                                        title={n.title}
                                    >
                                        {n.icon}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default memo(NodesList);
