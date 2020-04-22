import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import RoomHeader from '../RoomHeader'
import VuTile from '../VuTile'

const RoomE204=()=> {

  const [state, setState] = useState({ 
      
      roomId: "E204",
      roomName: "WSL6",
      roomStatus: "In Process",
      batchNumber: 2000,
      path: "/RoomDetails"
})    

        
        return (
          <div className="container min-vh-100">
            <div className= "row text-white" style={{ backgroundColor: 'rgb(0,99,117)' }}>
              <RoomHeader roomId={state.roomId}></RoomHeader>
            </div>
            <div className="row justify-content-center">
              <div className="col-6  VerticalCentering" >
                <Link  style={{ textDecoration: 'none', minHeight:'150px'}} >
                  <VuTile className ="row" 
                            roomId= {state.roomId}
                            roomName= {state.roomName} 
                            roomStatus={state.roomStatus} 
                            path = {state.path}
                  ></VuTile>
                </Link>
              </div>
             
            </div>
            
          </div>
        );
    }


export default RoomE204;