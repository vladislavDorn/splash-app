import { FETCH_ERROR, FETCH_IMAGES, FETCH_SUCCES, PAGE_COUNTER } from '../../constants/Actions'
import { imageData } from '../../types/interfaces'

export const fetchSucces = (data: Array<imageData>) => ({
    type: FETCH_SUCCES,
    payload: data
})

export const fetchLoad = ():any => ({
    type: FETCH_IMAGES,
}) 

export const fetchError = ():any => ({
    type: FETCH_ERROR
})

export const pageCounter = (count:number) => ({
    type: PAGE_COUNTER,
    payload: count
})