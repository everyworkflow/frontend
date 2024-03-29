/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import { useContext, useCallback } from 'react';
import { Row, Col, Anchor } from 'antd';
import SectionRenderComponent from "@everyworkflow/data-form-bundle/component/section-render-component";
import FieldRenderComponent from "@everyworkflow/data-form-bundle/component/field-render-component";
import FormContext from '@everyworkflow/data-form-bundle/context/form-context';
import PanelContext from '@everyworkflow/panel-bundle/context/panel-context';

const DataFormContentComponent = () => {
    const { state: panelState } = useContext(PanelContext);
    const { state: formState } = useContext(FormContext);

    const getSortedSectionData = (sections: Array<any>): Array<any> => {
        return sections?.sort((a: any, b: any) => {
            if (a.sort_order > b.sort_order) return 1;
            if (a.sort_order < b.sort_order) return -1;
            return 0;
        });
    };

    const renderContent = useCallback(() => {
        return (
            <>
                {(formState.form_data?.fields && formState.form_data?.fields.length > 0) && (
                    <FieldRenderComponent fields={formState.form_data.fields} />
                )}
                {(formState.form_data?.sections && formState.form_data?.sections.length > 0) && (
                    <SectionRenderComponent sections={formState.form_data.sections} />
                )}
            </>
        );
    }, [formState.form_data]);

    const getAnchorData = useCallback(() => {
        let items: Array<any> = [];
        getSortedSectionData(formState.form_data?.sections ?? []).map((item: any, index: number) => {
            items.push({
                key: index.toString(),
                href: '#form-section-' + item.code,
                title: item.title,
            });
        });
        return items;
    }, [formState.form_data?.sections]);

    if (formState.form_data?.is_side_form_anchor_enable) {
        if (formState.form_data?.side_form_anchor_position === 'right') {
            return (
                <Row>
                    <Col md={{ order: 2, span: 4 }}>
                        <Anchor
                            affix={!panelState.is_mobile}
                            offsetTop={55 + 16}
                            style={{ marginBottom: 24 }}
                            items={getAnchorData()} />
                    </Col>
                    <Col md={{ order: 1, span: 20 }}>
                        {renderContent()}
                    </Col>
                </Row>
            );
        } else {
            return (
                <Row>
                    <Col md={{ span: 4 }} style={{ paddingLeft: 16 }}>
                        <Anchor
                            affix={!panelState.is_mobile}
                            offsetTop={55 + 16}
                            style={{ marginBottom: 24 }}
                            items={getAnchorData()} />
                    </Col>
                    <Col md={{ span: 20 }}>
                        {renderContent()}
                    </Col>
                </Row>
            );
        }
    }

    return (
        <>
            {renderContent()}
        </>
    );
};

export default DataFormContentComponent;
