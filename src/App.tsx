import Router from './Router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { LanguageProvider } from '@context/LanguageContext';
import './i18n';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <LanguageProvider>
      <Router />
    </LanguageProvider>
  );
}

export default App;
