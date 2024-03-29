/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import SelectedMediaItemInterface from "@everyworkflow/media-manager-bundle/model/selected-media-item-interface";
import MediaItemInterface from "@everyworkflow/media-manager-bundle/model/media-item-interface";
import MediaDirItemInterface from "@everyworkflow/media-manager-bundle/model/media-dir-item-interface";
import PreviewImageInterface from "@everyworkflow/media-manager-bundle/model/preview-image-interface";

interface MediaManagerStateInterface {
    media_manager_id?: string;
    init_type: string;
    loading: boolean;
    page_number: number;
    is_next_page_ended: boolean;
    remote_media_path: string;
    selected_media_data: Array<SelectedMediaItemInterface>;
    selected_media_for_config?: MediaItemInterface;
    media_manager_data: Array<MediaItemInterface>;
    media_manager_dir_data: Array<MediaDirItemInterface>;
    is_upload_files_visible: boolean;
    media_manager_data_change_trigger: number;
    preview_image?: PreviewImageInterface;
}

export default MediaManagerStateInterface;
