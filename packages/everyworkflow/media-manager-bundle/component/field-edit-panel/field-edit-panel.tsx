/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import { useState } from 'react';
import { Form, Input, Image } from 'antd';
import SidePanelComponent, {
    PANEL_SIZE_MEDIUM,
} from '@everyworkflow/panel-bundle/component/side-panel-component/side-panel-component';
import SelectedMediaItemInterface from '@everyworkflow/media-manager-bundle/model/selected-media-item-interface';
import UrlHelper from "@everyworkflow/panel-bundle/helper/url-helper";

interface FieldEditPanelProps {
    selectedMedia?: SelectedMediaItemInterface;
    onClose?: (title: string) => void;
}

const FieldEditPanel = ({ selectedMedia, onClose }: FieldEditPanelProps) => {
    const [title, setTitle] = useState<string>(selectedMedia?.title ?? '');

    return (
        <SidePanelComponent
            title="Edit media item"
            size={PANEL_SIZE_MEDIUM}
            onClose={() => {
                if (onClose) {
                    onClose(title);
                }
            }}>
            <>
                <div style={{ marginBottom: 24 }}>
                    {selectedMedia?.thumbnail_path !== undefined && (
                        <Image
                            preview={false}
                            src={UrlHelper.buildImgUrlFromPath(selectedMedia?.path_name)}
                            style={{ height: 'auto', width: 'auto', maxWidth: '100%' }}
                            alt={title}
                        />
                    )}
                </div>
                <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Form.Item label="Title" name="title" initialValue={title}>
                        <Input
                            autoFocus={true}
                            onChange={(e) => {
                                setTitle(e.currentTarget.value);
                            }}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Path name"
                        name="path_name"
                        initialValue={selectedMedia?.path_name}>
                        <Input readOnly={true} bordered={false} />
                    </Form.Item>
                    {selectedMedia?.thumbnail_path && (
                        <Form.Item
                            label="Thumbnail path"
                            name="thumbnail_path"
                            initialValue={selectedMedia.thumbnail_path}>
                            <Input readOnly={true} bordered={false} />
                        </Form.Item>
                    )}
                </Form>
            </>
        </SidePanelComponent>
    );
};

export default FieldEditPanel;
