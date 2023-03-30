
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';




function App() {
  let [mode , setmode] = useState('Light Mode')
  const [darkMode, setDarkMode] = useState(true);
  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
    if(mode == 'Dark Mode')setmode('Light Mode')
    else setmode('Dark Mode')
}
  return (
   
      <div className={`${darkMode ? "dark" : "light"}`}>
      <NavBar  darkMode={darkMode} 
    toggleDarkMode={toggleDarkMode} mode = {mode} />
      <div className=" heading m-10 text-center text-3xl  text-purple-500 font-Alkatra">TO ANALYZE THE TEXT PLEASE ENTER THE TEXT BELOW</div>
      <TextForm/>
      
      </div>
   

  );
}

export default App;
