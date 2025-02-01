import Router from './Router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return <Router />;
}

export default App;
