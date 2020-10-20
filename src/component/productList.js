import React from 'react';
import { Redirect } from 'react-router-dom';
import '../css/first.css';
import '../App.css';
import {GetProducts,addCart} from '../actions/api';
import { connect} from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {            
            loading:false,
            data:{},
            error:{},
            products:[]                 
        };
        this.addCarts=this.addCarts.bind(this);
      }

      componentWillReceiveProps(newProps){
        //   if(newProps.cartBool){
            console.log(newProps.cartData)          
        //   }else{            
            this.setState({products:newProps.productsData.data})
        //   }
          
          
      }

      addCarts=(data)=>{
        
        console.log({"userId":this.props.data.data[0]._id,"ProductId":data._id,"Items":1,"Cost":data.cost})
        this.props.addToCart({"userId":this.props.data.data[0]._id,"ProductId":data._id,"Items":1,"Cost":data.cost});
      }

      componentDidMount(){
        //   console.log(this.props)
        if(this.props.data.data){
          this.props.getProductsList();
        }
      }

      render() { 
        if(!this.props.data.data){   
            return <Redirect to="/login" />     
          }else{     
        return (
    
            <div className="DefaultLayoutPadding" >
               <Row>    
               {this.state.products.map((data,index)=>
    <Col xs={6} key={data._id}>

              <Card  style={{ width: '30rem',color:'black',margin:'7px' }}>
              <Card.Img variant="top" src={data.image} style={{width:'30rem',height:'20rem'}}/>
                <Card.Body>
                    <Card.Title>Product Name:{data.name}</Card.Title>                    
                    <Card.Subtitle className="mb-2 text-muted">Cost : {data.cost} , Color :{data.color},Type :{data.type}</Card.Subtitle>
                    <Card.Text>
                    Description:{data.Description}
                    </Card.Text>

                    <Button variant="primary" onClick={()=>{this.addCarts(data)}}>Add to cart</Button>
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
    loading:state.session.loading,
    data:state.session.data,
    error:state.session.error,
    productsData:state.session.productsData,  
    cartData:state.session.cartData,  
    cartBool:state.session.cartBool,  
  });
  
  const mapDispatchToProps =(dispatch,ownProps)=>({
      getProductsList:(state)=>{
         dispatch(GetProducts());
        },
        addToCart:(state)=>{
            dispatch(addCart(state));
           },     
  })
  
  export default connect(mapStateToProps,mapDispatchToProps) (ProductList);