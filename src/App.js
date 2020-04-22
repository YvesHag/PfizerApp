import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/HeaderComponent";
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import ChooseAppComponent from "./components/ChooseAppComponent"
import RoomE204 from "./components/Room204/RoomE204"
import QrScanner from './components/QRscanner'
import RoomDetails from './components/Room204/RoomE204Details'
import LaboChemie from "./components/LabChem/LabChem"
import G039Details from './components/LabChem/G039/G039Details'

const App = () => {

  useEffect(() => { //the same like component did mount
    var globalRoot = document.getElementById("root"); 
      globalRoot.addEventListener("click", function() {
         document.body.requestFullscreen(); // to go to full screen
      });
   
      //for disabeling longpress or right click effects
       document.oncontextmenu = function() {
        return false; 
      }  
  })

//ik der je

  return (


  <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/ChooseApp" component ={ChooseAppComponent}></Route>
          <Route path ='/QrScanner' component = {()=><QrScanner></QrScanner>}></Route>
          <Route path ='/RoomE204' component = {()=><RoomE204></RoomE204>}></Route>
          <Route path ='/RoomDetails' component = {()=><RoomDetails></RoomDetails>}></Route>
          <Route path ='/LaboChemie' component = {()=><LaboChemie></LaboChemie>}></Route>
          <Route path ='/G039Details' component = {()=><G039Details></G039Details>}></Route>
          <Redirect to = '/ChooseApp'></Redirect>
        </Switch>
      </div>
    </BrowserRouter> 
    
  );

  
}

export default App;
