import * as types from './types';

export function addPerson(form){
    return {
        type: types.addData,
        form
    };
}