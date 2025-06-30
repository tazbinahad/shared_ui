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
import { jsx as _jsx } from "react/jsx-runtime";
export var IconCheck = function (props) {
    var _a = props.height, height = _a === void 0 ? "24" : _a, _b = props.width, width = _b === void 0 ? "24" : _b;
    return (_jsx("svg", __assign({ width: width, height: height, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 11", fill: "inherit" }, props, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.2703 0.258767C15.5876 0.592119 15.5746 1.1196 15.2412 1.43692L5.61162 10.6036C5.44717 10.7601 5.22597 10.8428 4.99916 10.8325C4.77236 10.8222 4.55958 10.7197 4.41003 10.5489L0.706328 6.31814C0.403177 5.97184 0.43815 5.44537 0.784441 5.14222C1.13073 4.83906 1.65721 4.87404 1.96036 5.22033L5.09178 8.79737L14.0921 0.229749C14.4255 -0.0875763 14.9529 -0.0745843 15.2703 0.258767Z", fill: "inherit" }) })));
};
