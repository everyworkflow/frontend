/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import { Image } from 'antd';
import MediaIconHelper from '@everyworkflow/media-manager-bundle/helper/media-icon-helper';
import UrlHelper from "@everyworkflow/panel-bundle/helper/url-helper";

interface MediaGridItemContentProps {
    title?: string;
    pathName?: string;
    extension?: string;
    thumbnailPath?: string;
    imageSize?: number;
}

const MediaGridItemContent = ({
    title,
    pathName,
    extension,
    thumbnailPath,
    imageSize = 122,
}: MediaGridItemContentProps) => {
    const isSvgImage = () => {
        if (extension === 'svg') {
            return true;
        } else if (pathName?.endsWith('.svg')) {
            return true;
        }

        return false;
    }

    if (thumbnailPath && extension !== 'svg') {
        return (
            <Image
                height={imageSize}
                width={imageSize}
                src={UrlHelper.buildImgUrlFromPath(thumbnailPath)}
                style={{ display: 'inline-block' }}
                alt={title}
                preview={false}
            />
        );
    } else if (isSvgImage()) {
        return (
            <Image
                height={imageSize}
                width={imageSize}
                src={UrlHelper.buildImgUrlFromPath(pathName)}
                style={{ display: 'inline-block' }}
                alt={title}
                preview={false}
            />
        );
    }

    return (
        <>
            {MediaIconHelper.getIconSvgForType(extension ?? '', imageSize)}
            <div
                style={{
                    fontSize: 11,
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    textAlign: 'center',
                    padding: '0 4px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}>
                {title}
            </div>
        </>
    );
};

export default MediaGridItemContent;
