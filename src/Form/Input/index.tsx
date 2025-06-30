import classNames from "classnames";
import { FC, useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { IconCheck, IconEye, IconEyeOff } from "~/Packages/Icons";
import { IInputProps, TInputSize } from "../interface";
import { className } from "~/Packages/Interface";

// Utility function to generate a unique ID
const generateUniqueId = () =>
  `input-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

export const Input: FC<IInputProps> = (inputProps) => {
  const {
    label,
    id,
    className,
    type,
    prefix,
    suffix,
    name,
    disabled,
    inputSize = "Medium",
  } = inputProps;

  const inputRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<string>(id || generateUniqueId());

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    if (inputRef.current) {
      const cursorPosition = inputRef.current.selectionStart;
      setIsPasswordVisible((prev) => !prev);
      setTimeout(() => {
        if (inputRef.current && cursorPosition !== null) {
          inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
        }
      }, 0);
    }
  };

  const formContext = useFormContext();

  const isCheckbox = type === "checkbox";
  const isPassword = type === "password";

  const elSize: Record<TInputSize, string> = {
    Large: "px-3 py-2 text-sm",
    Medium: "px-2.5 py-2 text-sm",
    Small: "px-1.5 py-1 text-xs",
  };
  const commonStyle: className =
    "border border-border-color hover:border-border-color-dark focus-within:border-border-color-dark focus-within:shadow focus-within:shadow-amber-200 focus-within:rounded";

  const renderInput = (fieldProps: IInputProps) => (
    <div
      className={classNames(
        "relative flex items-center rounded transition-all duration-300 ",
        {
          "justify-between": isPassword,
          "flex-row-reverse items-center justify-end gap-2": isCheckbox,
        },
        commonStyle,
      )}
    >
      {prefix && <span>{prefix}</span>}
      <input
        {...fieldProps}
        id={idRef.current}
        ref={inputRef}
        type={isPassword && isPasswordVisible ? "text" : type}
        className={classNames(
          "w-full bg-transparent outline-none",
          elSize[inputSize],
          {
            "sr-only": isCheckbox,
            "rounded-r-none": isPassword,
          },
        )}
        autoComplete={type}
        checked={isCheckbox ? fieldProps.checked : undefined} // Handle checked for checkbox
        placeholder={fieldProps.placeholder}
        prefix=""
      />
      {isCheckbox && (
        <label
          className={classNames(
            "flex h-4 w-4 cursor-pointer items-center justify-center rounded border border-transparent p-0.5",
          )}
          htmlFor={idRef.current}
        >
          {fieldProps.checked && (
            <IconCheck className="fill-text-color" />
          )}
        </label>
      )}
      {isPassword && (
        <span
          className="flex h-full w-auto cursor-pointer items-center px-1.5"
          onClick={togglePasswordVisibility}
        >
          {isPasswordVisible ? (
            <IconEyeOff height={18} width={18} />
          ) : (
            <IconEye height={18} width={18} />
          )}
        </span>
      )}
      {suffix && <span>{suffix}</span>}
    </div>
  );
  return (
    <div
      className={classNames(
        "flex gap-1",
        {
          "cursor-pointer flex-row-reverse items-center justify-end":
            isCheckbox,
          "flex-col": !isCheckbox,
        },
        className,
      )}
    >
      {label && (
        <label
          htmlFor={idRef.current}
          className={classNames("cursor-pointer text-sm ", {
            "font-normal": !isCheckbox,
          })}
        >
          {label}
        </label>
      )}

      {formContext && name ? (
        <Controller
          name={name}
          control={formContext.control}
          render={({ field }) =>
            renderInput({
              ...field,
              ...inputProps,
              checked: field.value,
            })
          }
        />
      ) : (
        renderInput(inputProps)
      )}
    </div>
  );
};
