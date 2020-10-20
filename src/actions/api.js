
// import axios from './interceptor';
import axios from 'axios';
import {loginBegin,loginSuccess,loginFailure} from '../actionCreators/ActionCreator';
import {REGISTERBegin,REGISTERSuccess,REGISTERFailure} from '../actionCreators/ActionCreator';
import {GETPRODUCTBegin,GETPRODUCTSuccess,GETPRODUCTFailure} from '../actionCreators/ActionCreator';
import {ADDTOCARTBegin,ADDTOCARTSuccess,ADDTOCARTFailure} from '../actionCreators/ActionCreator';

import {GETTOCARTBegin,GETTOCARTSuccess,GETTOCARTFailure} from '../actionCreators/ActionCreator';

import {PLACEORDERBegin,PLACEORDERSuccess,PLACEORDERFailure} from '../actionCreators/ActionCreator';
import {GETORDERBegin,GETORDERSuccess,GETORDERFailure} from '../actionCreators/ActionCreator';

import {baseurl} from './baseurl';
export const LoginUsr = (state)=>{
    
    return (dispatch)=>{    
        dispatch(loginBegin());
        axios.post(baseurl+'user/login',state).then((res)=>{            
           console.log(res)
            dispatch(loginSuccess(res)
            );
        }).catch((err)=>{
            console.log(err);
            dispatch(loginFailure(err));
        })                    
}
}


export const LogoutUser = (state)=>{
    
    return (dispatch)=>{    
        dispatch(loginBegin());
    }
}




export const registerUser=(state)=>{
    return (dispatch)=>{    
        console.log(state);
        dispatch(REGISTERBegin());
        axios.post(baseurl+'user/register',state).then((res)=>{            
            dispatch(REGISTERSuccess(res)
            );
        }).catch((err)=>{
            console.log(err);
            dispatch(REGISTERFailure(err));
        })                    
}
}



export const GetProducts=()=>{
    return (dispatch)=>{            
        dispatch(GETPRODUCTBegin());
        axios.get(baseurl+'user/getProduct').then((res)=>{            
            // console.log(res);
            dispatch(GETPRODUCTSuccess(res)
            );
        }).catch((err)=>{
            console.log(err);
            dispatch(GETPRODUCTFailure(err));
        })                    
}
}


export const addCart=(state)=>{
    return (dispatch)=>{         
        console.log(state)   
        dispatch(ADDTOCARTBegin());
        axios.post(baseurl+'user/addCart',state).then((res)=>{                        
            dispatch(ADDTOCARTSuccess(res)
            );
        }).catch((err)=>{
            console.log(err);
            dispatch(ADDTOCARTFailure(err));
        })                    
}
}


export const getCart=(state)=>{
    return (dispatch)=>{         
        console.log(state)   
        dispatch(GETTOCARTBegin());
        axios.get(baseurl+'user/getCart',{params:state}).then((res)=>{                        
            dispatch(GETTOCARTSuccess(res)
            );
        }).catch((err)=>{
            console.log(err);
            dispatch(GETTOCARTFailure(err));
        })                    
}
}


export const placeOrder=(state)=>{
    return (dispatch)=>{         
        console.log(state)   
        dispatch(PLACEORDERBegin());
        axios.post(baseurl+'user/placeOrder',state).then((res)=>{                        
           console.log(res)
            dispatch(PLACEORDERSuccess(res)
            );
        }).catch((err)=>{
            console.log(err);
            dispatch(PLACEORDERFailure(err));
        })                    
}
}

export const getOrder=(state)=>{
    return (dispatch)=>{         
        console.log(state)   
        dispatch(GETORDERBegin());
        axios.get(baseurl+'user/getOrder',{params:state}).then((res)=>{                        
           console.log(res)
            dispatch(GETORDERSuccess(res)
            );
        }).catch((err)=>{
            console.log(err);
            dispatch(GETORDERFailure(err));
        })                    
}
}


