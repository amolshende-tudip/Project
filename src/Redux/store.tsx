import {createStore, combineReducers} from 'redux';
import nameReducer from './Reducer';
const rootReducer = combineReducers({
nameReducer: nameReducer,
});
const configureStore = () => createStore(rootReducer);
export default configureStore;