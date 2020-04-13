import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RoomHeader from './RoomHeader'
import RoomBody from './RoomBody'



class RoomE204 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomId: "E204",
            roomName: "WSL6",
            roomStatus: "production",
            roomTemp: 20,
            roomHum: 60,
            roomPres:53,
            roomOccupation: 4,
            batchNumber: 2000,

        };
    }

    render() {
        
        return (
          <div className="container">
            <div className= "row text-white" style={{ backgroundColor: 'rgb(0,99,117)', maxHeight: '120px' }}>
              <RoomHeader roomId={this.state.roomId}></RoomHeader>
            </div>
            <div className="row justify-content-center min-vh-100">
              <div className="col-12">
                <Link to="/RoomDetails" style={{ textDecoration: 'none' }}>
                  <RoomBody className ="row " 
                            roomName= {this.state.roomName} 
                            roomStatus={this.state.roomStatus} 
                            roomTemp= {this.state.roomTemp}
                            roomHum = {this.state.roomHum}
                            roomPres ={this.state.roomPres}
                  ></RoomBody>
                </Link>
              </div>
             
            </div>
            
          </div>
        );
    }
}

export default RoomE204;