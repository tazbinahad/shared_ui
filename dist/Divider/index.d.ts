import React from "react";
interface IDivider {
    text?: string;
    orientation?: "left" | "right" | "center";
    orientationMargin?: number;
    dashed?: boolean;
    className?: string;
}
export declare const Divider: React.FC<IDivider>;
export {};
