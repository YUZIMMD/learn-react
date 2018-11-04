import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// 参数：reducer，state，中间件
const initialState = {};
const middleware = [thunk];
 const store = createStore(()=>[],initialState,applyMiddleware(...middleware))
export default store;
