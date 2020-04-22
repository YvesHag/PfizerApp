import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalHeader, ModalBody, Row, Col, } from 'reactstrap';


const ChangeStatusForm = (props) => {

  //console.log(props)

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

  const [selectedState, setSelectedState] = useState(props.roomStatus)

  function getSelectedState(status){

    setSelectedState(status)

    console.log(selectedState)

  }

  const differentStatus=[
    "Conform",
    "In Process Cleaning",
    "Cleaning",
    "Declassified to C",
    "Declassified to D",
    "Declassified to UNCL",
    "In Test",
    "Not Conform Dirty",
    "Not Compliant",
    "Comform UI",
    "In Process UI",
    "In Process Cleaning UI",
    "Decontamination",
    "Not Defined"
  ]

  const dropDownItems = differentStatus.map(status =>{
    return(
      <DropdownItem onClick={()=>{getSelectedState(status)}}>{status}</DropdownItem>
    )
  })

  return (
    <Modal isOpen={props.toggleModalOpen} toggle={props.toggleModal}>
      <ModalHeader toggle={props.toggleModal} style={{ backgroundColor: props.statusColor }}><div>{props.roomId} : {props.roomStatus}</div></ModalHeader>
      <ModalBody>
        <Form>
        <Row className="form-group">
          <Col md={6}>
            <Dropdown direction="right" isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle caret>
                Select a New State
              </DropdownToggle>
              <DropdownMenu>
                {dropDownItems}
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col md={6}>{selectedState}</Col>
        </Row>
          
          <Row className="form-group">
  
            <Col md={10}>
              Sign
            </Col>
          </Row>
          <FormGroup>
            <Label for="exampleEmail" hidden>User ID</Label>
            <Input type="text" name="email" id="exampleEmail" placeholder="Pfizer ID" />
          </FormGroup>
          {' '}
          <FormGroup>
            <Label for="examplePassword" hidden>Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Password" />
          </FormGroup>

          <FormGroup>
            <Label for="reasonText">Reason For Change</Label>
            <Input type="textarea" name="text" id="reasonText" />
          </FormGroup>
          <Button color="primary" onClick={()=>{props.setRoomStatus(selectedState)}}>Submit</Button>
        </Form>
      </ModalBody>
    </Modal>

  );
}

export default ChangeStatusForm;