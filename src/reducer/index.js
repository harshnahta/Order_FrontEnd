import {combineReducers} from 'redux';
import session from './sessionReducers';
import cart from './cartReducers';
// import pADD from './productReducers';
// import  orderRed  from './orderReducer';
// import  Cpass  from './passwordReducer';
// import marketRed from './marketreducer';
export default combineReducers({
    session,
    cart
    
});