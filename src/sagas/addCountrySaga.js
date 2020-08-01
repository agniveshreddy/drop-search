import { call, put } from 'redux-saga/effects';
import { types } from 'actions';
import { addCountryService } from 'services/addCountryService';

export default function* addCountrySaga(payload) {
    const {value} = payload;
    const response = yield call(addCountryService, value)
    console.log("json", response );
    if(response){
        yield put({ type: types.ADD_COUNTRY_SUCCESS, response:{status: response.status, value: value} });
    }
    else
        yield put({type: types.ADD_COUNTRY_ERROR, error: response.status});
    
}