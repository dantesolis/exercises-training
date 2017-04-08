import { ADD_TODO, DELETE_TODO, EDIT_TODO, MARK_TODO, MARK_ALL, CLEAR_MARKED, SET_FILTER } from './constants'

export const addTodo = (text) => ({
	type: ADD_TODO,
	text
})

export const deleteTodo = (id) => ({
	type: DELETE_TODO,
	id
})

export const editTodo = (id, text) => ({
	type: EDIT_TODO,
	id,
	text
})

export const markTodo = (id) => ({
	type: MARK_TODO,
	id
})

export const markAll = () => ({
	type: MARK_ALL
})

export const clearMarked = () => ({
	type: CLEAR_MARKED
})
