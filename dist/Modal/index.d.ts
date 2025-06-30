import React, { ReactNode } from "react";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    variant?: "regular" | "left" | "right";
}
declare const Modal: React.FC<ModalProps>;
interface ModalHeaderProps {
    title: string;
}
declare const ModalHeader: React.FC<ModalHeaderProps>;
interface ModalBodyProps {
    children: ReactNode;
}
declare const ModalBody: React.FC<ModalBodyProps>;
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
declare const ModalFooter: React.FC<ModalFooterProps>;
export { Modal, ModalHeader, ModalBody, ModalFooter };
