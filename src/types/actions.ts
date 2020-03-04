import { FETCH_SUCCES, FETCH_ERROR, FETCH_IMAGES, PAGE_COUNTER } from '../constants/Actions'

export interface ActionTypeWidthArray {
    type: typeof FETCH_SUCCES,
    payload: Array<any>
}

export interface ActionTypeWithOutPayload{
    type: typeof FETCH_IMAGES | typeof FETCH_ERROR
}

export interface ActionWidthPayload {
    type: typeof PAGE_COUNTER,
    payload: number
}

export type AllActionTypes = ActionTypeWidthArray | ActionTypeWithOutPayload | ActionWidthPayload