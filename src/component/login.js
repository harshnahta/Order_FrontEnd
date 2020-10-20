import React from 'react';
import { Redirect } from 'react-router-dom';
import '../css/first.css';
import '../App.css';
import {LoginUsr} from '../actions/api';
import { connect} from 'react-redux';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {        
        loading:false,
        data:{},
        error:{},        
        email:'',
        password:''       
    };
    this.LoginUsercmp = this.LoginUsercmp.bind(this);
    this.changenameevent=this.changenameevent.bind(this);        
        this.reset=this.reset.bind(this);
      }

      componentWillReceiveProps(newProps){
        console.log(newProps)
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
          case 'e':this.setState({email:event.target.value});break;
          case 'p':this.setState({password:event.target.value});break;
          case 'default':break;
        }
                
      }
  

  componentDidMount(){
    
   if(this.props.data && this.props.data.status==200){
    
    //  this.props.router(['./Products'])
   }
  }

  LoginUsercmp=()=>{
    if(!/\w+\@\w+\.\w+/.test(this.state.email)){
      alert("ENter Proper Email");
    }else if(!this.state.password || this.state.password.length<6){
      alert("ENter Password and should be 6 charater long");
    }else{      
      this.props.loginCom({"email":this.state.email,"password":this.state.password});
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
    <Form.Label>Email address</Form.Label>
    <Form.Control value={this.state.email} onChange={(event)=>{this.changenameevent(event,'e')}} type="email" placeholder="Enter email" />    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control value={this.state.password} onChange={(event)=>{this.changenameevent(event,'p')}} type="password" placeholder="Password" />
  </Form.Group>
  
  <Button onClick={this.LoginUsercmp} variant="primary" >
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
    loginCom:(state)=>{
       dispatch(LoginUsr(state));
      },    
})

export default connect(mapStateToProps,mapDispatchToProps) (Login);