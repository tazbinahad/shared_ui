import React from "react";
interface Option {
    label: string;
    value: string | number;
}
interface SelectProps {
    options: Option[];
    value: string | number;
    onChange: (value: string | number) => void;
    placeholder?: string;
    className?: string;
    isSearch?: boolean;
}
declare const Select: React.FC<SelectProps>;
export default Select;
