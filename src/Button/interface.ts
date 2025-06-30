import { MouseEvent } from "react";

export type TButtonType = "light" | "dark";
export type TButtonSize = "Large" | "Medium" | "Small";
export interface IButton {
  type?: TButtonType;
  content: string | React.ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  size?: TButtonSize;
  action?: "button" | "submit";
  className?: string;
  borderLess?: boolean;
  prifix?: React.ReactNode;
  disabled?: boolean;
}
