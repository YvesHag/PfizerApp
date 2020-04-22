import React, { PureComponent } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';


const ChooseApp = (props) => {


  console.log("chooseApp rendering")
  return (
    <div className="container min-vh-100">

      <div className="row  " style={{ backgroundColor: 'rgb(0,99,117)' }}>
        <img className="col-2 offset-1" src='assets/logoWhite.png' heigt="120" width="150" alt='Pfizer'></img>
        <div className=" col-9 h1 text-white m-auto text-right" >Pfizer FMS_Demo</div>
      </div>
      <div className="row text-white mt-5" ><div className=" h2 m-auto">Choose an View for Demo</div></div>
      <div className='row  mt-5'>
        <div className='col-6'>
          <div className='row justify-content-center mt-1'> <Link to="/RoomE204"><Button >View Room E204</Button></Link> </div>
          <div className='row justify-content-center mt-2'> <Link to="/LaboChemie"><Button >View Labo Chemie</Button></Link> </div>
        </div>
        <div className='col-6'>
          <div className="row justify-content-center">
            <Link to="/QrScanner"><Button >Change Room Status</Button></Link>
          </div>
        </div>



      </div>
    </div>
  );
}


export default ChooseApp;