# CustomDropdown Component

CustomDropdown is a customizable dropdown component for React applications. It supports single and multi-selection modes, customizable option rendering, search functionality, and portal support.

## Installation

You can install the component via npm or yarn:

```console
npm install @your-package/custom-dropdown
```

```ts
// Usage
// Import CustomDropdown in your React component and use it with various configuration options:
// src/App.tsx
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

```

## Props

CustomDropdown Component Props

- options: Array of objects containing value and label properties for dropdown options.
- isMulti (optional): Boolean to enable multiple selection mode.
- isSearchable (optional): Boolean to enable search functionality within the dropdown.
- usePortal (optional): Boolean to render dropdown options in a portal (default: false).
- zIndex (optional): Number representing the z-index of the dropdown menu.
- placeholder (optional): Placeholder text for the dropdown when no option is selected.
- customOptionRenderer (optional): Function to customize the rendering of each option.
- onOptionChange (optional): Function triggered when an option is selected or deselected.

## Examples

Check out the Storybook examples for different configurations and usage scenarios of the CustomDropdown component.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
