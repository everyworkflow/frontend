/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React from 'react';
import DataFormPageComponent from '@everyworkflow/data-form-bundle/Component/DataFormPageComponent';

const OrderFormPage = () => {
    return (
        <DataFormPageComponent
            title="Order"
            getPath="/sales/order/{uuid}"
            savePath="/sales/order/{uuid}"
        />
    );
};

export default OrderFormPage;
