import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";

interface Option {
  label: string;
  value: string | number;
}

interface SelectProps {
  options: Option[];
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  className?: string;
  isSearch?: boolean;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className,
  isSearch = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const selectRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredOptions = isSearch
    ? options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : options;

  const toggleDropdown = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option: Option) => {
    onChange(option.value);
    setIsOpen(false);
    setSearchTerm(option.label);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && dropdownRef.current && selectRef.current) {
      const selectRect = selectRef.current.getBoundingClientRect();
      const dropdownHeight = dropdownRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      let top = selectRect.bottom + window.scrollY;
      let positionClass = "";

      // Check if there's enough space below, otherwise position it above
      if (top + dropdownHeight > viewportHeight) {
        top = selectRect.top + window.scrollY - dropdownHeight;
        positionClass = "top-full";
      } else {
        positionClass = "bottom-full";
      }

      dropdownRef.current.style.position = "absolute";
      dropdownRef.current.style.top = `${top}px`;
      dropdownRef.current.style.left = `${selectRect.left + window.scrollX}px`;
      dropdownRef.current.style.width = `${selectRect.width}px`;
      dropdownRef.current.className = classNames(
        "absolute z-50 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg",
        positionClass,
      );
    }
  }, [isOpen]);

  const dropdown = (
    <div
      ref={dropdownRef}
      className="absolute z-50 rounded-md border border-gray-300 bg-white shadow-lg dark:border-gray-600 dark:bg-gray-800"
    >
      {filteredOptions.map((option) => (
        <div
          key={option.value}
          className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          onClick={() => handleOptionClick(option)}
        >
          {option.label}
        </div>
      ))}
      {filteredOptions.length === 0 && (
        <div className="px-4 py-2 text-gray-500 dark:text-gray-400">
          No options found
        </div>
      )}
    </div>
  );

  return (
    <div className={classNames("relative", className)} ref={selectRef}>
      <input
        type="text"
        placeholder={placeholder}
        value={
          isSearch
            ? searchTerm
            : options.find((option) => option.value === value)?.label || ""
        }
        onClick={toggleDropdown}
        onChange={(e) => isSearch && setSearchTerm(e.target.value)}
        className="cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
      />
      {isOpen && createPortal(dropdown, document.body)}
    </div>
  );
};

export default Select;
