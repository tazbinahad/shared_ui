import { DefaultValues, UseFormProps, UseFormReturn } from "react-hook-form";
type SetFieldsValueParams<T> = Partial<T>;
declare const useCustomForm: <T extends Record<string, any>>(options?: UseFormProps<T> & {
    defaultValues?: DefaultValues<T>;
}) => UseFormReturn<T> & {
    setFieldsValue: (values: SetFieldsValueParams<T>) => void;
};
export { useCustomForm };
