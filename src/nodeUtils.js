import RectNode, { rectNodeIcon } from './components/nodes/RectNode';
import RoundedRectangleNode, {
    RoundedRectangleNodeIcon,
} from './components/nodes/RoundedRectangleNode';
import OvalNode, { OvalNodeIcon } from './components/nodes/OvalNode';

import TriangleUpShapeNode, {
    TU_PH,
    TriangleUpShapeNodeIcon,
} from './components/nodes/TriangleUpShapeNode';

import TriangleDownShapeNode, {
    TD_PH,
    TriangleDownShapeNodeIcon,
} from './components/nodes/TriangleDownShapeNode';

import TriangleLeftShapeNode, {
    TL_PH,
    TriangleLeftShapeNodeIcon,
} from './components/nodes/TriangleLeftShapeNode';

import TriangleRightShapeNode, {
    TR_PH,
    TriangleRightShapeNodeIcon,
} from './components/nodes/TriangleRightShapeNode';

import TriangleTopLeftShapeNode, {
    TTL_PH,
    TriangleTopLeftShapeNodeIcon,
} from './components/nodes/TriangleTopLeftShapeNode';
import TriangleTopRightShapeNode, {
    TTR_PH,
    TriangleTopRightShapeNodeIcon,
} from './components/nodes/TriangleTopRightShapeNode';
import TriangleBottomLeftShapeNode, {
    TBL_PH,
    TriangleBottomLeftShapeNodeIcon,
} from './components/nodes/TriangleBottomLeftShapeNode';
import TriangleBottomRightShapeNode, {
    TBR_PH,
    TriangleBottomRightShapeNodeIcon,
} from './components/nodes/TriangleBottomRightShapeNode';
import DefaultNodeController from './components/DefaultNodeController';
import TextNode, { TextNodeIcon } from './components/nodes/TextNode';
import DiamondNode, { DiamondNodeIcon } from './components/nodes/DiamondNode';
import ParallelogramNode, {
    PRL_PH,
    ParallelogramNodeIcon,
} from './components/nodes/ParallelogramNode';
import PentagonNode, {
    PentagonNodeIcon,
} from './components/nodes/PentagonNode';
import HexagonNode, { HexagonNodeIcon } from './components/nodes/HexagonNode';
import OctagonNode, { OctagonNodeIcon } from './components/nodes/OctagonNode';

const defaultData = {
    label: { text: 'Node', color: '#000000', fontSize: 18 },
    fillColor: '#ffffff',
    handles: [],
    width: 100,
    height: 100,
};

const defaultPossibleHandles = [
    {
        id: 'top_1',
        name: 'Top',
        position: 'top',
        style: { left: '50%', top: '0', transform: 'translate(-50%, -50%)' },
    },
    {
        id: 'bottom_1',
        name: 'Bottom',
        position: 'bottom',
        style: { left: '50%', top: '100%', transform: 'translate(-50%, -50%)' },
    },
    {
        id: 'left_1',
        name: 'Left',
        position: 'left',
        style: { left: '0', top: '50%', transform: 'translate(-50%, -50%)' },
    },
    {
        id: 'right_1',
        name: 'Right',
        position: 'right',
        style: { left: '100%', top: '50%', transform: 'translate(-50%, -50%)' },
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
    textNode: {
        component: TextNode,
        defaultData: {
            ...defaultData,
            label: { ...defaultData.label, text: 'Текст' },
        },
        controller: DefaultNodeController,
        possibleHandles: defaultPossibleHandles,
    },
    diamondNode: {
        component: DiamondNode,
        defaultData: defaultData,
        controller: DefaultNodeController,
        possibleHandles: defaultPossibleHandles,
    },
    parallelogramNode: {
        component: ParallelogramNode,
        defaultData: defaultData,
        controller: DefaultNodeController,
        possibleHandles: PRL_PH,
    },
    pentagonNode: {
        component: PentagonNode,
        defaultData: defaultData,
        controller: DefaultNodeController,
        possibleHandles: defaultPossibleHandles,
    },
    hexagonNode: {
        component: HexagonNode,
        defaultData: defaultData,
        controller: DefaultNodeController,
        possibleHandles: defaultPossibleHandles,
    },
    octagonNode: {
        component: OctagonNode,
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
        title: 'Загальні',
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
                title: 'Коло, овал',
                icon: OvalNodeIcon,
            },
            {
                id: `c1_${num++}`,
                name: 'textNode',
                title: 'Текст',
                icon: TextNodeIcon,
            },
            {
                id: `c1_${num++}`,
                name: 'diamondNode',
                title: 'Ромб',
                icon: DiamondNodeIcon,
            },
            {
                id: `c1_${num++}`,
                name: 'parallelogramNode',
                title: 'Паралелограм',
                icon: ParallelogramNodeIcon,
            },
            {
                id: `c1_${num++}`,
                name: 'pentagonNode',
                title: "П'ятикутник",
                icon: PentagonNodeIcon,
            },
            {
                id: `c1_${num++}`,
                name: 'hexagonNode',
                title: 'Шестикутник',
                icon: HexagonNodeIcon,
            },
            {
                id: `c1_${num++}`,
                name: 'octagonNode',
                title: 'Восьмикутник',
                icon: OctagonNodeIcon,
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
