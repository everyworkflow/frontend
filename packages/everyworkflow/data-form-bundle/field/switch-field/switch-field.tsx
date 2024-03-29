/*
 * @copyright EveryWorkflow. All rights reserved.
 */

import { useContext, useState, useCallback } from 'react';
import { Form, Space, Switch } from 'antd';
import SwitchFieldInterface from '@everyworkflow/data-form-bundle/model/field/switch-field-interface';
import DynamicFieldPropsInterface from "@everyworkflow/data-form-bundle/model/dynamic-field-props-interface";
import FormContext from '@everyworkflow/data-form-bundle/context/form-context';
import { FORM_MODE_VIEW } from '@everyworkflow/data-form-bundle/component/data-form-component/data-form-component';

interface SwitchFieldProps extends DynamicFieldPropsInterface {
    fieldData: SwitchFieldInterface;
}

const SwitchField = ({ fieldData, onChange, children }: SwitchFieldProps) => {
    const { state: formState } = useContext(FormContext);
    const [switchStatus, setSwitchStatus] = useState(!!fieldData.name && !!formState.initial_values[fieldData.name]);

    const getErrorMessage = useCallback(() => {
        if (formState.form_errors && fieldData.name && formState.form_errors[fieldData.name] &&
            formState.form_errors[fieldData.name].errors && formState.form_errors[fieldData.name].errors[0]) {
            return formState.form_errors[fieldData.name].errors[0].toString();
        }
        return undefined;
    }, [fieldData, formState.form_errors]);

    const handleChange = (checked: boolean) => {
        const updateValues: any = {};
        if (fieldData.name) {
            updateValues[fieldData.name] = checked;
        }
        if (Object.keys(updateValues).length) {
            formState.form?.setFieldsValue(updateValues);
        }
        setSwitchStatus(checked);
        if (onChange) {
            onChange(checked);
        }
    };

    if (formState.mode === FORM_MODE_VIEW) {
        if (fieldData?.value) {
            if (fieldData.checked_label) {
                return <span>{fieldData.checked_label}</span>;
            }
            return <span>Yes</span>;
        }
        if (fieldData.unchecked_label) {
            return <span>{fieldData.unchecked_label}</span>;
        }
        return <span>No</span>;
    }

    if (fieldData.name && formState.hidden_field_names?.includes(fieldData.name)) {
        return null;
    }

    return (
        <>
            <Form.Item
                style={!!(fieldData.name && formState.invisible_field_names?.includes(fieldData.name)) ? {
                    display: 'none',
                } : undefined}
                name={fieldData.name}
                label={fieldData.label}
                valuePropName="checked"
                initialValue={switchStatus}
                validateStatus={getErrorMessage() ? 'error' : undefined}
                help={getErrorMessage()}>
                <Space>
                    <Switch
                        checkedChildren={fieldData.checked_label}
                        unCheckedChildren={fieldData.unchecked_label}
                        checked={switchStatus}
                        onChange={handleChange}
                        disabled={fieldData.is_disabled || !!(fieldData.name && formState.disable_field_names?.includes(fieldData.name))}
                    />
                    <span>{fieldData.help_text}</span>
                </Space>
            </Form.Item>
            {children}
        </>
    );
};

export default SwitchField;
