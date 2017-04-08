import { INCREMENT, DECREMENT } from './constants'

export const incCounter = () => ({
	type: INCREMENT
})

export const decCounter = () => ({
	type: DECREMENT
})
