import { combineReducers } from 'redux'
import {mainReducer} from './reducers/reducer'

export default combineReducers({
    main: mainReducer
})