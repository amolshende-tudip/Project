import {createStore, combineReducers} from 'redux';
import profileDetailReducer from '../reducers/peopleReducer';

const rootReducer = combineReducers({
  profileDetailReducer: profileDetailReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;