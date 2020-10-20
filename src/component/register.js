import React from 'react';
import { Redirect } from 'react-router-dom';
import '../css/first.css';
import '../App.css';
import {registerUser} from '../actions/api';
import { connect} from 'react-redux';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {            
            loading:false,
            data:{},
            error:{}, 
            name:'',
            email:'',
            password:''                
        };
        this.changenameevent=this.changenameevent.bind(this);
        this.registerUser=this.registerUser.bind(this);
        this.reset=this.reset.bind(this);
      }

      componentWillReceiveProps(newProps){
        
        if(!newProps.loading){
          if(newProps.error.status){          
            alert(newProps.error.message);
          }else{               
            alert(newProps.data.msg);
            this.reset();
          }
          
        }
      }

      reset=()=>{
        this.setState({name:'',email:'',password:''});
      }
      changenameevent=(event,key)=>{
        switch(key){
          case 'n':this.setState({name:event.target.value});break;
          case 'e':this.setState({email:event.target.value});break;
          case 'p':this.setState({password:event.target.value});break;
          case 'default-case':break;
        }
                
      }


      registerUser=()=>{
        if(!this.state.name){
          alert("ENter Name");
        }else if(!/\w+\@\w+\.\w+/.test(this.state.email)){
          alert("ENter Proper Email");
        }else if(!this.state.password || this.state.password.length<6){
          alert("ENter Password and should be 6 charater long");
        }else{
          this.props.register({"name":this.state.name,"email":this.state.email,"password":this.state.password});
        }
        
      }

      render() {  
        if(this.props.data && this.props.data.status==200){   
          return <Redirect to="/Products" />     
        }else{     
        return (
    
            <div className="DefaultLayoutPadding" >
              <Form>
              <Form.Group controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control  value={this.state.name}
        onChange={(event)=>{this.changenameevent(event,'n')}} type="text" placeholder="Enter Name" />    
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control value={this.state.email} onChange={(event)=>{this.changenameevent(event,'e')}} type="email" placeholder="Enter email" />    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control value={this.state.password} onChange={(event)=>{this.changenameevent(event,'p')}} type="password" placeholder="Password" />
  </Form.Group>
  
  <Button onClick={this.registerUser} variant="primary" >
    Login
  </Button>
</Form>
              </div>
        );
      }
    }
    }

    
const mapStateToProps =(state,ownProps)=>({
    loading:state.session.loading,
    data:state.session.data,
    error:state.session.error,  
    // otpStatus:state.Cpass.otpstatus,
  });
  
  const mapDispatchToProps =(dispatch,ownProps)=>({
      register:(state)=>{
         dispatch(registerUser(state));
        },    
  })
  
  export default connect(mapStateToProps,mapDispatchToProps) (Register);