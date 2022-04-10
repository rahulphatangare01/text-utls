import logo from './logo.svg';
import './App.css';
import Navbar from './Componants/Navbar';
import TextForm from './Componants/TextForm';
import About from './Componants/About';
import { useState } from 'react';
import Alert from './Componants/Alert';

function App() {
  const[mode,setMode] = useState('light');// when sver dark mode on or not
  const[ alert,setAlert] = useState('null');
  const showAlert =(message, type) => { 
      setAlert({
        msg:message,
        type:type
      })
  }

  
  const toggleMode =() => {
       if(mode == 'light'){
       setMode('dark')
       document.body.style.backgroundColor ='#031035';
       showAlert("Dark Mode has been enabled","Success");
       }
       else {
         setMode('light');
         document.body.style.backgroundColor ='white';
         showAlert("Light mode has been enabled", "Success")
       }

     }
      

     

  return (
    <div className="App">
        <Navbar mode={mode} toggleMode={toggleMode} /> 
           <div className='container my-3' >
           <Alert alert={alert}/>
        {/* <About/> */}
      <TextForm headding=" Enter the text to analyze below" mode={mode}/>
      </div>
      
    </div>
  );
}

export default App;
