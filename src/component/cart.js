import React from 'react';
import { Redirect } from 'react-router-dom';
import '../css/first.css';
import '../App.css';
import {getCart,placeOrder} from '../actions/api';
import { connect} from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {            
            loading:false,
            data:{},
            error:{},
            placeorder:false, 
            cartData:[]                
        };
        this.placeOrder=this.placeOrder.bind(this);
      }

      componentWillReceiveProps(newProps){
          if(!newProps.loading){

            if(newProps.orderStatus && this.state.placeorder){
                // console.log(newProps.orderPlace.message)
                alert(newProps.orderPlace.message)
                this.setState({placeorder:false});
                this.props.getCartList({id:this.props.data.data[0]._id});
            }

            console.log(newProps.cartData)
            if(newProps.cartData.status===200){
                this.setState({cartData:newProps.cartData.data})
            }else{
                this.setState({cartData:[]})
                alert(newProps.cartData.message)
            }
            
          }
          
      }

      componentDidMount(){
          console.log(this.props.data.data)
        if(this.props.data.data){
            this.props.getCartList({id:this.props.data.data[0]._id});
        }
          
      }

      placeOrder=(data)=>{
        
       this.setState({placeorder:true});
        this.props.PlaceOrderCOD({userId:this.props.data.data[0]._id,product:JSON.stringify(data.product),cart:JSON.stringify(data.cart),date:new Date().toISOString(),orderType:'cod',deliveryDate:'',status:'pending'})
      }
      render() {      
        
            if(!this.props.data.data){   
                return <Redirect to="/login" />     
              }else{ 
                return ( <div className="DefaultLayoutPadding" >
              <Row>    
               {this.state.cartData.map((data,index)=>
    <Col xs={6} key={data.cart._id}>

              <Card  style={{ width: '30rem',color:'black',margin:'7px' }}>
              <Card.Img variant="top" src={data.product.image} style={{width:'30rem',height:'20rem'}}/>
                <Card.Body>
                    <Card.Title>Product Name:{data.product.name}</Card.Title>                    
               <Card.Subtitle className="mb-2 text-muted">Total Cost : {data.cart.Cost} ,Items :{data.cart.Items},Product Cost :{data.product.cost}</Card.Subtitle>
                    <Card.Text>
                    Description:{data.product.Description}
                    </Card.Text>

                    <Button variant="primary" onClick={()=>{this.placeOrder(data)}}>Place Order(COD)</Button>
            </Card.Body>
</Card> 
</Col>)}
</Row>
              </div>
        );
               }
      }
    }

    
const mapStateToProps =(state,ownProps)=>({
    loading:state.cart.loading,
    data:state.session.data,     
    cartError:state.cart.error,
    cartData:state.cart.cartData,
    orderStatus:state.cart.orderStatus,
    orderPlace:state.cart.orderPlace,
    
  });
  
  const mapDispatchToProps =(dispatch,ownProps)=>({
    getCartList:(state)=>{
         dispatch(getCart(state));
        },  
        PlaceOrderCOD:(state)=>{
            dispatch(placeOrder(state));
           },  
  })
  
  export default connect(mapStateToProps,mapDispatchToProps) (Cart);