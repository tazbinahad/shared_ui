import classNames from "classnames";
import React from "react";

interface IDivider {
  text?: string;
  orientation?: "left" | "right" | "center";
  orientationMargin?: number;
  dashed?: boolean;
  className?: string;
}

export const Divider: React.FC<IDivider> = ({
  text,
  orientation = "center",
  orientationMargin = 0.5,
  dashed = false,
  className,
}) => {
  // Determine the class for line style: solid or dashed
  const lineStyle = dashed ? "border-t border-dashed" : "border-t";

  // Alignment classes for text based on orientation
  const textPositionClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  return (
    <div
      className={classNames(
        `relative flex items-center ${textPositionClasses[orientation]} my-4 text-lg font-medium text-gray-500`,
        className,
      )}
    >
      {/* Left line */}
      <span
        className={classNames(`${lineStyle} border-gray-300`, {
          "flex-grow": orientation !== "left",
        })}
        style={{
          width: orientation === "left" ? orientationMargin + "px" : undefined,
        }}
      ></span>

      {/* Text */}
      {text && (
        <span className={classNames("whitespace-nowrap px-4")}>{text}</span>
      )}

      {/* Right line */}
      <span
        className={classNames(`${lineStyle} border-gray-300`, {
          "flex-grow": orientation !== "right",
        })}
        style={{
          width: orientation === "right" ? orientationMargin + "px" : undefined,
        }}
      ></span>
    </div>
  );
};
