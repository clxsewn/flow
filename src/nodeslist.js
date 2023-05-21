import RectNode, { RectNodeControl } from './components/nodes/RectNode';
import TableNode, { TableNodeControl } from './components/nodes/TableNode';

export const NODE_LIST = {
    tableNode: {
        node: TableNode,
        control: TableNodeControl,
        defaultData: { label: ['Table Node'] },
    },

    rectNode: {
        node: RectNode,
        control: RectNodeControl,
        defaultData: { label: 'Rect Node' },
    },
};

export const NODE_TYPES = Object.keys(NODE_LIST);
