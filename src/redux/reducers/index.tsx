import {combineReducers} from 'redux';
import HomeReducers from '../screenActions/Home/reducers';

const rootReducer = combineReducers({
  home: HomeReducers,
});

export default (state, action) => rootReducer(state, action);
