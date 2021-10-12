import React from "react"
import {Routes} from "./components/Navbar/Routes"
import { Welcome } from "./components/WelcomePage/Welcome"


function App() {

  const [shift, setShift] = React.useState(false)
  
  return (

    <>
    {/* {
      !shift ?  <Welcome setShift={setShift}/> : <Routes/>
    } */}

    <Routes/>
   

    </>
  );
}

export default App;
