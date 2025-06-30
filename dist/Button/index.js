import { jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
import { useButtonStyle } from "./useButtonStyle";
export var Button = function (props) {
    var content = props.content, onClick = props.onClick, _a = props.action, action = _a === void 0 ? "button" : _a, prifix = props.prifix, disabled = props.disabled;
    var _b = useButtonStyle(props), baseStyle = _b.baseStyle, buttonLayout = _b.buttonLayout, buttonSize = _b.buttonSize;
    return (_jsxs("button", { className: classNames(baseStyle, buttonLayout, buttonSize), onClick: function (event) {
            onClick === null || onClick === void 0 ? void 0 : onClick(event);
        }, type: action, disabled: disabled, children: [prifix, content] }));
};
