import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap'

class RoomBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
           roomStatusColor : ''
        };

        
    }

    componentDidMount(){
        this.matchRoomstatusToColor()
    }

    matchRoomstatusToColor=()=>{
        if(this.props.roomStatus ==="production"){
            console.log(this.state.roomStatusColor)
            this.setState({
                roomStatusColor :'rgb(118, 255, 3)'
            }, ()=>{
                console.log(this.state.roomStatusColor)
            })
        }else{
            this.setState({
                roomStatusColor :'rgb(255, 0, 3)'
            })
        }
        
    }


    render() {

    const roomStatus = this.props.roomStatus

    const RenderCard= <Card style={{ backgroundColor: this.state.roomStatusColor}}>
                            <CardBody>
                                <CardTitle className = 'h2 row' ><div className=' m-auto text-center' m-auto text-center>{this.props.roomName}</div></CardTitle>
                                <p className="h2 row"><div className=' m-auto text-center' m-auto text-center>in</div></p>
                                <CardText className = 'h1 row'><div className=' m-auto text-center' m-auto text-center>{this.props.roomStatus}</div></CardText>
                            </CardBody>
                        </Card>

    

        return(
            <div className="row col-6 offset-3 RoomBody"  >
                <div className ='col-12'>{RenderCard}</div>
            </div>
        )
    }

}

export default RoomBody