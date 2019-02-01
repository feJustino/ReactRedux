import { combineReducers } from 'redux';
import {dependenciesReducer} from './reducers/dependenciesReducer';
import {typeProjectReducer} from './reducers/typeProjectReducer';
import {languageReducer} from './reducers/languageReducer';
import {versionReducer} from './reducers/versionReducer';

export default combineReducers({
  dependenciesReducer,
  typeProjectReducer,
  languageReducer,
  versionReducer
})