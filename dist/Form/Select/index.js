import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
var Select = function (_a) {
    var _b;
    var options = _a.options, value = _a.value, onChange = _a.onChange, _c = _a.placeholder, placeholder = _c === void 0 ? "Select an option" : _c, className = _a.className, _d = _a.isSearch, isSearch = _d === void 0 ? false : _d;
    var _e = useState(false), isOpen = _e[0], setIsOpen = _e[1];
    var _f = useState(""), searchTerm = _f[0], setSearchTerm = _f[1];
    var selectRef = useRef(null);
    var dropdownRef = useRef(null);
    var filteredOptions = isSearch
        ? options.filter(function (option) {
            return option.label.toLowerCase().includes(searchTerm.toLowerCase());
        })
        : options;
    var toggleDropdown = function (event) {
        event.stopPropagation();
        setIsOpen(function (prev) { return !prev; });
    };
    var handleOptionClick = function (option) {
        onChange(option.value);
        setIsOpen(false);
        setSearchTerm(option.label);
    };
    var handleClickOutside = function (event) {
        if (selectRef.current &&
            !selectRef.current.contains(event.target) &&
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    useEffect(function () {
        document.addEventListener("mousedown", handleClickOutside);
        return function () { return document.removeEventListener("mousedown", handleClickOutside); };
    }, []);
    useEffect(function () {
        if (isOpen && dropdownRef.current && selectRef.current) {
            var selectRect = selectRef.current.getBoundingClientRect();
            var dropdownHeight = dropdownRef.current.offsetHeight;
            var viewportHeight = window.innerHeight;
            var top_1 = selectRect.bottom + window.scrollY;
            var positionClass = "";
            // Check if there's enough space below, otherwise position it above
            if (top_1 + dropdownHeight > viewportHeight) {
                top_1 = selectRect.top + window.scrollY - dropdownHeight;
                positionClass = "top-full";
            }
            else {
                positionClass = "bottom-full";
            }
            dropdownRef.current.style.position = "absolute";
            dropdownRef.current.style.top = "".concat(top_1, "px");
            dropdownRef.current.style.left = "".concat(selectRect.left + window.scrollX, "px");
            dropdownRef.current.style.width = "".concat(selectRect.width, "px");
            dropdownRef.current.className = classNames("absolute z-50 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg", positionClass);
        }
    }, [isOpen]);
    var dropdown = (_jsxs("div", { ref: dropdownRef, className: "absolute z-50 rounded-md border border-gray-300 bg-white shadow-lg dark:border-gray-600 dark:bg-gray-800", children: [filteredOptions.map(function (option) { return (_jsx("div", { className: "cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700", onClick: function () { return handleOptionClick(option); }, children: option.label }, option.value)); }), filteredOptions.length === 0 && (_jsx("div", { className: "px-4 py-2 text-gray-500 dark:text-gray-400", children: "No options found" }))] }));
    return (_jsxs("div", { className: classNames("relative", className), ref: selectRef, children: [_jsx("input", { type: "text", placeholder: placeholder, value: isSearch
                    ? searchTerm
                    : ((_b = options.find(function (option) { return option.value === value; })) === null || _b === void 0 ? void 0 : _b.label) || "", onClick: toggleDropdown, onChange: function (e) { return isSearch && setSearchTerm(e.target.value); }, className: "cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100" }), isOpen && createPortal(dropdown, document.body)] }));
};
export default Select;
