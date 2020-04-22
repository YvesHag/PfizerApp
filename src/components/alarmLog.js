import React, { Component, useState } from 'react';
import ReactDOM from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';

class Alarms extends Component {


    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            alarmId:""
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        
        console.log(props)
    }

    toggleModal(alarmId) {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
            alarmId:alarmId
        });
    }

    handleLogin(event) {
        this.toggleModal();
        console.log(event.target.password.value)
        event.preventDefault();
        event.target.reset()
        console.log(event.target.password.value)
        if (event.target.password.value==="jambo"){
        }
    }


    render() {

        let showAlarmList = ""
        if (this.props.selectedTile.alarmLog !== undefined) {
            showAlarmList = this.props.selectedTile.alarmLog.length ? (
                <div className="col-12 mt-3">
                    <div className="row h4 justify-content-center text-dark flex-grow-1" style={{ marginTop: "30px" }} >
                        Alarm List
                </div>
                </div>
            ) : (<div></div>)
        }

        let alarmList = ""
        if (this.props.selectedTile.alarmLog !== undefined) {
            alarmList = this.props.selectedTile.alarmLog.length ? (
                this.props.selectedTile.alarmLog.map((alarm, index)=> {
                    return (
                        <div className="row mt-1 alarmListRow" key={alarm.id}>
                            <div className="col-1 " onClick={()=>this.toggleModal(alarm.id)}><i className="fa fa-check">{/* {sign} */}</i></div>
                            <div className="col-3 " style={{ backgroundColor: 'props.tag.statusColor' }}>{alarm.content}</div>
                            <div className="col-4 text-center">{this.props.selectedTile.id}</div>
                            <div className="col-2 ">{alarm.time}</div>
                        </div>
                    )
                })
            ) : (
                    <div> No Alarms</div>
                )
        } else {
        }


        return (
            <div>
                <div>
                    {showAlarmList}
                </div>
                <div className='col-10 offset-1' >
                    {alarmList}
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Sign</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" defaultValue=""
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" defaultValue=""
                                    innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary" onClick={()=>this.props.acceptAlarm(this.state.alarmId)}>Confirm</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )

    }


}
export default Alarms;