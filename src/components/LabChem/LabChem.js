import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import RoomHeader from '../RoomHeader'
import ToShowVu from './ShownVu'
import VuTile from '../VuTile'

const LaboChemie=()=> {

    const [toShowVu, setToShowVu] = useState(ToShowVu)   

    console.log(toShowVu)

    const view = toShowVu.map(vu =>{
        return(
            <div className="col-3">
            <Link  style={{ textDecoration: 'none' }}>
            <VuTile className ="row " 
                          roomId= {vu.roomId}
                          roomName= {vu.roomName} 
                          roomStatus={vu.roomStatus}
                          path = {vu.path}
                ></VuTile>
            </Link>
                
            </div>
        )
      })
        
        return (
          <div className="container min-vh-100">
            <div className= "row text-white" style={{ backgroundColor: 'rgb(0,99,117)' }}>
              <RoomHeader roomId="BLOCK 7 - Labo Chemie"></RoomHeader>
            </div>
            <div className="row justify-content-center VerticalCentering">
                {view}
            </div>
            
          </div>
        );
    }


export default LaboChemie;