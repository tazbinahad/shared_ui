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
export var IconEye = function (props) {
    var _a = props.height, height = _a === void 0 ? "24" : _a, _b = props.width, width = _b === void 0 ? "24" : _b, _c = props.color, color = _c === void 0 ? "#999DA3" : _c;
    return (_jsxs("svg", __assign({ width: width, height: height, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { children: [_jsx("path", { d: "M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z", stroke: color, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z", stroke: color, strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" })] })));
};
