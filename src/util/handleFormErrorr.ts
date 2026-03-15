import type { ApiErrorResponse } from "../types/types";
import { errorFieldMap,type ErrorCode } from "./errorFieldMap";
import type { FormInstance } from "antd";

export const handleFormError = (error:ApiErrorResponse, form: FormInstance) => {
    const code=error?.data?.status?.label as ErrorCode;
    const message=error?.data?.status?.messages as string;
    const field = errorFieldMap[code];
    if (field) {
        form.setFields([
            { name: field, errors: [message] },
        ]);
    }
    form.scrollToField(field);
    form.getFieldInstance(field)?.focus();
}