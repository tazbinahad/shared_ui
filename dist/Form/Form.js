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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { FormProvider, useFormContext, useWatch } from "react-hook-form";
var Form = function (_a) {
    var form = _a.form, onSubmit = _a.onSubmit, children = _a.children;
    return (_jsx(FormProvider, __assign({}, form, { children: _jsx("form", { onSubmit: form.handleSubmit(onSubmit), className: "h-full", children: children }) })));
};
var FormItem = function (_a) {
    var children = _a.children;
    var control = useFormContext().control;
    var values = useWatch({ control: control });
    return _jsx(_Fragment, { children: children(values) });
};
export { Form, FormItem };
