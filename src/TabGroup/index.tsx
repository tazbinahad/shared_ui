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

export const TabGroup: React.FC<TabGroupProps> = ({
  tabs,
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="pt-4">
      {/* Tab Headers */}
      <div className="flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`p-3 text-sm font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? "border-b-2 border-primary text-primary"
                : "border-b-2 border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && <div key={tab.id}>{tab.content}</div>,
        )}
      </div>
    </div>
  );
};

export default TabGroup;
