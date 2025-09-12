import React from "react";;
import Header from "./Components/Header";
import TopBar from "./Components/TopBar";
import Navbar from "./Components/Navbar/Navbar"
import Category from "./Components/Category";
function  App () {
  return(
    <div>
     <TopBar/>
     <Header/>
     <Navbar/>
     <Category/>
    </div>
  )
};
export default App;

