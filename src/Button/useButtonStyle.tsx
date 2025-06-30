import { className } from "~/Packages/Interface";
import { IButton, TButtonSize, TButtonType } from "./interface";
import classNames from "classnames";
import { useMemo } from "react";

export const useButtonStyle = (props: IButton) => {
  const { size = "Medium", type = "dark", borderLess } = props;

  const baseStyle = useMemo(() => {
    return classNames(
      "relative flex items-center justify-center overflow-hidden rounded  text-center font-medium outline-none transition-all duration-300 cursor-pointer border",
      "hover:border-border-color-dark hover:bg-button-background-dark hover:text-white",
      "focus-within:border-border-color-dark focus-within:shadow focus-within:shadow-amber-200 focus-within:bg-button-background-dark focus-within:rounded",
      { "border-transparent": borderLess }
    );
  }, [borderLess]);

  const buttonSize = useMemo(() => {
    const BUTTON_SIZE: Record<TButtonSize, className> = {
      Large: "px-3 py-2 text-sm",
      Medium: "px-2.5 py-2 text-sm",
      Small: "px-1.5 py-1 text-xs",
    };
    return BUTTON_SIZE[size];
  }, [size]);

  const buttonLayout = useMemo(() => {
    const BUTTON_LAYOUT: Record<TButtonType, className> = {
      dark: "bg-button-background",
      light: "",
    };
    return BUTTON_LAYOUT[type];
  }, [type]);

  return { baseStyle, buttonSize, buttonLayout };
};
