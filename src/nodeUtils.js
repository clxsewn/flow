import TextUpdaterNode from './components/nodes/TextUpdaterNode';
import TableNode, { TableNodeControl } from './components/nodes/TableNode';
import RectNode, {
    RectNodeControl,
    rectNodeIcon,
} from './components/nodes/RectNode';
import RoundedRectangleNode, {
    RoundedRectangleNodeControl,
    RoundedRectangleNodeIcon,
} from './components/nodes/RoundedRectangleNode';
import OvalNode, {
    OvalNodeControl,
    OvalNodeIcon,
} from './components/nodes/OvalNode';

import TriangleUpShapeNode, {
    TU_PH,
    TriangleUpShapeNodeControl,
    TriangleUpShapeNodeIcon,
} from './components/nodes/TriangleUpShapeNode';

import TriangleDownShapeNode, {
    TD_PH,
    TriangleDownShapeNodeControl,
    TriangleDownShapeNodeIcon,
} from './components/nodes/TriangleDownShapeNode';

import TriangleLeftShapeNode, {
    TL_PH,
    TriangleLeftShapeNodeControl,
    TriangleLeftShapeNodeIcon,
} from './components/nodes/TriangleLeftShapeNode';

import TriangleRightShapeNode, {
    TR_PH,
    TriangleRightShapeNodeControl,
    TriangleRightShapeNodeIcon,
} from './components/nodes/TriangleRightShapeNode';

import TriangleTopLeftShapeNode, {
    TTL_PH,
    TriangleTopLeftShapeNodeControl,
    TriangleTopLeftShapeNodeIcon,
} from './components/nodes/TriangleTopLeftShapeNode';
import TriangleTopRightShapeNode, {
    TTR_PH,
    TriangleTopRightShapeNodeControl,
    TriangleTopRightShapeNodeIcon,
} from './components/nodes/TriangleTopRightShapeNode';
import TriangleBottomLeftShapeNode, {
    TBL_PH,
    TriangleBottomLeftShapeNodeControl,
    TriangleBottomLeftShapeNodeIcon,
} from './components/nodes/TriangleBottomLeftShapeNode';
import TriangleBottomRightShapeNode, {
    TBR_PH,
    TriangleBottomRightShapeNodeControl,
    TriangleBottomRightShapeNodeIcon,
} from './components/nodes/TriangleBottomRightShapeNode';
import DefaultNodeController from './components/DefaultNodeController';

const defaultData = {
    label: { text: 'Node', color: '#d61a7e', position: 'center', fontSize: 18 },
    fillColor: '#ffffff',
    handles: [],
};

const defaultPossibleHandles = [
    {
        id: 'top_1',
        name: 'Top',
        position: 'top',
        style: {},
    },
    {
        id: 'bottom_1',
        name: 'Bottom',
        position: 'bottom',
        style: {},
    },
    {
        id: 'left_1',
        name: 'Left',
        position: 'left',
        style: {},
    },
    {
        id: 'right_1',
        name: 'Right',
        position: 'right',
        style: {},
    },
];

export const nodesExplore = {
    rectNode: {
        component: RectNode,
        defaultData: defaultData,
        controller: DefaultNodeController,
        possibleHandles: defaultPossibleHandles,
    },
    roundedRectNode: {
        component: RoundedRectangleNode,
        defaultData: defaultData,
        controller: DefaultNodeController,
        possibleHandles: defaultPossibleHandles,
    },
    ovalNode: {
        component: OvalNode,
        defaultData: defaultData,
        controller: DefaultNodeController,
        possibleHandles: defaultPossibleHandles,
    },
    triangleUpShapeNode: {
        component: TriangleUpShapeNode,
        defaultData: defaultData,
        controller: DefaultNodeController,
        possibleHandles: TU_PH,
    },
    triangleDownShapeNode: {
        component: TriangleDownShapeNode,
        defaultData: defaultData,
        controller: DefaultNodeController,
        possibleHandles: TD_PH,
    },
    triangleLeftShapeNode: {
        component: TriangleLeftShapeNode,
        defaultData: defaultData,
        controller: DefaultNodeController,
        possibleHandles: TL_PH,
    },
    triangleRightShapeNode: {
        component: TriangleRightShapeNode,
        defaultData: defaultData,
        controller: DefaultNodeController,
        possibleHandles: TR_PH,
    },
    triangleTopLeftShapeNode: {
        component: TriangleTopLeftShapeNode,
        defaultData: defaultData,
        controller: DefaultNodeController,
        possibleHandles: TTL_PH,
    },
    triangleTopRightShapeNode: {
        component: TriangleTopRightShapeNode,
        defaultData: defaultData,
        controller: DefaultNodeController,
        possibleHandles: TTR_PH,
    },
    triangleBottomLeftShapeNode: {
        component: TriangleBottomLeftShapeNode,
        defaultData: defaultData,
        controller: DefaultNodeController,
        possibleHandles: TBL_PH,
    },
    triangleBottomRightShapeNode: {
        component: TriangleBottomRightShapeNode,
        defaultData: defaultData,
        controller: DefaultNodeController,
        possibleHandles: TBR_PH,
    },
};

export const nodeTypes = Object.keys(nodesExplore).reduce((a, c) => {
    a[c] = nodesExplore[c].component;
    return a;
}, {});

let num = 0;

export const nodeListCategories = [
    {
        id: 'c1',
        title: 'Стандартні',
        nodes: [
            {
                id: `c1_${num++}`,
                name: 'rectNode',
                title: 'Прямокутник',
                icon: rectNodeIcon,
            },
            {
                id: `c1_${num++}`,
                name: 'roundedRectNode',
                title: 'Прямокутник округлений',
                icon: RoundedRectangleNodeIcon,
            },
            {
                id: `c1_${num++}`,
                name: 'ovalNode',
                title: 'Овал, коло',
                icon: OvalNodeIcon,
            },
        ],
    },
    {
        id: 'c2',
        title: 'Трикутники',
        nodes: [
            {
                id: `c2_${num++}`,
                name: 'triangleUpShapeNode',
                title: 'Трикутник',
                icon: TriangleUpShapeNodeIcon,
            },
            {
                id: `c2_${num++}`,
                name: 'triangleDownShapeNode',
                title: 'Трикутник',
                icon: TriangleDownShapeNodeIcon,
            },
            {
                id: `c2_${num++}`,
                name: 'triangleLeftShapeNode',
                title: 'Трикутник',
                icon: TriangleLeftShapeNodeIcon,
            },
            {
                id: `c2_${num++}`,
                name: 'triangleRightShapeNode',
                title: 'Трикутник',
                icon: TriangleRightShapeNodeIcon,
            },
            {
                id: `c2_${num++}`,
                name: 'triangleTopLeftShapeNode',
                title: 'Трикутник',
                icon: TriangleTopLeftShapeNodeIcon,
            },
            {
                id: `c2_${num++}`,
                name: 'triangleTopRightShapeNode',
                title: 'Трикутник',
                icon: TriangleTopRightShapeNodeIcon,
            },
            {
                id: `c2_${num++}`,
                name: 'triangleBottomLeftShapeNode',
                title: 'Трикутник',
                icon: TriangleBottomLeftShapeNodeIcon,
            },
            {
                id: `c2_${num++}`,
                name: 'triangleBottomRightShapeNode',
                title: 'Трикутник',
                icon: TriangleBottomRightShapeNodeIcon,
            },
        ],
    },
];
