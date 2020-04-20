import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import RoomHeader from './RoomHeader'
import RoomBody from './RoomBody'

const RoomE204=()=> {

  const [state, setState] = useState({ 
      roomId: "E204",
      roomName: "WSL6",
      roomStatus: "In Production",
      roomTemp: 20,
      roomHum: 60,
      roomPres:53,
      roomOccupation: 4,
      batchNumber: 2000,
})     

function startCounting(){
      setState({
        ...state, roomTemp :state.roomTemp+1,
      })
}






        
        return (
          <div className="container min-vh-100">
            <div className= "row text-white" style={{ backgroundColor: 'rgb(0,99,117)' }}>
              <RoomHeader roomId={state.roomId}></RoomHeader>
            </div>
            <div className="row justify-content-center ">
              <div className="col-12">
                <Link to="/RoomDetails" style={{ textDecoration: 'none' }}>
                  <RoomBody className ="row " 
                            roomId= {state.roomId}
                            roomName= {state.roomName} 
                            roomStatus={state.roomStatus} 
                            roomTemp= {state.roomTemp}
                            roomHum = {state.roomHum}
                            roomPres ={state.roomPres}
                  ></RoomBody>
                </Link>
              </div>

              <button onClick={startCounting}></button>
             
            </div>
            
          </div>
        );
    }


export default RoomE204;