import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
 
class QRscanner extends Component {
    constructor(props){
        super(props)
        this.state = {
          delay: 500,
          result: 'No result',
        }
    
        this.handleScan = this.handleScan.bind(this)
      }
      handleScan(result){
        if(result){
          this.setState({ result })
          console.log(result)
        }
      }
      handleError(err){
        console.error(err)
      }
      render(){
        const previewStyle = {
          height: 240,
          width:320,
        }
        const foundRoom = ()=>{
          if (this.state.result =="No result"){
            return(
            <div>{this.state.result}</div>
            )
            
          }else{
            return(
            <button >{this.state.result}</button>
            )
          }
        }
          
    
        return(
          <div>
            <QrReader
              delay={this.state.delay}
              style={previewStyle}
              onError={this.handleError}
              onScan={this.handleScan}
            />
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <button>{this.state.result}</button>
          </div>
        )
      }
}

export default QRscanner;

