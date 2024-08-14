import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from './components/header.js';
import Footer from "./components/footer.js";
import Body from "./components/content.js";
function Mydemo(){
  return(
    <div>
      <Header/>
      <Footer/>
      <Body/>
    </div>
  )
}
ReactDOM.render(<Mydemo/>,document.getElementById('root'));