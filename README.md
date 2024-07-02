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

import React, { useState } from 'react';
import CustomDropdown from '@your-package/custom-dropdown';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  // Add more options as needed
];

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    // Handle option change logic here
  };

  return (
    <div>
      <h1>CustomDropdown Example</h1>
      <CustomDropdown
        options={options}
        onOptionChange={handleOptionChange}
        placeholder="Select an option..."
      />
      <p>Selected option: {selectedOption ? selectedOption.label : 'None'}</p>
    </div>
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
