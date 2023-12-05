
import './styles/index.css';
import './styles/features.css';
import { NavBar } from './components/navigations/NavBar';
import { Banner } from './components/banners/Banner';

import { Footer } from './components/navigations/Footer';
import { menuData } from './data/Menu';
import { Content } from './components/sections/Content';
import { useState } from 'react';

const App = () => {

  const [isLogged, setIsLogged] = useState(false);
  console.log(isLogged);

  return (
    <>
    <NavBar items={menuData} isLogged={isLogged} setIsLogged={setIsLogged}/>
    <Banner/>
    <Content isLogged={isLogged}/>
    <Footer/>

    </>
  );
}

export default App
