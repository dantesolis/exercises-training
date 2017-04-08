import { createStore } from 'redux'

import { incCounter, decCounter } from '../counter/actions'

import { addTodo, editTodo, deleteTodo, markTodo, markAll, clearMarked, setFilter } from '../todomvc/actions'

// your task is to implement combinedReducer imported below

import { combinedReducer as combined } from './reducers'

describe('Redux Composing Reducers', () => {
	let store
	beforeEach(() => {
		store = createStore(combined)
	})

	it('can compose smaller pieces into bigger ones', () => {
		expect(store.getState().counter).toEqual(0)

		store.dispatch(incCounter())
		expect(store.getState().counter).toEqual(1)

		store.dispatch(addTodo('buy milk'))
		expect(store.getState().todos.length).toEqual(1)

		store.dispatch(addTodo('play Les Paul guitar'))
		expect(store.getState().todos.length).toEqual(2)

		store.dispatch(decCounter(5))
		expect(store.getState().counter).toEqual(-4)

		store.dispatch(markTodo(1))
		expect(store.getState().todos.find(t => t.id === 0).marked).toEqual(false)
		expect(store.getState().todos.find(t => t.id === 1).marked).toEqual(true)

		store.dispatch(markAll())
		expect(store.getState().todos.find(t => t.id === 0).marked).toEqual(true)

		store.dispatch(clearMarked())
		expect(store.getState().todos.length).toEqual(0)
	})

})
