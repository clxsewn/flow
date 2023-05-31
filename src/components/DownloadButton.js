import React from 'react';
import { useReactFlow, getRectOfNodes, getTransformForBounds } from 'reactflow';
import { toPng, toJpeg, toSvg } from 'html-to-image';

function DownloadButton({ ...props }) {
    const { getNodes } = useReactFlow();
    console.log('btn render');

    const onClick = (at) => {
        function downloadImage(dataUrl) {
            const a = document.createElement('a');

            a.setAttribute('download', `reactflow.${at}`);
            a.setAttribute('href', dataUrl);
            a.click();
        }

        const nodesBounds = getRectOfNodes(getNodes());
        const transform = getTransformForBounds(
            nodesBounds,
            nodesBounds.width,
            nodesBounds.height
        );

        const accord = {
            png: toPng,
            jpeg: toJpeg,
            svg: toSvg,
        };

        const func = accord[at];

        func(document.querySelector('.react-flow__viewport'), {
            backgroundColor: '#ffffff',
            width: nodesBounds.width,
            height: nodesBounds.height,
            style: {
                width: nodesBounds.width,
                height: nodesBounds.height,
                transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`,
            },
        }).then(downloadImage);
    };

    return (
        <div {...props}>
            <div className='btn-group'>
                <button
                    type='button'
                    className='btn btn-outline-success'
                    onClick={() => onClick('png')}
                >
                    <div className='justify-content'>
                        <i class='bi bi-image'></i>
                        <span>Зберегти (рисунок)</span>
                    </div>
                </button>
                <button
                    type='button'
                    className='btn btn-outline-success dropdown-toggle dropdown-toggle-split'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                ></button>
                <ul className='dropdown-menu'>
                    <li>
                        <button
                            className='dropdown-item'
                            onClick={() => onClick('png')}
                        >
                            Зберегти як PNG
                        </button>
                    </li>
                    <li>
                        <button
                            className='dropdown-item'
                            onClick={() => onClick('jpeg')}
                        >
                            Зберегти як JPEG
                        </button>
                    </li>
                    <li>
                        <button
                            className='dropdown-item'
                            onClick={() => onClick('svg')}
                        >
                            Зберегти як SVG
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DownloadButton;
