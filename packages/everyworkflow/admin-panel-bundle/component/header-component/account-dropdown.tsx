/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import { useCallback, useContext, useState, useEffect } from 'react';
import Dropdown from 'antd/lib/dropdown';
import Menu from 'antd/lib/menu';
import Avatar from 'antd/lib/avatar';
import Button from 'antd/lib/button';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { NavLink, useNavigate } from 'react-router-dom';
import UserOutlined from '@ant-design/icons/UserOutlined';
import FormatPainterOutlined from '@ant-design/icons/FormatPainterOutlined';
import LockOutlined from '@ant-design/icons/LockOutlined';
import LogoutOutlined from '@ant-design/icons/LogoutOutlined';
import LocalStorage from '@everyworkflow/panel-bundle/service/local-storage';
import PanelContext from '@everyworkflow/panel-bundle/context/panel-context';
import { ACTION_SET_AUTH } from '@everyworkflow/panel-bundle/reducer/panel-reducer';
import ThemeSwitcher from '@everyworkflow/admin-panel-bundle/component/header-component/theme-switcher';
import PanelConfig from '@everyworkflow/panel-bundle/config/panel-config';

const AccountDropdown = () => {
    const { dispatch: panelDispatch } = useContext(PanelContext);
    const [userData, setUserData] = useState<any>();
    const navigate = useNavigate();
    const authPrefixKey: string = PanelConfig.REACT_AUTH_PREFIX_KEY ?? 'ew_';

    useEffect(() => {
        const getUserDataFromAuth = () => {
            const ewAuth = LocalStorage.get(authPrefixKey + 'auth');
            return jwtDecode<JwtPayload>(ewAuth?.token);
        }
        try {
            const userData = getUserDataFromAuth();
            setUserData(userData);
        } catch (error: any) { }
    }, []);


    const renderUserAccountSection = () => {
        if (!userData) {
            return null;
        }

        return (
            <div className="app-account-panel-profile-section">
                <div className="profile-section-header">
                    <Avatar
                        src={userData.profile_image}
                        alt={'Account Icon'}
                        icon={<UserOutlined />}
                        size={64} />
                </div>
                <div style={{ fontWeight: 'bold' }}>{userData.first_name + ' ' + userData.last_name}</div>
                <div style={{ fontSize: 14 }}>{userData.username}</div>
            </div>
        );
    }

    const getMenuItems = useCallback((): Array<any> => {
        return [
            {
                key: 'render-user-account-section',
                style: {
                    padding: 0,
                    cursor: 'default',
                    pointerEvents: 'none',
                },
                label: renderUserAccountSection(),
            },
            {
                key: 'my-profile',
                icon: <UserOutlined />,
                label: (
                    <NavLink to={'/my-profile'}>
                        My Profile
                    </NavLink>
                ),
            },
            {
                type: 'divider',
            },
            // {
            //     key: 'activity-log',
            //     icon: <UnorderedListOutlined />,
            //     label: (
            //         <a href="#" onClick={() => {
            //             // TODO: Implement
            //         }}>Activity Log</a>
            //     ),
            // },
            // {
            //     key: 'language',
            //     icon: <GlobalOutlined />,
            //     label: (
            //         <a href="#" onClick={() => {
            //             // TODO: Implement
            //         }}>Language: EN</a>
            //     ),
            // },
            {
                key: 'theme-switcher',
                icon: <FormatPainterOutlined />,
                label: <ThemeSwitcher />,
            },

            {
                type: 'divider',
            },
            {
                key: 'lock',
                icon: <LockOutlined />,
                label: (
                    <a href="#" onClick={() => {
                        // TODO: Implement
                    }}>Lock</a>
                ),
            },
            {
                key: 'logout',
                icon: <LogoutOutlined />,
                label: (
                    <a href="#" onClick={() => {
                        LocalStorage.remove(authPrefixKey + 'auth');
                        panelDispatch({
                            type: ACTION_SET_AUTH,
                            payload: '',
                        });
                        navigate('/');
                        window.location.reload();

                    }}>Logout</a>
                ),
            },
        ];
    }, [userData]);

    return (
        <>
            <Dropdown
                overlay={(
                    <Menu
                        style={{
                            paddingTop: 0,
                        }}
                        items={getMenuItems()}
                    />
                )}
                trigger={['click']}>
                <Button
                    icon={<UserOutlined />}
                    type="default"
                    shape="circle" />
            </Dropdown>
        </>
    );
}

export default AccountDropdown;
