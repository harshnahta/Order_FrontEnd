
import {LOGIN_BEGIN,LOGIN_SUCCESS,LOGIN_FAILURE} from '../actionTypes';
import {REGISTER_BEGIN,REGISTER_SUCCESS,REGISTER_FAILURE} from '../actionTypes';
import {GETPRODUCT_BEGIN,GETPRODUCT_SUCCESS,GETPRODUCT_FAILURE} from '../actionTypes';
import {ADDTOCART_BEGIN,ADDTOCART_SUCCESS,ADDTOCART_FAILURE} from '../actionTypes';
import {GETTOCART_BEGIN,GETTOCART_SUCCESS,GETTOCART_FAILURE} from '../actionTypes';


const session =(state,action)=>{
    if(typeof state==='undefined'){
        return {
            loading:false,
            err_bool:false,
            error:{},
            data:[],
            reg_data:{},
            productsData:[],
            cartData:[],
            cartBool:false            
        }
    }

    switch(action.type){                               
        case LOGIN_BEGIN:
            return {
                ...state,
                loading:true,
                error:{},
                data:[]
            };
        case LOGIN_SUCCESS:
            return {              
                ...state,
                    loading:false,
                     error:{} ,
                     data:action.data.data,
                    login:true,
                    // video:false
      };  
      case LOGIN_FAILURE:
            return {
                ...state,
                loading:false,
                error:action.error.response.data,
                data:[]
            };
 
            case REGISTER_BEGIN:
                return {
                    ...state,
                    loading:true,
                    error:{},
                    reg_data:{}
                    // data:{}
                };
            case REGISTER_SUCCESS:
                return {              
                    ...state,
                        loading:false,
                         error:{} ,
                         data:action.data.data,
                         err_bool:false,
                        REGISTER:true,
                        // video:false
          };  
          case REGISTER_FAILURE:
                return {
                    ...state,
                    loading:false,
                    error:action.error.response.data,
                    err_bool:true,
                    data:{}
                };
                case GETPRODUCT_BEGIN:
                    return {
                        ...state,
                        loading:true,
                        error:{},
                        reg_data:{},
                        // productsData:[]
                        // data:{}
                    };
                case GETPRODUCT_SUCCESS:
                    return {              
                        ...state,
                            loading:false,
                             error:{} ,
                             productsData:action.data.data,
                             err_bool:false,                            
                            // video:false
              };  
              case GETPRODUCT_FAILURE:
                    return {
                        ...state,
                        loading:false,
                        error:action.error.response,
                        err_bool:true,
                        // productsData:{}
                    }; 
                    
                    case ADDTOCART_BEGIN:
                        return {
                            ...state,
                            loading:true,
                            error:{},
                            reg_data:{},
                            cartData:[],
                            cartBool:false  
                        };
                    case ADDTOCART_SUCCESS:
                        return {              
                            ...state,
                                loading:false,
                                 error:{} ,
                                 cartData:action.data.data,
                                cartBool:true                           
                                
                  };  
                  case ADDTOCART_FAILURE:
                        return {
                            ...state,
                            loading:false,
                            error:action.error.response.data,
                            cartData:[],
                            cartBool:false                             
                        };                
           
    default :
    return state;
    }
}

export default session;