var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
import { useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { IconCheck, IconEye, IconEyeOff } from "../../Packages/Icons";
// Utility function to generate a unique ID
var generateUniqueId = function () {
    return "input-".concat(Date.now(), "-").concat(Math.floor(Math.random() * 10000));
};
export var Input = function (inputProps) {
    var label = inputProps.label, id = inputProps.id, className = inputProps.className, type = inputProps.type, prefix = inputProps.prefix, suffix = inputProps.suffix, name = inputProps.name, disabled = inputProps.disabled, _a = inputProps.inputSize, inputSize = _a === void 0 ? "Medium" : _a;
    var inputRef = useRef(null);
    var idRef = useRef(id || generateUniqueId());
    var _b = useState(false), isPasswordVisible = _b[0], setIsPasswordVisible = _b[1];
    var togglePasswordVisibility = function () {
        if (inputRef.current) {
            var cursorPosition_1 = inputRef.current.selectionStart;
            setIsPasswordVisible(function (prev) { return !prev; });
            setTimeout(function () {
                if (inputRef.current && cursorPosition_1 !== null) {
                    inputRef.current.setSelectionRange(cursorPosition_1, cursorPosition_1);
                }
            }, 0);
        }
    };
    var formContext = useFormContext();
    var isCheckbox = type === "checkbox";
    var isPassword = type === "password";
    var elSize = {
        Large: "px-3 py-2 text-sm",
        Medium: "px-2.5 py-2 text-sm",
        Small: "px-1.5 py-1 text-xs",
    };
    var commonStyle = "border border-border-color hover:border-border-color-dark focus-within:border-border-color-dark focus-within:shadow focus-within:shadow-amber-200 focus-within:rounded";
    var renderInput = function (fieldProps) { return (_jsxs("div", { className: classNames("relative flex items-center rounded transition-all duration-300 ", {
            "justify-between": isPassword,
            "flex-row-reverse items-center justify-end gap-2": isCheckbox,
        }, commonStyle), children: [prefix && _jsx("span", { children: prefix }), _jsx("input", __assign({}, fieldProps, { id: idRef.current, ref: inputRef, type: isPassword && isPasswordVisible ? "text" : type, className: classNames("w-full bg-transparent outline-none", elSize[inputSize], {
                    "sr-only": isCheckbox,
                    "rounded-r-none": isPassword,
                }), autoComplete: type, checked: isCheckbox ? fieldProps.checked : undefined, placeholder: fieldProps.placeholder, prefix: "" })), isCheckbox && (_jsx("label", { className: classNames("flex h-4 w-4 cursor-pointer items-center justify-center rounded border border-transparent p-0.5"), htmlFor: idRef.current, children: fieldProps.checked && _jsx(IconCheck, { className: "fill-text-color" }) })), isPassword && (_jsx("span", { className: "flex h-full w-auto cursor-pointer items-center px-1.5", onClick: togglePasswordVisibility, children: isPasswordVisible ? (_jsx(IconEyeOff, { height: 18, width: 18 })) : (_jsx(IconEye, { height: 18, width: 18 })) })), suffix && _jsx("span", { children: suffix })] })); };
    return (_jsxs("div", { className: classNames("flex gap-1", {
            "cursor-pointer flex-row-reverse items-center justify-end": isCheckbox,
            "flex-col": !isCheckbox,
        }, className), children: [label && (_jsx("label", { htmlFor: idRef.current, className: classNames("cursor-pointer text-sm ", {
                    "font-normal": !isCheckbox,
                }), children: label })), formContext && name ? (_jsx(Controller, { name: name, control: formContext.control, render: function (_a) {
                    var field = _a.field;
                    return renderInput(__assign(__assign(__assign({}, field), inputProps), { checked: field.value }));
                } })) : (renderInput(inputProps))] }));
};
