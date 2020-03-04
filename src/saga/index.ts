import { take, call } from 'redux-saga/effects'

export function* rootSaga() {
    console.log('Hello world!')
    yield take({type: ''})
}