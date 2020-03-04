import { FETCH_ERROR, FETCH_IMAGES, FETCH_SUCCES, PAGE_COUNTER } from '../../constants/Actions'
import { StoreState }  from '../../types/types'
import { AllActionTypes } from '../../types/actions'

const initialState:StoreState = {
    images: [],
    load: true,
    error: false,
    pageNumber: 1
}

export const mainReducer = (state:StoreState = initialState, action:AllActionTypes) => {
    switch(action.type) {
        case FETCH_SUCCES:
            return { ...state, images: [...state.images, ...action.payload] }
        case FETCH_ERROR:
            return { ...state, error: true }
        case FETCH_IMAGES:
            return { ...state, laod: false }
        case PAGE_COUNTER:
            return { ...state, pageNumber: action.payload }
        default:
            return state
    }
}