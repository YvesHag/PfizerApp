import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

const RoomBody = (props) => {

    const [state, setState] = useState({
        roomStatusColor: 'rgb(255,255,255)'
    })

    useEffect(() => { //the same like compo
        console.log(props.roomTemp)
        matchRoomstatusToColor()
    }, [props])


    const matchRoomstatusToColor = () => {
        if (props.roomStatus === "In Production") {
            console.log(state.roomStatusColor)
            setState({
                roomStatusColor: 'rgb(118, 255, 3)'
            }, () => {
                // console.log(this.state.roomStatusColor)
            })
        } else {
            setState({
                roomStatusColor: 'rgb(255, 0, 3)'
            })
        }

    }

    const RenderCard = <Card style={{ backgroundColor: state.roomStatusColor }}>
        <CardBody>
            <CardTitle className='h2 row' ><div className=' m-auto text-center' m-auto text-center>{props.roomId}</div></CardTitle>
            <CardText className='h1 row'><div className=' m-auto text-center' m-auto text-center>{props.roomStatus}</div></CardText>
            <p className="h2 row"><div className=' m-auto text-center' m-auto text-center>{props.roomName}</div></p>
        </CardBody>
    </Card>



    return (
        <div className="row col-6 offset-3 RoomBody"  >
            <div className='col-12'>{RenderCard}</div>
        </div>
    )
}


export default RoomBody