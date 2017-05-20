import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const forms = (state = [], action) => {
    switch (action.type) {
        case types.addData:
            return state.concat(action.form);
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    forms,
    routing
});

export default rootReducer;
