

import {GETTOCART_BEGIN,GETTOCART_SUCCESS,GETTOCART_FAILURE} from '../actionTypes';

import {PLACEORDER_BEGIN,PLACEORDER_SUCCESS,PLACEORDER_FAILURE} from '../actionTypes';
import {GETORDER_BEGIN,GETORDER_SUCCESS,GETORDER_FAILURE} from '../actionTypes';

const cart =(state,action)=>{
    if(typeof state==='undefined'){
        return {
            loading:false,
            cartData:[],
            error:{},
            orderPlace:{},
            orderStatus:false,
            orderData:[]        
        }
    }

    switch(action.type){                               
                    case GETTOCART_BEGIN:
                        return {
                            ...state,
                            loading:true,
                            error:{},
                            // cartData:[]
                           
                        };
                    case GETTOCART_SUCCESS:
                        return {              
                            ...state,
                                loading:false,
                                 error:{} ,
                                 cartData:action.data.data
                                                         
                                
                  };  
                  case GETTOCART_FAILURE:
                        return {
                            ...state,
                            loading:false,
                            error:action.error.response.data,
                                                         
                        }; 
                        
                        case PLACEORDER_BEGIN:
                            return {
                                ...state,
                                loading:true,
                                error:{},
                                orderPlace:{},
                                orderStatus:false
                                // cartData:[]
                               
                            };
                        case PLACEORDER_SUCCESS:
                            return {              
                                ...state,
                                    loading:false,
                                     error:{} ,
                                     orderStatus:true,
                                     orderPlace:action.data.data
                                     
                                                             
                                    
                      };  
                      case PLACEORDER_FAILURE:
                            return {
                                ...state,
                                loading:false,
                                orderStatus:false,
                                error:action.error.response.data,
                                orderPlace:{}                            
                            };  
                            
                            case GETORDER_BEGIN:
                                return {
                                    ...state,
                                    loading:true,
                                    error:{},
                                    orderData:[]
                                    // cartData:[]
                                   
                                };
                            case GETORDER_SUCCESS:
                                return {              
                                    ...state,
                                        loading:false,
                                         error:{} ,
                                         orderStatus:true,
                                         orderData:action.data.data
                                         
                                                                 
                                        
                          };  
                          case GETORDER_FAILURE:
                                return {
                                    ...state,
                                    loading:false,
                                    orderStatus:false,
                                    error:action.error.response.data,
                                    orderData:{}                            
                                }; 
           
    default :
    return state;
    }
}

export default cart;