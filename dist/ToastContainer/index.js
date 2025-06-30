import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createPortal } from "react-dom";
import { useToastStore } from "./../Packages/Hooks/useToast";
import { XMarkIcon, InformationCircleIcon, CheckCircleIcon, ExclamationCircleIcon, } from "@heroicons/react/24/solid";
// Icon mapping for each toast type
var toastIcons = {
    info: _jsx(InformationCircleIcon, { className: "h-6 w-6 text-blue-500" }),
    success: _jsx(CheckCircleIcon, { className: "h-6 w-6 text-green-500" }),
    warn: _jsx(ExclamationCircleIcon, { className: "h-6 w-6 text-yellow-500" }),
    error: _jsx(ExclamationCircleIcon, { className: "h-6 w-6 text-red-500" }),
};
// ToastContainer component
export var ToastContainer = function () {
    var _a = useToastStore(), toasts = _a.toasts, removeToast = _a.removeToast;
    if (toasts.length === 0)
        return null;
    return createPortal(_jsx("div", { className: "fixed right-4 top-4 z-50 space-y-4", children: toasts.map(function (toast) { return (_jsxs("div", { className: "flex items-start space-x-4 rounded-lg border bg-white p-4 shadow-lg", children: [_jsx("div", { children: toastIcons[toast.type] }), _jsxs("div", { className: "flex-1", children: [_jsx("p", { className: "font-semibold text-gray-800", children: "Toast title" }), _jsx("p", { className: "text-sm text-gray-600", children: toast.message })] }), _jsx("button", { className: "text-gray-400 hover:text-gray-600", onClick: function () { return removeToast(toast.id); }, children: _jsx(XMarkIcon, { className: "h-5 w-5" }) })] }, toast.id)); }) }), document.body);
};
