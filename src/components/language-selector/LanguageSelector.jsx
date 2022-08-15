import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';


export default function LanguageSelector({ onChange }) {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.resolvedLanguage);

  const handleChange = async (e) => {
    const { value } = e.target;
    setLanguage(value);
    i18n.changeLanguage(value);
    onChange();
  };

  return (
    <select id="language-selector" onChange={handleChange} value={language}>
      <option value="en">EN</option>
      <option value="fr">FR</option>
    </select>
  );
}
