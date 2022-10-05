/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import React, { useContext, useRef } from 'react';
import Layout from 'antd/lib/layout';
import Button from 'antd/lib/button';
import Space from 'antd/lib/space';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import MenuUnfoldOutlined from "@ant-design/icons/MenuUnfoldOutlined";
import AdminPanelContext from "@everyworkflow/admin-panel-bundle/Context/AdminPanelContext";
import { ACTION_SHOW_MOBILE_APP_SIDEBAR } from "@everyworkflow/admin-panel-bundle/Reducer/AdminPanelReducer";
import { useSize } from 'ahooks';
import PanelContext from '@everyworkflow/panel-bundle/Context/PanelContext';
import NotificationDropdown from '@everyworkflow/admin-panel-bundle/Component/HeaderComponent/NotificationDropdown';
import AccountDropdown from '@everyworkflow/admin-panel-bundle/Component/HeaderComponent/AccountDropdown';

const HeaderComponent = () => {
    const { state: panelState } = useContext(PanelContext);
    const { dispatch: adminPanelDispatch } = useContext(AdminPanelContext);
    const headerRef = useRef<HTMLDivElement>(null);
    const headerSize = useSize(headerRef);

    const onMobileNavbarClick = () => {
        adminPanelDispatch({ type: ACTION_SHOW_MOBILE_APP_SIDEBAR });
    };

    return (
        <>
            <div
                ref={headerRef}
                className="app-header-panel">
                <Layout.Header>
                    <Row gutter={16} align="middle" style={{ height: 'inherit' }}>
                        <Col span={12}>
                            <Space>
                                {headerSize?.width && headerSize?.width < 768 && (
                                    <Button
                                        type="default"
                                        id="btn-app-main-menu"
                                        onClick={onMobileNavbarClick}
                                        icon={<MenuUnfoldOutlined />} />
                                )}
                                <span style={{ fontSize: 16, fontWeight: 'bold' }}>{panelState.page_title}</span>
                            </Space>
                        </Col>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <Space>
                                <NotificationDropdown />
                                <AccountDropdown />
                            </Space>
                        </Col>
                    </Row>
                </Layout.Header>
            </div>
        </>
    );
};

export default HeaderComponent;
