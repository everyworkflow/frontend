/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import { useContext } from 'react';
import { Form, Input, Image } from 'antd';
import MediaManagerContext from '@everyworkflow/media-manager-bundle/context/media-manager-context';
import UrlHelper from "@everyworkflow/panel-bundle/helper/url-helper";

const MediaConfigPanel = () => {
    const { state: mediaState } = useContext(MediaManagerContext);

    const getHumanReadableSize = () => {
        const size = mediaState.selected_media_for_config?.size;
        if (size && size > 1000 && size <= 1000000) {
            return (Number(size) / 1000).toFixed(1) + ' KB';
        } else if (size && size > 1000000 && size <= 1000000000) {
            return (Number(size) / 1000000).toFixed(1) + ' MB';
        } else if (size && size > 1000000000) {
            return (Number(size) / 1000000000).toFixed(1) + ' GB';
        }
        return size + ' bytes';
    };

    return (
        <>
            <div style={{ marginBottom: 24 }}>
                {['svg', 'png', 'jpg', 'jpeg', 'gif', 'webp'].includes(mediaState.selected_media_for_config?.extension ?? '') ? (
                    <Image
                        preview={false}
                        src={UrlHelper.buildImgUrlFromPath(mediaState.selected_media_for_config?.path_name)}
                        style={{ maxWidth: '100%', maxHeight: '100vh' }}
                        alt={mediaState.selected_media_for_config?.file_name ?? ''}
                    />
                ) : mediaState.selected_media_for_config?.thumbnail_path !== undefined ? (
                    <Image
                        preview={false}
                        src={UrlHelper.buildImgUrlFromPath(mediaState.selected_media_for_config?.thumbnail_path)}
                        style={{ maxWidth: '100%', maxHeight: '100vh' }}
                        alt={mediaState.selected_media_for_config?.file_name ?? ''}
                    />
                ) : null}
            </div>
            <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                <Form.Item
                    label="Name"
                    name="name"
                    initialValue={mediaState.selected_media_for_config?.file_name}>
                    <Input readOnly={true} bordered={false} />
                </Form.Item>
                <Form.Item
                    label="Path"
                    name="path"
                    initialValue={mediaState.selected_media_for_config?.path}>
                    <Input readOnly={true} bordered={false} />
                </Form.Item>
                <Form.Item
                    label="Path name"
                    name="path_name"
                    initialValue={mediaState.selected_media_for_config?.path_name}>
                    <Input readOnly={true} bordered={false} />
                </Form.Item>
                {mediaState.selected_media_for_config?.thumbnail_path !== undefined && (
                    <Form.Item
                        label="Thumbnail path"
                        name="thumbnail_path"
                        initialValue={mediaState.selected_media_for_config?.thumbnail_path}>
                        <Input readOnly={true} bordered={false} />
                    </Form.Item>
                )}
                <Form.Item
                    label="Type"
                    name="type"
                    initialValue={mediaState.selected_media_for_config?.type}>
                    <Input readOnly={true} bordered={false} />
                </Form.Item>
                <Form.Item
                    label="Extension"
                    name="extension"
                    initialValue={mediaState.selected_media_for_config?.extension}>
                    <Input readOnly={true} bordered={false} />
                </Form.Item>
                <Form.Item
                    label="Size"
                    name="size"
                    initialValue={getHumanReadableSize()}>
                    <Input readOnly={true} bordered={false} />
                </Form.Item>
                <Form.Item
                    label="Is readable"
                    name="is_readable"
                    initialValue={
                        mediaState.selected_media_for_config?.is_readable ? 'Yes' : 'No'
                    }>
                    <Input readOnly={true} bordered={false} />
                </Form.Item>
                <Form.Item
                    label="Is writable"
                    name="is_writable"
                    initialValue={
                        mediaState.selected_media_for_config?.is_writable ? 'Yes' : 'No'
                    }>
                    <Input readOnly={true} bordered={false} />
                </Form.Item>
            </Form>
        </>
    );
};

export default MediaConfigPanel;
