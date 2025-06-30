import {
  DefaultValues,
  useForm,
  UseFormProps,
  UseFormReturn,
} from "react-hook-form";

// Define type for the setFieldsValue parameters
type SetFieldsValueParams<T> = Partial<T>;

const useCustomForm = <T extends Record<string, any>>(
  options?: UseFormProps<T> & { defaultValues?: DefaultValues<T> },
): UseFormReturn<T> & {
  setFieldsValue: (values: SetFieldsValueParams<T>) => void;
} => {
  const form = useForm<T>(options); // Directly use options without manual destructuring

  // Method to set multiple field values by merging with current values
  const setFieldsValue = (values: SetFieldsValueParams<T>) =>
    form.reset({
      ...form.getValues(), // Retain existing values
      ...values, // Merge new values
    });

  return {
    ...form,
    setFieldsValue,
  };
};

export { useCustomForm };
