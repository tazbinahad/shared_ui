import React, { ReactNode, useEffect } from "react";
import { Button } from "../Button";
import classNames from "classnames";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  variant?: "regular" | "left" | "right";
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  variant = "regular",
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 flex w-full items-center justify-center"
      onClick={onClose}
    >
      <div
        className={classNames(
          "dark:bg-card relative bg-white shadow-lg transition-transform duration-300",
          {
            // Regular Modal (Centered)
            "w-1/3 rounded-lg": variant === "regular",

            // Side Modals (Left or Right)
            "fixed top-0 h-full w-96": variant !== "regular",

            // Left Modal
            "ml-auto": variant === "right",
            // Right Modal
          },
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-7 right-5 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
};

interface ModalHeaderProps {
  title: string;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ title }) => {
  return (
    <div className="border-gray-200 px-6 py-4">
      <h2 className="text-heading-4 font-semibold">{title}</h2>
    </div>
  );
};

interface ModalBodyProps {
  children: ReactNode;
}

const ModalBody: React.FC<ModalBodyProps> = ({ children }) => {
  return (
    <div className="custom-scroll h-[calc(100vh-150px)] overflow-auto p-4 text-sm">
      {children}
    </div>
  );
};
type TSubmitButtonProps = {
  text?: string;
  disabled?: boolean;
};
interface ModalFooterProps {
  onClose?: (open: boolean) => void;
  onSubmit?: () => void;
  closeBtnText?: string;
  submitProps?: TSubmitButtonProps;
}

const ModalFooter: React.FC<ModalFooterProps> = ({
  closeBtnText,
  submitProps,
  onSubmit,
  onClose,
}) => {
  const { text, disabled } = submitProps || {};

  return (
    <div className="flex items-center justify-between border-t border-gray-200 px-4 py-2">
      <div></div>
      <div className="flex items-center gap-2">
        <Button
          onClick={() => onClose?.(false)}
          content={closeBtnText || "Close"}
          size="Small"
        />
        <Button
          onClick={onSubmit}
          content={text || "Submit"}
          action="submit"
          size="Small"
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export { Modal, ModalHeader, ModalBody, ModalFooter };
