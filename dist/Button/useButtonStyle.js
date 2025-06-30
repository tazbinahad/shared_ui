import classNames from "classnames";
import { useMemo } from "react";
export var useButtonStyle = function (props) {
    var _a = props.size, size = _a === void 0 ? "Medium" : _a, _b = props.type, type = _b === void 0 ? "dark" : _b, borderLess = props.borderLess;
    var baseStyle = useMemo(function () {
        return classNames("relative flex items-center justify-center overflow-hidden rounded  text-center font-medium outline-none transition-all duration-300 cursor-pointer border", "hover:border-border-color-dark hover:bg-button-background-dark hover:text-white", "focus-within:border-border-color-dark focus-within:shadow focus-within:shadow-amber-200 focus-within:bg-button-background-dark focus-within:rounded", { "border-transparent": borderLess });
    }, [borderLess]);
    var buttonSize = useMemo(function () {
        var BUTTON_SIZE = {
            Large: "px-3 py-2 text-sm",
            Medium: "px-2.5 py-2 text-sm",
            Small: "px-1.5 py-1 text-xs",
        };
        return BUTTON_SIZE[size];
    }, [size]);
    var buttonLayout = useMemo(function () {
        var BUTTON_LAYOUT = {
            dark: "bg-button-background",
            light: "",
        };
        return BUTTON_LAYOUT[type];
    }, [type]);
    return { baseStyle: baseStyle, buttonSize: buttonSize, buttonLayout: buttonLayout };
};
