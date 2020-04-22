import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'moment';

class RoomStatusBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      time: Moment(new Date()).format('HH:mm:ss')
    }
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    Moment.locale('en');
    var time = Moment(new Date()).format('HH:mm:ss')
    this.setState({
      time: time
    });
  }


  render() {
    return (
      <div className="col-12  RoomHeader ">
        <div className='row '>
          <div className="col-3 m-auto" ><Link  to="REFR46Details" style={{ textDecoration: 'none' }}><img src='assets/logoWhite.png' heigt="62" width="75" alt='Pfizer'></img></Link></div>
          <div className="h1 col-6 m-auto text-center">{this.props.roomId}</div>
          <div className="h3 col-3 m-auto text-right">{this.state.time}</div>
        </div>
      </div>
    );
  }
}

export default RoomStatusBar;