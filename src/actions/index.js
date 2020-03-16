import {
    INCREASE_COUNTER,
    DECREASE_COUNTER
} from './types';

export const increaseCounter = () => {
    console.log('Dispatched!')
    return {
        type: INCREASE_COUNTER,
        payload: null
    }
}

export const decreaseCounter = () => {
    return {
        type: DECREASE_COUNTER,
        payload: null
    }
}
