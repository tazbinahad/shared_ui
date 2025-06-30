import { InputHTMLAttributes, ReactNode } from "react";
import { UseFormReturn } from "react-hook-form";
export type FormValues = Record<string, any>;
export type ValidateFunction<T> = (values: T) => Partial<Record<keyof T, string>>;
export interface FormInstance<T> {
    getFieldValue: (name: keyof T) => any;
    setFieldValue: (name: keyof T, value: any) => void;
    getFieldsValue: () => T;
    resetFields: () => void;
    validateFields: () => Partial<Record<keyof T, string>>;
    initialValues: T;
}
export interface IFormProps {
    form: UseFormReturn<any>;
    onSubmit: (data: any) => void;
    children: ReactNode;
}
export interface IFormItemProps {
    children: (values: any) => ReactNode;
}
type TIgnoreProps = "prefix" | "size";
export type TInputSize = "Large" | "Medium" | "Small";
export interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, TIgnoreProps> {
    label?: string | ReactNode;
    prefix?: ReactNode;
    suffix?: ReactNode;
    inputSize?: TInputSize;
}
export interface ITextInput extends IInputProps {
}
export interface TWrapper {
    children: JSX.Element;
}
export {};
