import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/HeaderComponent";
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import ChooseAppComponent from "./components/ChooseAppComponent"
import RoomE204 from "./components/RoomE204"
import QrScanner from './components/QRscanner'
import RoomDetails from './components/RoomDetails'

const App = () => {


/*   componentDidMount(){
    
    var globalRoot = document.getElementById("root"); 
      globalRoot.addEventListener("click", function() {
        // document.body.requestFullscreen(); // to go to full screen
      });
   
      //for disabeling longpress or right click effects
       document.oncontextmenu = function() {
        //return false; 
      }  
    }   */


  return (


  <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/ChooseApp" component ={ChooseAppComponent}></Route>
          <Route path ='/QrScanner' component = {()=><QrScanner></QrScanner>}></Route>
          <Route path ='/RoomE204' component = {()=><RoomE204></RoomE204>}></Route>
          <Route path ='/RoomDetails' component = {()=><RoomDetails></RoomDetails>}></Route>
          <Redirect to = '/ChooseApp'></Redirect>
        </Switch>
      </div>
    </BrowserRouter> 
    
  );

  
}

export default App;
