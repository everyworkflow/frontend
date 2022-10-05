/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import { createContext } from 'react';
import MediaManagerStateInterface from '../Model/MediaManagerStateInterface';
import {mediaManagerState} from "@everyworkflow/media-manager-bundle/State/MediaManagerState";

export interface MediaManagerContextInterface {
    state: MediaManagerStateInterface;
    dispatch: any;
}

const MediaManagerContext = createContext<MediaManagerContextInterface>({
    state: mediaManagerState,
    dispatch: () => null,
});

export default MediaManagerContext;
