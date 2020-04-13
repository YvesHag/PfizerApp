import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from "./components/HeaderComponent";
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import ChooseAppComponent from "./components/ChooseAppComponent"
import RoomE204 from "./components/RoomE204"
import QrScanner from './components/QRscanner'
import RoomDetails from './components/RoomDetails'

function App() {
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
