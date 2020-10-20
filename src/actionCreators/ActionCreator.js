import {LOGIN_BEGIN,LOGIN_SUCCESS,LOGIN_FAILURE} from '../actionTypes';
import {REGISTER_BEGIN,REGISTER_SUCCESS,REGISTER_FAILURE} from '../actionTypes';
import {GETPRODUCT_BEGIN,GETPRODUCT_SUCCESS,GETPRODUCT_FAILURE} from '../actionTypes';
import {ADDTOCART_BEGIN,ADDTOCART_SUCCESS,ADDTOCART_FAILURE} from '../actionTypes';
import {GETTOCART_BEGIN,GETTOCART_SUCCESS,GETTOCART_FAILURE} from '../actionTypes';

import {PLACEORDER_BEGIN,PLACEORDER_SUCCESS,PLACEORDER_FAILURE} from '../actionTypes';

import {GETORDER_BEGIN,GETORDER_SUCCESS,GETORDER_FAILURE} from '../actionTypes';
            
export const loginBegin = ()=>({
type :LOGIN_BEGIN
})
export const loginSuccess = (data)=>({
    type :LOGIN_SUCCESS,
    data
    })

    export const loginFailure = (error)=>({
        type :LOGIN_FAILURE,
        error
    })

 export const REGISTERBegin = ()=>({
        type :REGISTER_BEGIN
        })
        export const REGISTERSuccess = (data)=>({
            type :REGISTER_SUCCESS,
            data
            })

export const REGISTERFailure = (error)=>({
        type :REGISTER_FAILURE,
       error
}) 


export const GETPRODUCTBegin = ()=>({
    type :GETPRODUCT_BEGIN
    })
    export const GETPRODUCTSuccess = (data)=>({
        type :GETPRODUCT_SUCCESS,
        data
        })

export const GETPRODUCTFailure = (error)=>({
    type :GETPRODUCT_FAILURE,
   error
})  


export const ADDTOCARTBegin = ()=>({
    type :ADDTOCART_BEGIN
    })
    export const ADDTOCARTSuccess = (data)=>({
        type :ADDTOCART_SUCCESS,
        data
        })

export const ADDTOCARTFailure = (error)=>({
    type :ADDTOCART_FAILURE,
   error
}) 


export const GETTOCARTBegin = ()=>({
    type :GETTOCART_BEGIN
    })
    export const GETTOCARTSuccess = (data)=>({
        type :GETTOCART_SUCCESS,
        data
        })

export const GETTOCARTFailure = (error)=>({
    type :GETTOCART_FAILURE,
   error
}) 



export const PLACEORDERBegin = ()=>({
    type :PLACEORDER_BEGIN
    })
    export const PLACEORDERSuccess = (data)=>({
        type :PLACEORDER_SUCCESS,
        data
        })

export const PLACEORDERFailure = (error)=>({
    type :PLACEORDER_FAILURE,
   error
}) 

export const GETORDERBegin = ()=>({
    type :GETORDER_BEGIN
    })
    export const GETORDERSuccess = (data)=>({
        type :GETORDER_SUCCESS,
        data
        })

export const GETORDERFailure = (error)=>({
    type :GETORDER_FAILURE,
   error
}) 