import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';


export default function LanguageSelector({ onChange }) {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.resolvedLanguage);

  const handleChange = async (e) => {
    const { value: selectedLanguage } = e.target;
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
    onChange(selectedLanguage);
  };

  return (
    <select id="language-selector" onChange={handleChange} value={language}>
      <option value="en">EN</option>
      <option value="fr">FR</option>
    </select>
  );
}
