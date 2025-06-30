import { create } from "zustand";
import { ReactNode } from "react";

// Toast interface
interface Toast {
  id: string;
  message: ReactNode; // Allows string or JSX
  type: "success" | "error" | "warn" | "info";
  duration: number;
}

interface ToastStore {
  toasts: Toast[];
  addToast: (toast: Toast) => void;
  removeToast: (id: string) => void;
}

// Zustand store
export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  addToast: (toast) => set((state) => ({ toasts: [...state.toasts, toast] })),
  removeToast: (id) =>
    set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) })),
}));

// Helper to generate a unique ID
const generateId = () => Date.now().toString();

// Toast methods
export const toast = {
  success: (message: ReactNode, config?: { duration?: number }) => {
    const id = generateId();
    const duration = config?.duration || 3000;
    useToastStore
      .getState()
      .addToast({ id, message, type: "success", duration });
    setTimeout(() => useToastStore.getState().removeToast(id), duration);
  },
  error: (message: ReactNode, config?: { duration?: number }) => {
    const id = generateId();
    const duration = config?.duration || 3000;
    useToastStore.getState().addToast({ id, message, type: "error", duration });
    setTimeout(() => useToastStore.getState().removeToast(id), duration);
  },
  warn: (message: ReactNode, config?: { duration?: number }) => {
    const id = generateId();
    const duration = config?.duration || 3000;
    useToastStore.getState().addToast({ id, message, type: "warn", duration });
    setTimeout(() => useToastStore.getState().removeToast(id), duration);
  },
  info: (message: ReactNode, config?: { duration?: number }) => {
    const id = generateId();
    const duration = config?.duration || 3000;
    useToastStore.getState().addToast({ id, message, type: "info", duration });
    setTimeout(() => useToastStore.getState().removeToast(id), duration);
  },
};
