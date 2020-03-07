import { FETCH_SUCCES, FETCH_ERROR, FETCH_IMAGES, PAGE_COUNTER } from '../constants/Actions'

export interface ActionTypeWidthArray {
    type: typeof FETCH_SUCCES,
    payload: Array<any>
}

export interface ActionTypeWithOutPayload{
    type: typeof FETCH_IMAGES | typeof FETCH_ERROR | typeof PAGE_COUNTER
}

export type AllActionTypes = ActionTypeWidthArray | ActionTypeWithOutPayload