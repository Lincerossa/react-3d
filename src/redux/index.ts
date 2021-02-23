import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
 
import direction from './direction/reducer'


const reducer = combineReducers({
  direction
})


const store = createStore(reducer, composeWithDevTools(
  applyMiddleware()
));

export default store