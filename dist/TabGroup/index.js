import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export var TabGroup = function (_a) {
    var tabs = _a.tabs, activeTab = _a.activeTab, onTabChange = _a.onTabChange;
    return (_jsxs("div", { className: "pt-4", children: [_jsx("div", { className: "flex", children: tabs.map(function (tab) { return (_jsx("button", { onClick: function () { return onTabChange(tab.id); }, className: "p-3 text-sm font-medium transition-all duration-300 ".concat(activeTab === tab.id
                        ? "border-b-2 border-primary text-primary"
                        : "border-b-2 border-transparent text-gray-500 hover:text-gray-800"), children: tab.label }, tab.id)); }) }), _jsx("div", { className: "", children: tabs.map(function (tab) {
                    return activeTab === tab.id && _jsx("div", { children: tab.content }, tab.id);
                }) })] }));
};
export default TabGroup;
