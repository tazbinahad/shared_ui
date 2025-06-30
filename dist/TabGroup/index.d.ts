import React from "react";
export interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
}
interface TabGroupProps {
    tabs: Tab[];
    activeTab: string;
    onTabChange: (tabId: string) => void;
}
export declare const TabGroup: React.FC<TabGroupProps>;
export default TabGroup;
