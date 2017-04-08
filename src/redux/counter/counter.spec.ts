import { createStore, combineReducers } from 'redux';

import { INCREMENT, DECREMENT } from './constants'
import { incCounter, decCounter } from './actions'
import { counterReducer as counter } from './reducers'

// part 1. determine the store value after dispatching certain actions
// part 2. extend store with additional functionality

fdescribe('Redux Counter', () => {
	let store
	beforeEach(() => {
		store = createStore(counter)
	})

	// determine what is the value of state at certain steps

	it('can increment and decrement by 1', () => {
		expect(store.getState()).toEqual( /* YOUR ANSWER HERE */)
		store.dispatch(incCounter())
		expect(store.getState()).toEqual( /* YOUR ANSWER HERE */)
		store.dispatch(incCounter())
		store.dispatch(incCounter())
		store.dispatch(decCounter())
		expect(store.getState()).toEqual( /* YOUR ANSWER HERE */)
		store.dispatch(decCounter())
		store.dispatch(decCounter())
		expect(store.getState()).toEqual( /* YOUR ANSWER HERE */)
	})

	// modify the store code (actions, action creators, reducer
	// - whatever is needed) to the following requirements:
	// - incCounter(), decCounter() - with no parameters - keep on +1/-1 the same way
	// - incCounter(x) adds +x, decCounter(y) subtracts y
	// e.g. incCounter(3) will add 3, decCounter(7) will subtract 7
	// in other words, existing functionality remains as-is, new functionality
	// shall be added incrementally

	it('can increment and decrement by 1 or by given integer', () => {
		expect(store.getState()).toEqual(0)
		store.dispatch(incCounter())
		expect(store.getState()).toEqual(1)
		store.dispatch(incCounter(5))
		expect(store.getState()).toEqual(6)
		store.dispatch(decCounter())
		store.dispatch(decCounter())
		expect(store.getState()).toEqual(4)
		store.dispatch(decCounter(3))
		expect(store.getState()).toEqual(1)
	})
})
