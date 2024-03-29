/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import {cleanup, fireEvent, render} from '@testing-library/react';
import MediaGridItem from '../component/media-grid-item';

afterEach(cleanup);

test('Media manager --> grid item must show base_name on hover', () => {
    const result = render(
        <MediaGridItem itemData={{
            file_name: 'file_name',
            extension: 'tsx',
            size: 55,
            path: 'path',
            path_name: 'path_name',
            real_path: 'real_path',
            type: 'tsx',
            is_readable: false,
            is_writable: false,
            created_at: 'created_at',
            updated_at: 'updated_at',
            thumbnail_path: 'thumbnail_path',
        }} />
    );

    expect(result.queryByLabelText(/file_name/i)).toBeNull();

    fireEvent.mouseOver(result.getByAltText(/file_name/i));

    expect(result.queryByLabelText(/file_name/i)).toBeDefined();
});
