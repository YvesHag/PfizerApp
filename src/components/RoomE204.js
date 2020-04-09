import React, { Component } from 'react';
import { Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import RoomStatusBar from './RoomStatusBar'



class RoomE204 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomId: "E204",
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
            <RoomStatusBar roomId={this.state.roomId} roomStatus={this.state.roomStatus}></RoomStatusBar>
          </div>
        );
    }
}

export default RoomE204;