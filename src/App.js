import About from "./components/About";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import React, { useState } from 'react'
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App(){

    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type)=>{
        setAlert({
            msg: message,
            type: type
        })

        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }

    const onToggle = ()=>{
        if(mode === 'light'){
            setMode("dark");
            document.body.style.backgroundColor = '#090946';
            showAlert("Dark Mode has been enabled", 'success');
            document.title = "Text Utils- Dark Mode";
        }

        else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light Mode has been enabled", 'success');
            document.title = "Text Utils- Light Mode";
        }
    };


    return(     
        <>
        {/* <Router> */}
     <Navbar title ="TextUtils" abouti="About" mode = {mode} ontoggle = {onToggle} />
     <Alert alert = {alert}/>
     <div className="container">
     {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
          <TextArea showAlert = {showAlert} heading = "Enter the text to analyze below" mode = {mode} />
          {/* </Route> */}
        {/* </Switch> */}
     </div>
     {/* </Router> */}
     </>
    );
}

export default App;
