import {
    INCREASE_COUNTER, 
    DECREASE_COUNTER
} from '../actions/types'

const INITIAL_STATE = {
	counter: 0,
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case INCREASE_COUNTER:
            console.log('Hit reducer!')
			return {...state, counter: state.counter + 1}
		case DECREASE_COUNTER:
			return {...state, counter: state.counter - 1}
		default:
			return state
	}
}