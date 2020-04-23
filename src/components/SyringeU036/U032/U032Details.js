import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { Chart } from "react-google-charts"
import RoomHeader from '../../RoomHeader'
import AlarmLog from "../../alarmLog"
import sensors from "./Sensors"


class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomId: "U032",
            roomName: "xxxxx",
            roomSensors: sensors,
            selectedTile: "",
            selectedTileIndex: "",
            comfortColor: 'rgb(118, 255, 3)',
            pharmaColor: 'rgb(255 0, 3)'
        };
    }

    componentDidMount() {
        this.getStatusColor();
    }



    acceptAlarm = (id) => {

        console.log(id)

        if (this.state.selectedTile !== "") {

            const remainingAlarms = this.state.roomSensors[this.state.selectedTileIndex].alarmLog.filter(alarm => {
                return alarm.id !== id
            })

            this.setState(prevState => ({
                alarmLog: prevState.roomSensors.map(sensor =>
                    sensor.id === this.state.selectedTile.id ? Object.assign(sensor, { alarmLog: remainingAlarms }) : sensor)
            }), () => {
                this.setState({
                    selectedTile: this.state.roomSensors[this.state.selectedTileIndex],
                })
            }, () => {
                console.log(this.state.selectedTile)
            })
        }
    }



    getStatusColor = () => {
        if (this.state.roomSensors.length > 0) {

            this.setState(prevState => ({
                roomSensors: prevState.roomSensors.map(sensor =>
                    sensor.status === 'comfort' ? Object.assign(sensor, { statusColor: this.state.comfortColor }) : sensor.status !== 'comfort' ? Object.assign(sensor, { statusColor: this.state.pharmaColor }) : sensor,
                )
            }))
        }

    }


    selectToDisplayTile = (index) => {

        this.setState({
            selectedTile: this.state.roomSensors[index],
            selectedTileIndex: index
        }, () => {
            console.log(this.state.selectedTile)
        })

    }

    render() {
        var sensorTile = ""
        if (this.state.roomSensors.length > 0) {
            sensorTile = this.state.roomSensors.map((sensor, index) => {
                return (
                    <Card className="col-12 mt-3" style={{ backgroundColor: sensor.statusColor }}>
                        <CardBody onClick={() => { this.selectToDisplayTile(index) }}>
                            <CardText style={{ marginTop: "-20px", fontSize: '25px' }} className=' row justify-content-center' ><div className=' text-center'>{sensor.id}</div></CardText>
                            <CardText style={{ marginTop: "-20px" }} className='h4 row text-center justify-content-center '><div className=''>{sensor.value} {sensor.unit}</div></CardText>
                            <CardSubtitle style={{ marginBottom: "-20px", marginTop: "-10px" }} className='row justify-content-center'>{sensor.description}</CardSubtitle>
                        </CardBody>
                    </Card>
                )
            }
            )
        }

        let Graph = ""
        if (this.state.selectedTile !== "") {
            Graph = <div className="col-12">
                <Chart width={'100%'}
                    height={'100%'}
                    chartType="LineChart"
                    loader={<div></div>}
                    data={this.state.selectedTile.measurements}
                    options={this.state.selectedTile.graphOptions}
                    rootProps={{ 'data-testid': '2' }}>
                </Chart>
            </div>
        } else {
            Graph =
                <div className="row ">
                    <div className="h3 col-12 text-center justify-content-center">
                        <div> Please select a measurement for more details</div>
                    </div>
                </div>
        }

        return (
            <div className="container min-vh-100 ">
                <div className="row text-white" style={{ maxHeight: '120px', backgroundColor: 'rgb(0,99,117)' }}>
                    <div className="col-12">
                        <Link className="link" to="/SyringeU036" style={{ textDecoration: 'none' }}>
                            <RoomHeader roomId={this.state.roomId}></RoomHeader>
                        </Link>
                    </div>
                </div>
                <div className="row" style={{ marginTop: "20px", marginLeft: "10px" }} >
                    <div className="col-3 " style={{}}>
                        <div className="row justify-content-center" >
                            <div className="">{sensorTile}</div>
                        </div>
                    </div>
                    <div className="col-8 bg-white-overlay " style={{ borderRadius: '10px', marginLeft: "20px" }}>
                        <div className="row h3 justify-content-center text-dark"> {this.state.selectedTile.id}</div>
                        <div className="row justify-content-center text-dark">
                            <div className="col-12">
                                {Graph}
                            </div>
                        </div>
                        <div className="col-12 mt-3 mb-3">
                            <AlarmLog selectedTile={this.state.selectedTile} acceptAlarm={this.acceptAlarm}></AlarmLog>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;