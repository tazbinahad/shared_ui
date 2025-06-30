import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { Button } from "../Button";
import classNames from "classnames";
var Modal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, children = _a.children, _b = _a.variant, variant = _b === void 0 ? "regular" : _b;
    useEffect(function () {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "";
        }
        return function () {
            document.body.style.overflow = "";
        };
    }, [isOpen]);
    if (!isOpen)
        return null;
    return (_jsx("div", { className: "fixed inset-0 flex w-full items-center justify-center", onClick: onClose, children: _jsxs("div", { className: classNames("dark:bg-card relative bg-white shadow-lg transition-transform duration-300", {
                // Regular Modal (Centered)
                "w-1/3 rounded-lg": variant === "regular",
                // Side Modals (Left or Right)
                "fixed top-0 h-full w-96": variant !== "regular",
                // Left Modal
                "ml-auto": variant === "right",
                // Right Modal
            }), onClick: function (e) { return e.stopPropagation(); }, children: [_jsx("button", { className: "absolute top-7 right-5 text-gray-500 hover:text-gray-800", onClick: onClose, children: "\u2715" }), children] }) }));
};
var ModalHeader = function (_a) {
    var title = _a.title;
    return (_jsx("div", { className: "border-gray-200 px-6 py-4", children: _jsx("h2", { className: "text-heading-4 font-semibold", children: title }) }));
};
var ModalBody = function (_a) {
    var children = _a.children;
    return (_jsx("div", { className: "custom-scroll h-[calc(100vh-150px)] overflow-auto p-4 text-sm", children: children }));
};
var ModalFooter = function (_a) {
    var closeBtnText = _a.closeBtnText, submitProps = _a.submitProps, onSubmit = _a.onSubmit, onClose = _a.onClose;
    var _b = submitProps || {}, text = _b.text, disabled = _b.disabled;
    return (_jsxs("div", { className: "flex items-center justify-between border-t border-gray-200 px-4 py-2", children: [_jsx("div", {}), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Button, { onClick: function () { return onClose === null || onClose === void 0 ? void 0 : onClose(false); }, content: closeBtnText || "Close", size: "Small" }), _jsx(Button, { onClick: onSubmit, content: text || "Submit", action: "submit", size: "Small", disabled: disabled })] })] }));
};
export { Modal, ModalHeader, ModalBody, ModalFooter };
