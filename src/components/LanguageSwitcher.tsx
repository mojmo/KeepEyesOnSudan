import React from 'react';
import { useLanguage } from '@context/LanguageContext';
import '@styles/languageSwitcher.css';

const LanguageSwitcher: React.FC = () => {
    const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage();

    const languageNames = {
        en: 'English',
        ar: 'العربية',
        fr: 'Français',
    };

    return (
        <div className='language-switcher'>
            <select
                value={currentLanguage}
                onChange={(e) => changeLanguage(e.target.value)}
                className='language-select'
            >
                {supportedLanguages.map((lang) => (
                    <option key={lang} value={lang}>
                        {languageNames[lang as keyof typeof languageNames]}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSwitcher;