/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Card } from 'antd';
import PanelContext from "@everyworkflow/panel-bundle/context/panel-context";
import { ACTION_SET_PAGE_TITLE } from "@everyworkflow/panel-bundle/reducer/panel-reducer";
import Remote from "@everyworkflow/panel-bundle/service/remote";
import PageHeaderComponent from "@everyworkflow/admin-panel-bundle/component/page-header-component";
import BreadcrumbComponent from "@everyworkflow/admin-panel-bundle/component/breadcrumb-component";
import DataFormComponent from "@everyworkflow/data-form-bundle/component/data-form-component";
import PageBuilderComponent from "@everyworkflow/page-builder-bundle/component/page-builder-component";
import { MODE_EDIT } from "@everyworkflow/page-builder-bundle/component/page-builder-component/page-builder-component";
import PageBuilderInterface from "@everyworkflow/page-builder-bundle/model/page-builder-interface";
import AlertAction, { ALERT_TYPE_ERROR, ALERT_TYPE_SUCCESS } from "@everyworkflow/panel-bundle/action/alert-action";
import { FORM_TYPE_HORIZONTAL } from "@everyworkflow/data-form-bundle/component/data-form-component/data-form-component";
import ValidationError from '@everyworkflow/panel-bundle/error/validation-error';

const SUBMIT_SAVE_CHANGES = 'save_changes';
const SUBMIT_SAVE_CHANGES_AND_CONTINUE = 'save_changes_and_continue';

const FormPage = () => {
    const { dispatch: panelDispatch } = useContext(PanelContext);
    const { uuid = 'create' }: any = useParams();
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [formErrors, setFormErrors] = useState<any>();
    const [remoteData, setRemoteData] = useState<any>();
    const [pageBuilderData, setPageBuilderData] = useState<PageBuilderInterface | undefined>();
    let submitAction: string | undefined = undefined;

    useEffect(() => {
        panelDispatch({
            type: ACTION_SET_PAGE_TITLE,
            payload: uuid !== 'create' ? 'Edit page' : 'Create page',
        });

        const handleResponse = (response: any) => {
            if (response.item?.page_builder_data?.block_data) {
                setPageBuilderData(response.item.page_builder_data);
            } else {
                setPageBuilderData({ block_data: [] });
            }
            setRemoteData(response);
        };

        const fetchItem = async () => {
            try {
                const response: any = await Remote.get('/cms/page/' + uuid + '?for=data-form');
                handleResponse(response);
            } catch (error: any) {
                AlertAction({
                    description: error.message,
                    message: 'Fetch error',
                    type: ALERT_TYPE_ERROR,
                });
            }
        };

        fetchItem();
    }, [panelDispatch, uuid]);

    const onSubmit = async (data: any) => {
        const submitData: any = {
            page_builder_data: pageBuilderData,
        };
        Object.keys(data).forEach(name => {
            if (data[name] !== undefined) {
                submitData[name] = data[name];
            }
        });

        const handlePostResponse = (response: any) => {
            AlertAction({
                description: response.detail,
                message: 'Form submit success',
                type: ALERT_TYPE_SUCCESS,
            });
            if (submitAction === SUBMIT_SAVE_CHANGES) {
                navigate(-1);
            }
        };

        try {
            const response = await Remote.post('/cms/page/' + uuid, submitData);
            handlePostResponse(response);
        } catch (error: any) {
            if (error instanceof ValidationError) {
                setFormErrors(error.errors);
            }

            AlertAction({
                description: error.message,
                message: 'Submit error',
                type: ALERT_TYPE_ERROR,
            });
        }
    };

    const getHeaderActions = () => {
        const headerActions: Array<any> = [
            {
                button_label: 'Save changes',
                button_type: 'primary',
                onClick: () => {
                    submitAction = SUBMIT_SAVE_CHANGES;
                    form.submit();
                },
            },
        ];

        if (uuid && uuid !== 'create') {
            headerActions.push({
                button_label: 'Save changes and continue',
                button_type: 'primary',
                onClick: () => {
                    submitAction = SUBMIT_SAVE_CHANGES_AND_CONTINUE;
                    form.submit();
                },
            });
        }

        return headerActions;
    }

    return (
        <>
            <PageHeaderComponent
                title={uuid !== 'default' ? `ID: ${uuid}` : undefined}
                actions={getHeaderActions()}
            />
            <BreadcrumbComponent />
            {remoteData && (
                <DataFormComponent
                    form={form}
                    initialValues={remoteData.item}
                    formErrors={formErrors}
                    formData={remoteData.data_form}
                    formType={FORM_TYPE_HORIZONTAL}
                    onSubmit={onSubmit}
                />
            )}
            <Card
                className="app-container"
                title={'Page builder'}
                style={{ marginBottom: 24 }}
                bodyStyle={{ display: 'none' }}
            />
            <div className="app-container">
                {pageBuilderData && <PageBuilderComponent
                    pageBuilderData={pageBuilderData}
                    mode={MODE_EDIT}
                    onChange={(data) => {
                        console.log('page-builder form-page onChange -> data', data);
                        setPageBuilderData(data);
                    }} />}
            </div>
        </>
    );
};

export default FormPage;
