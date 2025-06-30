import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
export var Divider = function (_a) {
    var text = _a.text, _b = _a.orientation, orientation = _b === void 0 ? "center" : _b, _c = _a.orientationMargin, orientationMargin = _c === void 0 ? 0.5 : _c, _d = _a.dashed, dashed = _d === void 0 ? false : _d, className = _a.className;
    // Determine the class for line style: solid or dashed
    var lineStyle = dashed ? "border-t border-dashed" : "border-t";
    // Alignment classes for text based on orientation
    var textPositionClasses = {
        left: "justify-start",
        center: "justify-center",
        right: "justify-end",
    };
    return (_jsxs("div", { className: classNames("relative flex items-center ".concat(textPositionClasses[orientation], " my-4 text-lg font-medium text-gray-500"), className), children: [_jsx("span", { className: classNames("".concat(lineStyle, " border-gray-300"), {
                    "flex-grow": orientation !== "left",
                }), style: {
                    width: orientation === "left" ? orientationMargin + "px" : undefined,
                } }), text && (_jsx("span", { className: classNames("whitespace-nowrap px-4"), children: text })), _jsx("span", { className: classNames("".concat(lineStyle, " border-gray-300"), {
                    "flex-grow": orientation !== "right",
                }), style: {
                    width: orientation === "right" ? orientationMargin + "px" : undefined,
                } })] }));
};
