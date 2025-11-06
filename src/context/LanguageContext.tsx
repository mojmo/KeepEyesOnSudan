import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { supportedLanguages } from '@i18n/index';

interface LanguageContextType {
    currentLanguage: string;
    changeLanguage: (language: string) => void;
    isRTL: boolean;
    supportedLanguages: string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const isRTL = currentLanguage === 'ar';

    const changeLanguage = (language: string) => {
        if (supportedLanguages.includes(language)) {
            i18n.changeLanguage(language);
        }
    };

    useEffect(() => {
        // set document direction and lang attribute
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLanguage;

        // add RTL class to body for css styling
        if (isRTL) {
            document.body.classList.add('rtl');
        } else {
            document.body.classList.remove('rtl');
        }

        // update HTML meta tags
        const htmlElement = document.querySelector('html');
        if (htmlElement) {
            htmlElement.setAttribute('lang', currentLanguage);
        }
    }, [currentLanguage, isRTL]);

    return (
        <LanguageContext.Provider
            value={{ currentLanguage, changeLanguage, isRTL, supportedLanguages }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
