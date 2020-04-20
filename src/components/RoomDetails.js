import React, {Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { Chart } from "react-google-charts"
import RoomHeader from './RoomHeader'
import AlarmLog from "./alarmLog"


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
                measurements: "",
                unit: '°C',
                graphOptions: "",
                alarmLog:[]
            },
            roomHum: {
                id: "5145-72MT98",
                value: 46,
                maxRange: 40,
                status: "comfort",
                statusColor: "",
                measurements: "",
                unit: '%',
                graphOptions: '', 
                alarmLog:[]
            },
            roomPres: 53,
            selectedTile: "",
            selectedTag:"",
            comfortColor: 'rgb(118, 255, 3)',
            pharmaColor: 'rgb(255 0, 3)'
        };

        
    }

    


    componentDidMount() {
        this.getStatusColor();
        this.getTempAlarmLogs()
    }

    getTempAlarmLogs(){
        const alarmLog= [
             {id:1, content:"Low alarm", time: "15:32:54"},
             {id:2, content:"High alarm", time: "04:18:47"},
             {id:3, content:"Low alarm", time: "20:39:29"}
         ]
         this.setState({
             roomTemp: { ...this.state.roomTemp, alarmLog: alarmLog}
         })
     }

     acceptAlarm= (id)=>{

            if (this.state.selectedTile ==="tempTile"){
            
            const remainingAlarms = this.state.roomTemp.alarmLog.filter(alarm =>{
                return alarm.id !== id
            }) 
        
           this.setState({
                roomTemp: { ...this.state.roomTemp, alarmLog:remainingAlarms},
                selectedTag: {...this.state.roomTemp, alarmLog:remainingAlarms}
            }) 
            //console.log(this.state.selectedTag)
     }
    }

    getTempMeasurement = () => {
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
            roomTemp: { ...this.state.roomTemp, measurements: tempMeasurements },

        }, () => {
            const graphOptions = {
                hAxis: {
                    title: 'Time',
                    baselineColor: '#fff',
                    gridlines: {
                        color: 'transparent'
                    },
                    minValue: 0,
                },

                vAxis: {
                    title: "°C",
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
            }

            this.setState({
                roomTemp: { ...this.state.roomTemp, graphOptions: graphOptions }
            }, () => {
                //console.log(this.state.roomTemp)
            })
        })
        return (tempMeasurements)
    }

    getHumMeasurement = () => {
        const humMeasurements = [
            ['x', 'HighA', 'LowA', "AV"],
            [0, 65, 15, 58],
            [1, 65, 15, 40],
            [2, 65, 15, 45],
            [3, 65, 15, 62],
            [4, 65, 15, 67],
            [5, 65, 15, 17],
            [6, 65, 15, 30],
            [7, 65, 15, 40],
        ]

        this.setState({
            roomHum: { ...this.state.roomHum, measurements: humMeasurements }
        }, () => {
            const graphOptions = {
                hAxis: {
                    title: 'Time',
                    baselineColor: '#fff',
                    gridlines: {
                        color: 'transparent'
                    },
                    minValue: 0,
                },

                vAxis: {
                    title: "%",
                    baselineColor: '#fff',
                    gridlines: {
                        color: 'transparent'
                    },
                    minValue: 0,
                    maxValue: 100
                },
                series: {
                    0: { color: "#e7711b", lineWidth: 1, lineDashStyle: [5, 1, 3] },
                    1: { color: "#e7711b", lineWidth: 1, lineDashStyle: [5, 1, 3] },
                    2: { color: "blue", lineWidth: 1, curveType: 'function' },
                },
                legend: { position: 'bottom' },
                backgroundColor: { fill: 'transparent' }
            }

            this.setState({
                //roomTemp : { ...this.state.roomTemp,measurements: tempMeasurements },
                roomHum: { ...this.state.roomHum, graphOptions: graphOptions }
            })

            //console.log(this.state.roomTemp)
        })
        return (humMeasurements)
    }

    getStatusColor = () => {
        if (this.state.roomTemp.status === "comfort") {
            this.setState({
                roomTemp: { ...this.state.roomTemp, statusColor: this.state.comfortColor }
            }, () => {
                this.getTempMeasurement()

            })
        }
        if (this.state.roomTemp.status !== "comfort") {
            this.setState({
                roomTemp: { ...this.state.roomTemp, statusColor: this.state.pharmaColor }
            }, () => {
                this.getTempMeasurement()

            })
        }
        if (this.state.roomHum.status === "comfort") {
            this.setState({
                roomHum: { ...this.state.roomHum, statusColor: this.state.comfortColor }
            }, () => {
                this.getHumMeasurement()

            })
        }
        if (this.state.roomHum.status !== "comfort") {
            this.setState({
                roomHum: { ...this.state.roomHum, statusColor: this.state.pharmaColor }
            }, () => {
                this.getHumMeasurement()

            })
        }

    }



    selectToDisplayTile = (selectedTile, selectedTag) => {
        this.setState({
            selectedTile: selectedTile,
            selectedTag:selectedTag
        })
        //console.log(selectedTag)
    }




    render() {

        //console.log("rendering")
        //console.log(this.state.selectedTag)
        

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

        let Graph = ""
        if (this.state.selectedTile === "tempTile") {
            Graph = <div className="col-12">
                <Chart width={'100%'}
                    height={'100%'}
                    chartType="LineChart"
                    loader={<div></div>}
                    data={this.state.roomTemp.measurements}
                    options={this.state.roomTemp.graphOptions}
                    rootProps={{ 'data-testid': '2' }}>
                </Chart>
            </div>
        }
        else if (this.state.selectedTile === "humTile") {
            Graph = <div className="col-12">
                <Chart width={'100%'}
                    height={'100%'}
                    chartType="LineChart"
                    loader={<div></div>}
                    data={this.state.roomHum.measurements}
                    options={this.state.roomHum.graphOptions}
                    rootProps={{ 'data-testid': '2' }}>
                </Chart>
            </div>
        }
        else{
            Graph = <div className="h3 col-12 text-center">
            <div> Please select a measurement</div>
        </div>
        
        }




        return (
            <div className="container min-vh-100 ">
                <div className="row text-white" style={{ maxHeight: '120px', backgroundColor: 'rgb(0,99,117)' }}>
                    <div className="col-12">
                        <RoomHeader roomId={this.state.roomId}></RoomHeader>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "20px", marginLeft: "10px" }} >
                    <div className="col-3 " style={{}}>
                        <div className="row justify-content-center" >
                            <div className="" onClick={() => { this.selectToDisplayTile("tempTile",this.state.roomTemp ) }}>{TempCard}</div>
                        </div>
                        <div className="row justify-content-center" style={{ marginTop: "10px" }}>
                            <div className="" onClick={() => { this.selectToDisplayTile("humTile", this.state.roomHum) }}>{HumCard}</div>
                        </div>
                    </div>
                    <div className="col-8 bg-white-overlay " style={{ borderRadius: '10px', marginLeft: "20px" }}>
                        <div className="row h3 justify-content-center text-dark"> {this.state.selectedTag.id}</div>
                        <div className="row justify-content-center text-dark">
                            <div className="col-12">
                                {Graph}
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <AlarmLog alarmLog ={this.state.selectedTag.alarmLog} acceptAlarm={this.acceptAlarm} tag={this.state.selectedTag}></AlarmLog>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RoomDetails;