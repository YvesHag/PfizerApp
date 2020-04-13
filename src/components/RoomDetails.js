import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { Chart } from "react-google-charts"

import RoomHeader from './RoomHeader'


class RoomDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomId: "E204",
            roomName: "WSL6",
            roomStatus: "Production",
            roomTemp: {
                id: "5145-72TT98",
                value: 20,
                maxRange: 40,
                status: "comfort",
                statusColor: "",
                measurements:"",
                unit:'°C'
            },
            roomHum: {
                id: "5145-72TT98",
                value: 46,
                maxRange: 40,
                status: "comfort",
                statusColor: "",
                measurements:"",
                unit:'°C'
            },
            roomPres: 53,
            pressedItem:'',
            roomOccupation: 4,
            batchNumber: 2000,

        };
    }

    componentDidMount() {
        this.tempStatusColor();
        
    }

    getTempMeasurement =() =>{
        const tempMeasurements = [
            ['x', 'HighA', 'LowA', "AV"],
            [0, 25, 15, 18],
            [1, 25, 15, 20],
            [2, 25, 15, 35],
            [3, 25, 15, 17.5],
            [4, 25, 15, 14],
            [5, 25, 15, 17],
            [6, 25, 15, 24],
            [7, 25, 15, 23],
        ]

        this.setState({
            roomTemp : { ...this.state.roomTemp,measurements: tempMeasurements }
        }, ()=>{
           console.log(this.state.roomTemp)
        })
        return(tempMeasurements)
    }

     getHumMeasurement =() =>{
        const humMeasurements = [
            ['x', 'HighA', 'LowA', "AV"],
            [0, 65, 15, 18],
            [1, 65, 15, 20],
            [2, 65, 15, 35],
            [3, 65, 15, 17.5],
            [4, 65, 15, 14],
            [5, 65, 15, 17],
            [6, 65, 15, 24],
            [7, 65, 15, 23],
        ]

        this.setState({
            roomHum: { ...this.state.roomHum, measurements: humMeasurements }
        }, ()=>{
           // console.log(this.state.roomHum.measurements)
        })
        return(humMeasurements) 
    }

    tempStatusColor = () => {
        if (this.state.roomTemp.status === "comfort") {
            console.log(this.state.roomTemp.status)
            this.setState({
                roomTemp: { ...this.state.roomTemp, statusColor: 'rgb(118, 255, 3)' }
            }, () => {
                this.getTempMeasurement()
                console.log(this.state.roomTemp)
            })
        } else {
            this.setState({
                roomTemp: { ...this.state.roomTemp, statusColor: 'rgb(255 0, 3)' }
            })
        }

    }

    render() {

        const TempCard =
            <Card className="col-12 " style={{ backgroundColor: this.state.roomTemp.statusColor, width: "100", }}>
                <CardBody >
                    <CardText style={{ marginTop: "-20px" }} className='h4 row justify-content-center' ><div className=' text-center'>{this.state.roomTemp.id}</div></CardText>
                    <CardText style={{ marginTop: "-10px" }} className='h5 row text-center justify-content-center '><div className=''>{this.state.roomTemp.value} °C</div></CardText>
                    <CardSubtitle style={{ marginBottom: "-20px", marginTop: "-10px" }} className='row justify-content-center'>Temp. Room {this.state.id}</CardSubtitle>
                </CardBody>
            </Card>

        const HumCard =
            <Card className="col-12 " style={{ backgroundColor: this.state.roomHum.statusColor, width: "100", }}>
                <CardBody >
                    <CardText style={{ marginTop: "-20px" }} className='h4 row justify-content-center ' ><div className=' text-center'>{this.state.roomHum.id}</div></CardText>
                    <CardText style={{ marginTop: "-10px" }} className='h5 row justify-content-center '><div className=''>{this.state.roomHum.value} %</div></CardText>
                    <CardSubtitle style={{ marginBottom: "-20px", marginTop: "-10px" }} className='row justify-content-center'>Hum. Room {this.state.id}</CardSubtitle>
                </CardBody>
            </Card>

        const Graph =
            <div className="col-12">
                <Chart width={'90%'}
                    height={'80%'}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={this.state.roomTemp.measurements}
                    options={{
                        hAxis: {
                            title: 'Time',
                            baselineColor: '#fff',
                            gridlines: {
                                color: 'transparent'
                            },
                        },
                        vAxis: {
                            title: '°C',
                            baselineColor: '#fff',
                            gridlines: {
                                color: 'transparent'
                            },
                            minValue: 0,
                            maxValue: 40
                        },
                        series: {
                            0: { color: "#e7711b", lineWidth: 1, lineDashStyle: [5, 1, 3] },
                            1: { color: "#e7711b", lineWidth: 1, lineDashStyle: [5, 1, 3] },
                            2: { color: "blue", lineWidth: 1, curveType: 'function' },
                        },
                        legend: { position: 'bottom' },
                        backgroundColor: { fill: 'transparent' }
                    }}
                    rootProps={{ 'data-testid': '2' }}>
                </Chart>
            </div>




        return (
            <div className="container min-vh-100 ">
                    <div className="row text-white" style={{ backgroundColor: 'rgb(0,99,117)', maxHeight: '120px' }}>
                        <div className="col-12">
                            <RoomHeader roomId={this.state.id} ></RoomHeader>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:"20px",marginLeft:"10px"}} >
                            <div className="col-3 " style={{}}>
                                <div className="row justify-content-center" >
                                    <div className="">{TempCard}</div>
                                </div>
                                <div className="row justify-content-center" style={{marginTop:"10px"}}>
                                    <div className="">{HumCard}</div>
                                </div>
                            </div>
                            <div className="col-8 bg-white-overlay " style={{borderRadius: '10px',marginLeft:"20px"}}>
                                <div className="row justify-content-center text-dark flex-grow-1"> {this.state.roomTemp.id}</div>
                                <div className="row justify-content-center text-dark flex-grow-1">
                                    <div className="col-12 offset-2">
                                        {Graph}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row justify-content-center text-dark flex-grow-1" style={{marginTop:"30px"}} >
                                         Alarm List of {this.state.roomTemp.id}
                                    </div>
                                       
                                </div>
                            </div>
                        
                    </div>
            </div>
        );
    }
}

export default RoomDetails;