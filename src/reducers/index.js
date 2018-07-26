import { combineReducers } from 'redux';
import IndexReducer from './reducer_index';

const rootReducer = combineReducers({
  index: IndexReducer
});

export default rootReducer;
