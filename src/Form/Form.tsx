import { FC } from "react";
import { FormProvider, useFormContext, useWatch } from "react-hook-form";
import { IFormItemProps, IFormProps } from "./interface";

const Form: FC<IFormProps> = ({ form, onSubmit, children }) => {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="h-full">
        {children}
      </form>
    </FormProvider>
  );
};

const FormItem: FC<IFormItemProps> = ({ children }) => {
  const { control } = useFormContext();
  const values = useWatch({ control });

  return <>{children(values)}</>;
};
export { Form, FormItem };
