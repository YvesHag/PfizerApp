import React, { Component } from 'react';
import { Navbar, NavbarBrand,Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label, Breadcrumb, BreadcrumbItem  } from 'reactstrap';
import {NavLink, Link} from 'react-router-dom'

class RoomStatusBar extends Component {

  constructor(props){
    super(props);
console.log(props.roomId)
    this.state= {
        isNavOpen: false,
        isModalOpen: false
    }
    this.toggleNav = this.toggleNav.bind(this)
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav(){
    this.setState({
      isNavOpen: !this.state.isNavOpen
    })
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
    return(
    <React.Fragment> {/* helps to group react elements and return them */}
      <div className="h1 col-12  text-center pt-5">Room {this.props.roomId} in {this.props.roomStatus}</div>
      <Jumbotron> 
            <Navbar dark expand="md">
                <NavbarToggler onClick ={this.toggleNav} /> {/* this is a button which shows for < md screens when the navbar has collapas */}
                <Collapse isOpen={this.state.isNavOpen} navbar>{/*  this will make the navbar collapse for <md screens */}
                        <Nav className=" col-12" navbar>
                            <div className = "col-3">
                                <div className="row"><span className="fa fa-sign-in fa-lg"></span></div>
                                <div className="row">Home</div>
                            </div>
                            <NavItem>
                                 <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                            </NavItem>
                        </Nav>
                </Collapse>
            </Navbar>
       </Jumbotron>
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
    </React.Fragment>
    );
  }
}

export default RoomStatusBar;