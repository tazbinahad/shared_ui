import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Table = function (_a) {
    var columns = _a.columns, data = _a.data;
    return (_jsx("div", { className: "flex flex-col", children: _jsx("div", { className: "-m-1.5 overflow-x-auto", children: _jsx("div", { className: "inline-block min-w-full p-1.5 align-middle", children: _jsx("div", { className: "overflow-hidden", children: _jsxs("table", { className: "min-w-full divide-y divide-gray-200 dark:divide-neutral-700", children: [_jsx("thead", { children: _jsx("tr", { children: columns.map(function (column) { return (_jsx("th", { scope: "col", className: "px-6 py-3 text-start text-xs font-medium uppercase text-gray-500 dark:text-neutral-500", children: column.title }, column.key)); }) }) }), _jsx("tbody", { className: "divide-y divide-gray-200 dark:divide-neutral-700", children: data.map(function (record, rowIndex) { return (_jsx("tr", { children: columns.map(function (column) { return (_jsx("td", { className: "whitespace-nowrap px-6 py-4 text-sm text-gray-800 dark:text-neutral-200", children: column.render
                                            ? column.render(record[column.dataIndex], record)
                                            : record[column.dataIndex] }, column.key)); }) }, rowIndex)); }) })] }) }) }) }) }));
};
export default Table;
