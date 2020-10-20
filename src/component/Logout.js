import React from 'react';
import { Redirect } from 'react-router-dom';
import '../css/first.css';
import '../App.css';
import {LogoutUser} from '../actions/api';
import { connect} from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Logout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {            
            loading:false,
            data:{},
            error:{},           
            orderData:[]                
        };
        
      }

      componentWillReceiveProps(newProps){
         
        this.props.LogoutUser();
      }

     

      componentDidMount(){
        //   console.log(this.props)
          this.props.LogoutUser();
      }

     
      render() {      
        return (
    
          <Redirect to="/login" /> 
        );
      }
    }

    
const mapStateToProps =(state,ownProps)=>({
    loading:state.cart.loading,
    data:state.session.data,     
    
  });
  
  const mapDispatchToProps =(dispatch,ownProps)=>({
    LogoutUser:()=>{
         dispatch(LogoutUser());
        },          
  })
  
  export default connect(mapStateToProps,mapDispatchToProps) (Logout);