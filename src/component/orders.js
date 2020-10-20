import React from 'react';

import '../css/first.css';
import '../App.css';
import {getOrder} from '../actions/api';
import { connect} from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Redirect } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Order extends React.Component {

    constructor(props) {
        super(props);
        this.state = {            
            loading:false,
            data:{},
            error:{},           
            orderData:[]                
        };
        this.convertDate=this.convertDate.bind(this);
      }

      componentWillReceiveProps(newProps){
          if(!newProps.loading){

           
            console.log(newProps.orderData)
            if(newProps.orderData.status===200){
              if(newProps.orderData.data.length==0){
                this.setState({orderData:[]});
                alert("No order is placed");
              }else{
                this.setState({orderData:newProps.orderData.data})
              }
                
            }
            
          }
          
      }

      convertDate=(date)=>{
        return new Date(date).getDate()+'/'+[new Date(date).getMonth()+1]+'/'+new Date(date).getFullYear()
      }

      componentDidMount(){
        //   console.log(this.props)
        if(this.props.data.data){
          this.props.getOrders({id:this.props.data.data[0]._id});
        }
      }

     
      render() { 
        if(!this.props.data.data){   
          return <Redirect to="/login" />     
        }else{      
        return (
    
            <div className="DefaultLayoutPadding" >
              <Row>    
               {this.state.orderData.map((data,index)=>
    <Col xs={6} key={data._id}>

              <Card  style={{ width: '30rem',color:'black',margin:'7px' }}>
              <Card.Img variant="top" src={data.product.image} style={{width:'30rem',height:'20rem'}}/>
                <Card.Body>
                    <Card.Title>Product Name:{data.product.name}</Card.Title>                    
               <Card.Subtitle className="mb-2 text-muted">Total Cost : {data.cart.Cost} ,Items :{data.cart.Items},Product Cost :{data.product.cost}</Card.Subtitle>
                    <Card.Text>
                    Description:{data.product.Description}
                    </Card.Text>
                    <Card.Footer style={{fontSize:'12px'}}>
                      Order Date :{this.convertDate(data.date)},Order type : {data.orderType},Status :{data.status}
                      </Card.Footer>   
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
    orderData:state.cart.orderData,
  });
  
  const mapDispatchToProps =(dispatch,ownProps)=>({
    getOrders:(state)=>{
         dispatch(getOrder(state));
        },          
  })
  
  export default connect(mapStateToProps,mapDispatchToProps) (Order);