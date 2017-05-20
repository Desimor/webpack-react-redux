import * as types from './types';

export function addForm(form){
    return {
        type: types.addData,
        form
    };
}