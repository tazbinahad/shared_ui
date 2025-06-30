import { createPortal } from "react-dom";
import { useToastStore } from "~/Packages/Hooks/useToast";
import {
  XMarkIcon,
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";

// Icon mapping for each toast type
const toastIcons = {
  info: <InformationCircleIcon className="h-6 w-6 text-blue-500" />,
  success: <CheckCircleIcon className="h-6 w-6 text-green-500" />,
  warn: <ExclamationCircleIcon className="h-6 w-6 text-yellow-500" />,
  error: <ExclamationCircleIcon className="h-6 w-6 text-red-500" />,
};

// ToastContainer component
export const ToastContainer = () => {
  const { toasts, removeToast } = useToastStore();

  if (toasts.length === 0) return null;

  return createPortal(
    <div className="fixed right-4 top-4 z-50 space-y-4">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="flex items-start space-x-4 rounded-lg border bg-white p-4 shadow-lg"
        >
          {/* Icon */}
          <div>{toastIcons[toast.type]}</div>

          {/* Text content */}
          <div className="flex-1">
            <p className="font-semibold text-gray-800">Toast title</p>
            <p className="text-sm text-gray-600">{toast.message}</p>
          </div>

          {/* Close button */}
          <button
            className="text-gray-400 hover:text-gray-600"
            onClick={() => removeToast(toast.id)}
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
      ))}
    </div>,
    document.body
  );
};
