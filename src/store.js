import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'
// 参数：reducer，state，中间件
const initialState = {};
// 组成数组，一步步执行中间件
const middleware = [thunk];
// reducer：store收到action之后必须给出一个新的state，这样view才会发生变化，这种state的计算过程叫reducer，reducer是一个函数，它接受Action和当前state作为参数返回以一个新的state
//  reducer的拆分
const store = createStore(rootReducer,initialState,applyMiddleware(...middleware))
export default store;
