import { combineReducers } from 'redux';
import plantReducer from './plantReducer';
import favReducer from './favReducer';

const rootReducers = combineReducers({
    plantReducer,
    favReducer
});

export default rootReducers;
