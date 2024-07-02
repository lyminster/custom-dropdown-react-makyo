// src/CustomDropdown.tsx
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

interface Option {
  value: string;
  label: string;
}

export interface CustomDropdownProps {
  options: Option[];
  isMulti?: boolean;
  isSearchable?: boolean;
  usePortal?: boolean;
  zIndex?: number;
  placeholder?: string;
  customOptionRenderer?: (option: Option) => JSX.Element;
  onOptionChange?: (selected: Option | Option[] | null) => void;
}

/** Custom Dropdown Component
 * @param {Option} options for all list of data
 * @param {boolean} isMulti for select multiple option, default false
 * @param {boolean} isSearchable for search option, default true
 * @param {boolean} usePortal for portal, default false
 * @param {boolean} zIndex for zindex, default 1001
 * @param {string} placeholder for placeholder, default Select...
 * @param {JSX.Element} customOptionRenderer for element of the option
 * @param onOptionChange for handling emit changes
 * @returns {JSX.Element} Element of Dropdown
 */
const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  isMulti = false,
  isSearchable = true,
  usePortal = false,
  zIndex = 1001,
  placeholder = "Select...",
  customOptionRenderer,
  onOptionChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: Option) => {
    if (isMulti) {
      setSelectedOptions((prev) => {
        const newSelectedOptions = prev.includes(option)
          ? prev.filter((o) => o.value !== option.value)
          : [...prev, option];
        onOptionChange && onOptionChange(newSelectedOptions);
        return newSelectedOptions;
      });
    } else {
      setSelectedOptions([option]);
      onOptionChange && onOptionChange(option);
      setIsOpen(false);
    }
  };

  const handleRemoveOption = (optionToRemove: Option) => {
    setSelectedOptions((prev) => {
      const newSelectedOptions = prev.filter(
        (o) => o.value !== optionToRemove.value
      );
      onOptionChange && onOptionChange(newSelectedOptions);
      return newSelectedOptions;
    });
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const shouldHighlight = (label: string) => {
    return (
      searchTerm &&
      searchTerm.toLowerCase().includes("1") &&
      label.toLowerCase().includes("1")
    );
  };

  const renderHighlightedLabel = (label: string) => {
    if (shouldHighlight(label)) {
      return <span style={{ color: "yellow" }}>{label}</span>;
    }
    return label;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderDropdownMenu = () => (
    <div
      className="absolute z-10 mt-2 w-full rounded-md shadow-lg bg-white"
      ref={menuRef}
      style={{ zIndex }}
    >
      {isSearchable && (
        <div className="p-2">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
      )}
      <ul className="max-h-60 overflow-auto">
        {filteredOptions.map((option) => (
          <li
            key={option.value}
            className="p-2 hover:bg-gray-200 cursor-pointer"
            onClick={() => handleOptionClick(option)}
          >
            {customOptionRenderer
              ? customOptionRenderer(option)
              : renderHighlightedLabel(option.label)}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="relative inline-block w-full" ref={dropdownRef}>
      <div
        className="border border-gray-300 rounded p-2 cursor-pointer bg-white flex justify-between items-center"
        onClick={toggleDropdown}
      >
        <div className="flex items-center flex-wrap gap-1">
          {selectedOptions.length > 0 ? (
            selectedOptions.map((option) => (
              <span
                key={option.value}
                className="bg-gray-200 text-gray-800 rounded-full px-2 py-1 mr-2 flex items-center"
              >
                {option.label}
                <button
                  className="ml-2 text-gray-500 hover:text-gray-700"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveOption(option);
                  }}
                >
                  ✕
                </button>
              </span>
            ))
          ) : (
            <span className="text-gray-400">{placeholder}</span>
          )}
        </div>
        <div>
          <svg
            className={`w-5 h-5 text-gray-500 transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
      {isOpen &&
        (usePortal
          ? ReactDOM.createPortal(renderDropdownMenu(), document.body)
          : renderDropdownMenu())}
    </div>
  );
};

export default CustomDropdown;
