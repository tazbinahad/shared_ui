import { ReactNode } from "react";
interface Toast {
    id: string;
    message: ReactNode;
    type: "success" | "error" | "warn" | "info";
    duration: number;
}
interface ToastStore {
    toasts: Toast[];
    addToast: (toast: Toast) => void;
    removeToast: (id: string) => void;
}
export declare const useToastStore: import("zustand").UseBoundStore<import("zustand").StoreApi<ToastStore>>;
export declare const toast: {
    success: (message: ReactNode, config?: {
        duration?: number;
    }) => void;
    error: (message: ReactNode, config?: {
        duration?: number;
    }) => void;
    warn: (message: ReactNode, config?: {
        duration?: number;
    }) => void;
    info: (message: ReactNode, config?: {
        duration?: number;
    }) => void;
};
export {};
