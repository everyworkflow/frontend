/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import { useEffect, useState } from 'react';
import { theme, Tree, Dropdown, Menu, Popconfirm } from 'antd';

interface MenuItemSidebarProps {
    menuData?: Array<any>;
    onMenuItemTreeClick?: (node: any) => void;
    onMenuItemTreeDrop?: (info: any) => void;
    onTreeContextAction?: (data: any) => void;
}

const MenuItemSidebar = ({
    menuData,
    onMenuItemTreeClick,
    onMenuItemTreeDrop,
    onTreeContextAction
}: MenuItemSidebarProps) => {
    const { token } = theme.useToken();
    const [treeData, setTreeData] = useState<Array<any>>([]);

    useEffect(() => {
        const getTreeRecursively = (data: Array<any> = [], indexes: Array<number> = []) => {
            const treeData: Array<any> = [];
            data.forEach((item: any, index: number) => {
                treeData.push({
                    title: item.item_label,
                    key: [...indexes, index].join('-'),
                    indexes: [...indexes, index],
                    children: getTreeRecursively(item.children, [...indexes, index]),
                });
            });
            return treeData;
        }
        const newTreeData = getTreeRecursively(menuData);

        setTreeData(newTreeData);
    }, [menuData]);

    return (
        <div className="tree-sidebar tree-sidebar-inline"
            style={{
                padding: token.padding,
            }}>
            <Tree
                onClick={(_, node: any) => {
                    if (onMenuItemTreeClick) {
                        onMenuItemTreeClick(node)
                    }
                }}
                defaultExpandAll={true}
                autoExpandParent={true}
                defaultExpandParent={true}
                draggable
                treeData={treeData}
                onDrop={onMenuItemTreeDrop}
                onContextMenu={() => (<h1>Hello</h1>)}
                titleRender={(node: any) => {
                    return (
                        <Dropdown
                            overlay={(
                                <Menu>
                                    <Menu.Item
                                        key="add-new-item-below"
                                        onClick={(e: any) => {
                                            e.domEvent.stopPropagation();
                                            if (onTreeContextAction) {
                                                onTreeContextAction({
                                                    type: 'add-new-item-below',
                                                    node: node,
                                                });
                                            }
                                        }}>Add new item below</Menu.Item>
                                    <Menu.Item
                                        key="add-new-children-item"
                                        onClick={(e: any) => {
                                            e.domEvent.stopPropagation();
                                            if (onTreeContextAction) {
                                                onTreeContextAction({
                                                    type: 'add-new-children-item',
                                                    node: node,
                                                });
                                            }
                                        }}>Add new children item</Menu.Item>
                                    <Popconfirm
                                        overlayStyle={{
                                            zIndex: 1050,
                                        }}
                                        title={"Are you sure？"}
                                        onConfirm={() => {
                                            if (onTreeContextAction) {
                                                onTreeContextAction({
                                                    type: 'delete-item',
                                                    node: node,
                                                });
                                            }
                                        }}
                                        okText="Yes"
                                        cancelText="No">
                                        <Menu.Item
                                            key="delete-item"
                                            onClick={(e: any) => {
                                                e.domEvent.stopPropagation();
                                            }}
                                            danger={true}>Delete item</Menu.Item>
                                    </Popconfirm>
                                </Menu>
                            )}
                            trigger={['contextMenu']}>
                            <div><span className="ant-tree-title">{node.title}</span></div>
                        </Dropdown>
                    )
                }}
            />
        </div>
    );
};

export default MenuItemSidebar;
