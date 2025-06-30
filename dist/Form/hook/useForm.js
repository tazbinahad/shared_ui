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
import { useForm, } from "react-hook-form";
var useCustomForm = function (options) {
    var form = useForm(options); // Directly use options without manual destructuring
    // Method to set multiple field values by merging with current values
    var setFieldsValue = function (values) {
        return form.reset(__assign(__assign({}, form.getValues()), values));
    };
    return __assign(__assign({}, form), { setFieldsValue: setFieldsValue });
};
export { useCustomForm };
