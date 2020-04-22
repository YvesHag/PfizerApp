import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import RoomHeader from '../RoomHeader'
import VuTile from '../VuTile'

const LaboChemie=()=> {

  const [state, setState] = useState({ 
})    

        
        return (
          <div className="container min-vh-100">
            <div className= "row text-white" style={{ backgroundColor: 'rgb(0,99,117)' }}>
              <RoomHeader roomId="BLOCK 7 - Labo Chemie"></RoomHeader>
            </div>
            <div className="row justify-content-center VerticalCentering">

              <div className="col-3">
                <Link  to="/G039Details" style={{ textDecoration: 'none' }}>
                  <VuTile className ="row " 
                            roomId= "Lokaal G039"
                            roomName= "LQC4" 
                            roomStatus="In Process"
                  ></VuTile>
                </Link>
              </div>

              <div className="col-3">
                <Link  style={{ textDecoration: 'none' }}>
                  <VuTile className ="row " 
                            roomId= "FRE17"
                            roomName= "G039-LQC4" 
                            roomStatus="In Process"
                  ></VuTile>
                </Link>
              </div>

              <div className="col-3">
                <Link  style={{ textDecoration: 'none' }}>
                  <VuTile className ="row " 
                            roomId= "REFR55"
                            roomName= "G039-LQC4" 
                            roomStatus="Cleaning"
                  ></VuTile>
                </Link>
              </div>

              <div className="col-3">
                <Link  style={{ textDecoration: 'none' }}>
                  <VuTile className ="row " 
                            roomId= "REFR46"
                            roomName= "G039-LQC4" 
                            roomStatus="In Process"
                  ></VuTile>
                </Link>
              </div>

              <div className="col-3">
                <Link  style={{ textDecoration: 'none' }}>
                  <VuTile className ="row " 
                            roomId= "FRE24"
                            roomName= "G039-LQC4" 
                            roomStatus="In Process"
                  ></VuTile>
                </Link>
              </div>

              <div className="col-3">
                <Link  style={{ textDecoration: 'none' }}>
                  <VuTile className ="row " 
                            roomId= "UFRE4"
                            roomName= "G039-LQC4" 
                            roomStatus="In Process UI"
                  ></VuTile>
                </Link>
              </div>

              <div className="col-3">
                <Link  style={{ textDecoration: 'none' }}>
                  <VuTile className ="row " 
                            roomId= "UFRE2"
                            roomName= "G034-LQC6" 
                            roomStatus="In Process"
                  ></VuTile>
                </Link>
              </div>

              <div className="col-3">
                <Link  style={{ textDecoration: 'none' }}>
                  <VuTile className ="row " 
                            roomId= "FRE18"
                            roomName= "G034-LQC6" 
                            roomStatus="In Test"
                  ></VuTile>
                </Link>
              </div>

              <div className="col-3">
                <Link  style={{ textDecoration: 'none' }}>
                  <VuTile className ="row " 
                            roomId= "REFR29"
                            roomName= "G034-LQC6" 
                            roomStatus="Not Compliant"
                  ></VuTile>
                </Link>
              </div>

              <div className="col-3">
                <Link  style={{ textDecoration: 'none' }}>
                  <VuTile className ="row " 
                            roomId= "REFR67"
                            roomName= "G034-LQC6" 
                            roomStatus="In Process"
                  ></VuTile>
                </Link>
              </div>

              <div className="col-3">
                <Link  style={{ textDecoration: 'none' }}>
                  <VuTile className ="row " 
                            roomId= "REFR15"
                            roomName= "G034-LQC6" 
                            roomStatus="Decontamination"
                  ></VuTile>
                </Link>
              </div>

              <div className="col-3">
                <Link  style={{ textDecoration: 'none' }}>
                  <VuTile className ="row " 
                            roomId= "REFR27"
                            roomName= "G034-LQC6" 
                            roomStatus="In Process"
                  ></VuTile>
                </Link>
              </div>

              <div className="col-3">
                <Link  style={{ textDecoration: 'none' }}>
                  <VuTile className ="row " 
                            roomId= "REFR30"
                            roomName= "G034-LQC6" 
                            roomStatus="In Process"
                  ></VuTile>
                </Link>
              </div>

              <div className="col-3">
                <Link  style={{ textDecoration: 'none' }}>
                  <VuTile className ="row " 
                            roomId= "KTK2"
                            roomName= "G030-LQC2" 
                            roomStatus="In Process"
                  ></VuTile>
                </Link>
              </div>

              <div className="col-3">
                <Link   style={{ textDecoration: 'none' }}>
                  <VuTile className ="row " 
                            roomId= "KTK1"
                            roomName= "G030-LQC2" 
                            roomStatus="Not Defined"
                  ></VuTile>
                </Link>
              </div>

              <div className="col-3">
                <Link style={{ textDecoration: 'none' }}>
                  <VuTile className ="row " 
                            roomId= "Lokaal G024"
                            roomName= "G030-LQC2" 
                            roomStatus="In Process"
                  ></VuTile>
                </Link>
              </div>


            </div>
            
          </div>
        );
    }


export default LaboChemie;