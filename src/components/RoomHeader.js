import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import Moment from 'moment';

class RoomStatusBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      time: Moment(new Date()).format('HH:mm:ss')
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
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

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleLogin(event) {
    this.toggleModal();
    alert("Username: " + this.username.value + " Password: " + this.password.value
      + " Remember: " + this.remember.checked);
    event.preventDefault();

  }

  render() {
    return (
      <div className="col-12  RoomHeader ">
        <div className='row '>
          <div className="col-3 m-auto" ><img src='assets/logoWhite.png' heigt="62" width="75" alt='Pfizer'></img></div>
          <div className="h1 col-3 m-auto text-center">{this.props.roomId}</div>
          {/* <div className="col-3 m-auto text-right"><Button className="text-center bg-light" outline onClick={this.toggleModal}><span className="fa fa-sign-in "></span> Login</Button>  </div> */}
          <div className="h3 col-3 m-auto text-right">{this.state.time}</div>
        </div>


        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" name="username"
                  innerRef={(input) => this.username = input} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" name="password"
                  innerRef={(input) => this.password = input} />
              </FormGroup>
              <Button type="submit" value="submit" color="primary">Login</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default RoomStatusBar;