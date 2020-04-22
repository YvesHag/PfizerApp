import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col, } from 'reactstrap'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import useLongPress from '../hooks/useLongPress';
import { useHistory } from 'react-router-dom'
import ChangeVuStatusForm from "./ChangeVuStatusForm"


const VuTile = (props) => {

    const history = useHistory()
    const [changePath, setChangePath] = useState(true)

    const [toggleModalOpen, setToggleModal] = useState(false)


    const [state, setVUcolor] = useState({
        roomStatusColor: 'rgb(255,255,255)'
    })



    const [roomStatus, setRoomStatus] = useState(props.roomStatus)

    useEffect(() => { //the same like component did mount
        matchRoomstatusToColor()
    }, [roomStatus])

    const matchRoomstatusToColor = () => {

        const whiteColor = "rgb(220,220,220)"
        const greenColor = 'rgb(118, 255, 3)'
        const purpleColor = "rgb(155,66,200)"
        const blueColor = "rgb(0,128,255)"
        const greyColor = "rgb(105,105,105)"
        const yellowColor = "rgb(255,211,0)"
        // console.log(roomStatus)

        if (roomStatus === "In Process") {

            setVUcolor({
                roomStatusColor: greenColor
            })
        } else if (roomStatus === "Conform") {

            setVUcolor({
                roomStatusColor: greenColor
            })
        } else if (roomStatus === "In Process Cleaning") {
            setVUcolor({
                roomStatusColor: greyColor
            })
        } else if (roomStatus === "Cleaning") {
            setVUcolor({
                roomStatusColor: greyColor
            })
        } else if (roomStatus === "Declassified to C") {
            setVUcolor({
                roomStatusColor: greyColor
            })
        } else if (roomStatus === "Declassified to D") {

            setVUcolor({
                roomStatusColor: greyColor
            })
        } else if (roomStatus === "Declassified to UNCL") {

            setVUcolor({
                roomStatusColor: greyColor
            })
        } else if (roomStatus === "In Test") {

            setVUcolor({
                roomStatusColor: greyColor
            })
        } else if (roomStatus === "Not Conform Dirty") {

            setVUcolor({
                roomStatusColor: greyColor
            })
        } else if (roomStatus === "Not Compliant") {

            setVUcolor({
                roomStatusColor: blueColor
            })
        } else if (roomStatus === "Comform UI") {

            setVUcolor({
                roomStatusColor: blueColor
            })
        } else if (roomStatus === "In Process UI") {

            setVUcolor({
                roomStatusColor: blueColor
            })
        } else if (roomStatus === "In Process Cleaning UI") {

            setVUcolor({
                roomStatusColor: blueColor
            })
        } else if (roomStatus === "Decontamination") {

            setVUcolor({
                roomStatusColor: yellowColor
            })
        } else if (roomStatus === "Not Defined") {

            setVUcolor({
                roomStatusColor: purpleColor
            })
        } else {
            setVUcolor({
                roomStatusColor: purpleColor
            })
        }
    }


    const longPress = useLongPress(changeStatus, 1000);
    function changeStatus(newStatus) {
        setRoomStatus(newStatus)
        // setChangePath(false)
    }

    function goToPath() {
        if (changePath) {
            history.push(props.path)
        } else {
            //setChangePath(true)
        }
    }

    function changeStuf() {
        console.log("dddd")
        setToggleModal(!toggleModalOpen)
    }



    const RenderCard = (

        <div>
            <Card style={{ backgroundColor: state.roomStatusColor, minHeight: '100%', color: "black" }} >
                <CardBody className='col-12'>
                    <CardTitle className='h3 row' onClick={goToPath} style={{ marginTop: "-12px", fontSize: "1.7vw" }} ><div className=' text-left'>{props.roomId}</div></CardTitle>
                    <CardText className='h2 row' onClick={goToPath} style={{ marginTop: "-8px", fontSize: "2.1vw", fontWeight: "bold" }}><div className='m-auto text-center' text-center >{roomStatus}</div></CardText>
                    <Row className="row" style={{ marginTop: "2px", marginBottom: "-15px", fontSize: "1.4vw",}}>
                        <Col className="col-4" style={{marginLeft:'-10px', marginTop: "-10px", marginBottom: "-10px bg-light" }} onClick={() => changeStuf()}>
                            <img src='assets/changestateB.png' heigt="14" width="25" alt='Pfizer'></img>
                            <ChangeVuStatusForm toggleModalOpen={toggleModalOpen} toggleModal={changeStuf} roomId={props.roomId} roomStatus={roomStatus} statusColor={state.roomStatusColor} setRoomStatus={changeStatus}></ChangeVuStatusForm>
                        </Col >
                        <Col className="h3 col-8" style={{marginRight:'00px', marginTop: "0px", marginBottom: "0px", fontSize: "1.4vw", }} ><div className='col-12 ' style={{marginRight:'0px',text:"right",}}>{props.roomName}</div></Col>
                    </Row>

                </CardBody>

            </Card>
        </div>

    )



    return (
        <div className="row RoomBody "  >
            <div className='col-12' >{RenderCard}</div>
        </div>
    )
}


export default VuTile