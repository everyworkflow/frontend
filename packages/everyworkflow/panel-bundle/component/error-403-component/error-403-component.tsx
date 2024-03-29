/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import { Link } from 'react-router-dom';
import { Result, Button } from "antd";

const Error403Component = () => {
    return (
        <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<Link to={'/'}><Button type="primary">Back Home</Button></Link>}
        />
    );
}

export default Error403Component;
