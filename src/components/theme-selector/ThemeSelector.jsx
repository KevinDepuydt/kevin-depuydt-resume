import React, { useState } from 'react';
import { axiomeTheme, defaultTheme } from '../../styling/theme';

export default function ThemeSelector({ onChange }) {
  const [themeId, setThemeId] = useState("default");

  const handleChange = async (e) => {
    const { value: selectedThemeId } = e.target;
    setThemeId(selectedThemeId);
    switch (selectedThemeId) {
      case "axiome":
        onChange(axiomeTheme);
        break;
      case "default":
      default:
        onChange(defaultTheme);
        break;
    }
  };

  return (
    <select id="theme-selector" onChange={handleChange} value={themeId}>
      <option value="default">Default</option>
      <option value="axiome">Axiome</option>
    </select>
  );
}
