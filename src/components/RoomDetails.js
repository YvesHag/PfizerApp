import React, { Component } from 'react';
import {Card, CardText, CardBody, CardTitle,CardSubtitle} from 'reactstrap'

import RoomHeader from './RoomHeader'


class RoomDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomId: "E204",
            roomName: "WSL6",
            roomStatus: "production",
            roomTemp: {
                tempId:"5145-72TT98",
                temp: 20,
                highTresh: 25,
                lowTresh:15,
                tempStatus: "comfort",
                tempStatusColor: ""
             },
            roomHum: 60,
            roomPres:53,
            roomOccupation: 4,
            batchNumber: 2000,
            
        };
    }

    componentDidMount(){
        this.tempStatusColor()
    }

    tempStatusColor=()=>{
        if(this.state.roomTemp.tempStatus ==="comfort"){
            console.log(this.state.roomTemp.tempStatus)
            this.setState({
                roomTemp: {...this.state.roomTemp, tempStatusColor: 'rgb(118, 255, 3)'}
            }, ()=>{
                console.log(this.state.roomTemp.tempStatusColor)
            })
        }else{
            this.setState({
                roomTemp: {...this.state.roomTemp, tempStatusColor: 'rgb(255 0, 3)'}
            })
        }
        
    }

    render() {
        
    const TempCard= 
        <Card className="col-12 " style={{ backgroundColor: this.state.roomTemp.tempStatusColor, width:"100"}}>
            <CardBody>
                <CardTitle className = 'h4 row pt-10' ><div className=' m-auto text-center' m-auto text-center>{this.state.roomTemp.tempId}</div></CardTitle>
                <CardText className = 'h5 row'><div className=' m-auto text-center' m-auto text-center>{this.state.roomTemp.temp} °C</div></CardText>
                <CardSubtitle className = 'row m-auto text-center'>Temp Room {this.state.roomId}</CardSubtitle>
            </CardBody>
        </Card>



        return (
        <div className="container">

            <div className="row " style={{ backgroundColor: 'rgb(76,99,117)'}}>
                  <RoomHeader roomId={this.state.roomId} ></RoomHeader>
            </div>

            <div className="row justify-content-center min-vh-100 roomDetailsBody">

                <div className="col-3">
                    <div className="d-flex flex-column h-100">
                        <div className="row justify-content-center flex-grow-1" style={{ backgroundColor: 'rgb(76,99,117)'}}>
                            <div className="">{TempCard}</div>
                        </div>
                    </div>
                </div>

                <div className="col-9 ">
                    <div className="d-flex flex-column h-100">
                        <div className="row justify-content-center bg-dark flex-grow-1">
                            <div className="text-white">KOL 2 - ROW 2 - grow remaining height</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        );
    }
}

export default RoomDetails;