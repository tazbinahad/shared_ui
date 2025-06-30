var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { create } from "zustand";
// Zustand store
export var useToastStore = create(function (set) { return ({
    toasts: [],
    addToast: function (toast) { return set(function (state) { return ({ toasts: __spreadArray(__spreadArray([], state.toasts, true), [toast], false) }); }); },
    removeToast: function (id) {
        return set(function (state) { return ({ toasts: state.toasts.filter(function (t) { return t.id !== id; }) }); });
    },
}); });
// Helper to generate a unique ID
var generateId = function () { return Date.now().toString(); };
// Toast methods
export var toast = {
    success: function (message, config) {
        var id = generateId();
        var duration = (config === null || config === void 0 ? void 0 : config.duration) || 3000;
        useToastStore
            .getState()
            .addToast({ id: id, message: message, type: "success", duration: duration });
        setTimeout(function () { return useToastStore.getState().removeToast(id); }, duration);
    },
    error: function (message, config) {
        var id = generateId();
        var duration = (config === null || config === void 0 ? void 0 : config.duration) || 3000;
        useToastStore.getState().addToast({ id: id, message: message, type: "error", duration: duration });
        setTimeout(function () { return useToastStore.getState().removeToast(id); }, duration);
    },
    warn: function (message, config) {
        var id = generateId();
        var duration = (config === null || config === void 0 ? void 0 : config.duration) || 3000;
        useToastStore.getState().addToast({ id: id, message: message, type: "warn", duration: duration });
        setTimeout(function () { return useToastStore.getState().removeToast(id); }, duration);
    },
    info: function (message, config) {
        var id = generateId();
        var duration = (config === null || config === void 0 ? void 0 : config.duration) || 3000;
        useToastStore.getState().addToast({ id: id, message: message, type: "info", duration: duration });
        setTimeout(function () { return useToastStore.getState().removeToast(id); }, duration);
    },
};
