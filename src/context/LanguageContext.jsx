import React, { createContext, useState, useContext } from 'react';
import languages from '../translation/languages'; 
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('uz'); 

  const value = {
    lang,
    setLang,
    t: languages[lang] || languages['uz']
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
