import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import API from '../../../data/api'

// part 1. dispatch actions to modify todos
// part 2. extend store with ability to filter todos
// part 3. implement async action creators (thunk middleware)

// to make things a little harder - watch out for missing imports (selectors)

import { addTodo, editTodo, deleteTodo, markTodo, markAll, clearMarked } from './actions'
import { todosReducer as todos } from './reducers'

describe('Redux TodoMVC', () => {
	let store
	beforeEach(() => {
		store = createStore(todos)
	})

	//=========================================
	// part 1. dispatch actions to modify todos

	it('can dispatch actions to modify todos', () => {
		expect(store.getState().todos.length).toEqual(0)
		// add 4 todos
		// ...
		expect(store.getState().todos.length).toEqual(4)
		// modify todo id:2 to be "Order 2 pizzas"
		// ...
		expect(store.getState().todos.length).toEqual(4)
		// delete todo id:3
		// ...
		expect(store.getState().todos.find(t => t.id === 3)).toEqual(undefined)
		expect(store.getState().todos.length).toEqual(3)
		expect(store.getState().todos.find(t => t.id === 1).marked).toEqual(false)
		// mark todo id:1
		// ...
		expect(store.getState().todos.find(t => t.id === 1).marked).toEqual(true)
		// clear all marked todos
		// ...
		expect(store.getState().todos.find(t => t.id === 1)).toEqual(undefined)
		expect(store.getState().todos.length).toEqual(2)
		// mark all todos
		// ...
		expect(store.getState().todos.every(t => t.marked)).toEqual(true)
	})

	//==================================================
	// part 2. extend store with ability to filter todos

	describe('store filtering', () => {
		// filter has 3 options:
		// - display all todos
		// - display completed todos
		// - display active todos
		// no rocket science :)

		// in order to achieve that, you should:
		// - design how you are going to store filtering data
		// - create constants defining filter values
		// - define action creator that would set the filter
		// - extend/combine/compose the store reducer
		// - implement the `getVisibleTodos()` function which returns todos
		// accordingly to the current filter (when filter==active, display
		// only active todos, etc.)

		// NEED TO IMPLEMENT _SELECTORS_ (selectors.js file):
		// - getTodosCount
		// which will return length of all todos array
		// - getVisibleTodos
		// which will, for a given state, return sub-collection of appropriate items
		// (completed, if completed chosen, incomplete, if not completed chosen, etc.)

		beforeEach(() => {
			// setup initial todos
			// default filter: ALL
			[
				'Learn redux',
				'Implement store',
				'Test store',
				'Profit!'
			].forEach(t => store.dispatch(addTodo(t)))
		})

		let state
		it('can filter:ALL todos', () => {
			// set the filter to: ALL todos
			//...
			state = store.getState()
			expect(getVisibleTodos(state).length).toEqual(4)
			expect(getTodosCount(state)).toEqual(4)

			store.dispatch(markTodo(0))
			state = store.getState()
			expect(getVisibleTodos(state).length).toEqual(4)
			expect(getTodosCount(state)).toEqual(4)

			store.dispatch(markAll())
			state = store.getState()
			expect(getVisibleTodos(state).length).toEqual(4)
			expect(getTodosCount(state)).toEqual(4)

			store.dispatch(clearMarked())
			state = store.getState()
			expect(getVisibleTodos(state).length).toEqual(0)
			expect(getTodosCount(state)).toEqual(0)
		})

		it('can filter:ACTIVE todos', () => {
			// set the filter to: ACTIVE todos
			//...
			state = store.getState()
			expect(getVisibleTodos(state).length).toEqual(4)
			expect(getCompletedTodos(state).length).toEqual(0)
			expect(getTodosCount(state)).toEqual(4)

			store.dispatch(markTodo(0))
			state = store.getState()
			expect(getVisibleTodos(state).length).toEqual(3)
			expect(getCompletedTodos(state).length).toEqual(1)
			expect(getTodosCount(state)).toEqual(4)

			store.dispatch(markAll())
			state = store.getState()
			expect(getVisibleTodos(state).length).toEqual(0)
			expect(getCompletedTodos(state).length).toEqual(4)
			expect(getTodosCount(state)).toEqual(4)

			store.dispatch(clearMarked())
			state = store.getState()
			expect(getVisibleTodos(state).length).toEqual(0)
			expect(getCompletedTodos(state).length).toEqual(0)
			expect(getTodosCount(state)).toEqual(0)
		})

		it('can filter:COMPLETED todos', () => {
			// set the filter to: COMPLETED todos
			//...
			state = store.getState()
			expect(getVisibleTodos(state).length).toEqual(0)
			expect(getActiveTodos(state).length).toEqual(4)
			expect(getTodosCount(state)).toEqual(4)

			store.dispatch(markTodo(0))
			state = store.getState()
			expect(getVisibleTodos(state).length).toEqual(1)
			expect(getActiveTodos(state).length).toEqual(3)
			expect(getTodosCount(state)).toEqual(4)

			store.dispatch(markAll())
			state = store.getState()
			expect(getVisibleTodos(state).length).toEqual(4)
			expect(getActiveTodos(state).length).toEqual(0)
			expect(getTodosCount(state)).toEqual(4)

			store.dispatch(clearMarked())
			state = store.getState()
			expect(getVisibleTodos(state).length).toEqual(0)
			expect(getActiveTodos(state).length).toEqual(0)
			expect(getTodosCount(state)).toEqual(0)
		})
	})

	//==============================================================
	// part 3. implementing async action creators (thunk middleware)

	describe('async actions', () => {
		// write function: `fetchTodo(id)` which dispatches action objects
		// for 3 scenarios - request: started, succeeded, failed.
		// use API.getTodoById(id) in order to fetch a Todo
		// tip: use thunk middleware (adapt store configur`ation)

		it('can dispatch functions with promises', (done) => {
			const id = "a41d05d1-9c42-4772-948d-5c9472ad5a73"
			store.dispatch(fetchTodo(id))
				.then(() => expect(getTodosCount(store.getState())).toBe(1))
				.then(done)
		})

		it('can dispatch promises sequentially', (done) => {
			const id = "a41d05d1-9c42-4772-948d-5c9472ad5a73"
			const nextId = "0c734274-3e17-44f7-ac70-fab461b55d03"
			store.dispatch(fetchTodo(id))
				.then(() => store.dispatch(fetchTodo(nextId)))
				.then(() => expect(getTodosCount(store.getState())).toBe(2))
				.then(done)
		})
	})
})
