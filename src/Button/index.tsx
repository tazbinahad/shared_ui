import classNames from "classnames";
import { FC } from "react";
import { IButton } from "./interface";
import { useButtonStyle } from "./useButtonStyle";

export const Button: FC<IButton> = (props) => {
  const { content, onClick, action = "button", prifix, disabled } = props;

  const { baseStyle, buttonLayout, buttonSize } = useButtonStyle(props);

  return (
    <button
      className={classNames(baseStyle, buttonLayout, buttonSize)}
      onClick={(event) => {
        onClick?.(event);
      }}
      type={action}
      disabled={disabled}
    >
      {prifix}
      {content}
    </button>
  );
};
