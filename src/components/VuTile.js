import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import useLongPress from '../hooks/useLongPress';



const VuTile = (props) => {

    const longPress = useLongPress(changeStatus,1000);

    const [state, setState] = useState({
        roomStatusColor: 'rgb(255,255,255)'
    })

    const [roomId, setRoomId] = useState(props.roomId)

    useEffect(() => { //the same like component did mount
        matchRoomstatusToColor()
    }, [props])

    let somecolor="rgb(220,220,220)"

    const matchRoomstatusToColor = () => {

        const whiteColor ="rgb(220,220,220)"
        const greenColor = 'rgb(118, 255, 3)'
        const purpleColor ="rgb(155,66,200)"
        const blueColor ="rgb(0,128,255)"
        const greyColor ="rgb(105,105,105)"
        const yellowColor="rgb(255,211,0)"


        if (props.roomStatus === "In Process") {
            
            setState({
                roomStatusColor: greenColor
            })
        }else if (props.roomStatus === "Conform") {
            
            setState({
                roomStatusColor: greenColor
            })
        }else if (props.roomStatus === "In Process Cleaning") {
            setState({
                roomStatusColor: greyColor
            })
        }else if (props.roomStatus === "Cleaning") {
            setState({
                roomStatusColor: greyColor
            })
        }else if (props.roomStatus === "Declassified to C") {
            setState({
                roomStatusColor: greyColor
            })
        }else if (props.roomStatus === "Declassified to D") {
            
            setState({
                roomStatusColor: greyColor
            })
        }else if (props.roomStatus === "Declassified to UNCL") {
            
            setState({
                roomStatusColor: greyColor
            })
        }else if (props.roomStatus === "In Test") {
            
            setState({
                roomStatusColor: greyColor
            })
        }else if (props.roomStatus === "Not Conform Dirty") {
            
            setState({
                roomStatusColor: greyColor
            })
        }else if (props.roomStatus === "Not Compliant") {
            
            setState({
                roomStatusColor: blueColor
            })
        }else if (props.roomStatus === "Comform UI") {
            
            setState({
                roomStatusColor: blueColor
            })
        }else if (props.roomStatus === "In Process UI") {
            
            setState({
                roomStatusColor: blueColor
            }) 
        }else if (props.roomStatus === "In Process Cleaning UI") {
            
            setState({
                roomStatusColor: blueColor
            })
        }else if (props.roomStatus === "Decontamination") {
            
            setState({
                roomStatusColor: yellowColor
            })
        }else if (props.roomStatus === "Not Defined") {
            
            setState({
                roomStatusColor: purpleColor
            })
        }else{
            setState({
                roomStatusColor: purpleColor
            })
        }
    }

    
    

    function changeStatus(){
        setRoomId("hgchg")
    }

    const RenderCard = 
    <Card  {...longPress} style={{ backgroundColor: state.roomStatusColor, minHeight:'100%' , color:"black"}}>
        <CardBody className='col-12'>
            <CardTitle className='h3 row' style={{ marginTop: "-12px",fontSize:"1.7vw"}} ><div className=' text-left'>{roomId}</div></CardTitle>
            <CardText className='h2 row' style={{ marginTop: "-8px",fontSize:"2.1vw", fontWeight:"bold"}}><div className='m-auto text-center'  text-center >{props.roomStatus}</div></CardText>
            <div className="h3 row" style={{ marginTop: "2px",marginBottom: "-10px",fontSize:"1.4vw",}}><div className='col-12 text-right'>{props.roomName}</div></div>
        </CardBody>
    </Card>



    return (
        <div className="row RoomBody "  >
            <div className='col-12' >{RenderCard}</div>
        </div>
    )
}


export default VuTile