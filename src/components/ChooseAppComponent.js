import React, { Component } from 'react';
import { Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';


class ChooseApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    render() {
        
        return (
          <div className="container">
            <React.Fragment>
              <Navbar dark color="primary">
                <div className="container">
                <img src='assets/logoWhite.png' heigt="30" width="41" alt='Pfizer'></img>
                    <NavbarBrand href="/">Pfizer FMS_Demo</NavbarBrand>
                </div>
              </Navbar>
            </React.Fragment>
            <div className ="row text-dark mt-5" ><div  className=" h2 m-auto">Choose an App for Demo</div></div>
            <div className='row mt-5'>
              <span className='col-3'></span>
              <Link to="/RoomE204"><Button >View Room E204</Button></Link>
              <span className='col-3'></span>
              <Link to="/QrScanner"><Button >Change Room Status</Button></Link>
            </div>
          </div>
        );
    }
}

export default ChooseApp;