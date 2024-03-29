/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import { Upload } from 'antd';
import InboxOutlined from '@ant-design/icons/InboxOutlined';
import UrlHelper from '@everyworkflow/panel-bundle/helper/url-helper';
import AlertAction, { ALERT_TYPE_ERROR, ALERT_TYPE_SUCCESS } from '@everyworkflow/panel-bundle/action/alert-action';
import LocalStorage from '@everyworkflow/panel-bundle/service/local-storage';
import PanelConfig from '@everyworkflow/panel-bundle/config/panel-config';

interface UploadImagesProps {
    uploadPath: string;
    onNewUpload?: (data: any) => void;
}

const UploadImages = ({ uploadPath, onNewUpload }: UploadImagesProps) => {
    const authPrefixKey: string = PanelConfig.REACT_AUTH_PREFIX_KEY ?? 'ew_';

    const getProps = () => {
        const requestHeader: any = {
            'accept': 'application/json',
        };
        try {
            const authData: any = LocalStorage.get(authPrefixKey + 'auth');
            if (authData.token) {
                requestHeader['Authorization'] = 'Bearer ' + authData.token;
            }
        } catch (error: any) { }
        const props = {
            name: 'file',
            multiple: true,
            action: UrlHelper.buildApiUrl(uploadPath),
            headers: requestHeader,
            onChange: (info: any) => {
                const { status, response } = info.file;
                if (status === 'done') {
                    if (response.item && onNewUpload) {
                        onNewUpload(response.item);
                    }
                    AlertAction({
                        message: `${info.file.name} file uploaded successfully.`,
                        type: ALERT_TYPE_SUCCESS
                    });
                } else if (status === 'error') {
                    AlertAction({
                        message: `${info.file.name} file upload failed.`,
                        type: ALERT_TYPE_ERROR
                    });
                }
            },
            beforeUpload: (file: any) => {
                const isSupportedType = ['image/png', 'image/jpg', 'image/jpeg'].includes(file.type);
                if (!isSupportedType) {
                    AlertAction({
                        message: 'You can only upload images!',
                        type: ALERT_TYPE_ERROR
                    });
                }
                const isLt5M = file.size / 1024 / 1024 < 5;
                if (!isLt5M) {
                    AlertAction({
                        message: 'Image must smaller than 5MB!',
                        type: ALERT_TYPE_ERROR
                    });
                }
                return isSupportedType && isLt5M;
            }
        };
        return props;
    }

    return (
        <>
            <Upload.Dragger {...getProps()}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
            </Upload.Dragger>
        </>
    );
}

export default UploadImages;
