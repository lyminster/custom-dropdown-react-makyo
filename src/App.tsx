import React from "react";
import CustomDropdown from "./CustomDropdown";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
  { value: "option5", label: "Option 5" },
  { value: "option6", label: "Option 6" },
  { value: "option7", label: "Option 7" },
  { value: "option8", label: "Option 8" },
];

const App: React.FC = () => {
  const handleOptionChange = (selected: any) => {
    console.log("Selected options:", selected);
  };

  const customOptionRenderer = (option: any) => (
    <div style={{ color: "blue" }}>{option.label}</div>
  );

  return (
    <>
      <CustomDropdown
        options={options}
        isMulti={true}
        isSearchable={true}
        usePortal={true}
        zIndex={1001}
        placeholder="Select an option"
        customOptionRenderer={customOptionRenderer}
        onOptionChange={handleOptionChange}
      />
    </>
  );
};

export default App;
