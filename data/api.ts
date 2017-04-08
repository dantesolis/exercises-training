import db from './data'
import { Employee, Nationality, Todo } from './data';

const timeout = () => Math.random() * 100

const wrapWithPromise = <T>(fn: Function) =>
	(...args): Promise<T> => {
		return new Promise((resolve, reject) =>
			setTimeout(() => resolve(fn(...args)), timeout())
		)
	}

const getTodoById: (id: number) => Promise<Todo>
	= wrapWithPromise(db.getTodoById);

const getTodos: () => Promise<Todo[]>
	= wrapWithPromise(db.getTodos);

const getEmployee: (id: number) => Promise<Employee>
	= wrapWithPromise(db.getEmployeeById);

const getEmployeesByNationality: (nat: Nationality) => Promise<Employee[]>
	= wrapWithPromise(db.getEmployeesByNationality);

const getNationalities: () => Promise<Nationality[]>
	= wrapWithPromise(db.getNationalities)

export default {
    // getTodoById(id): thenable
    getTodoById,
    // getTodos(id): thenable
    getTodos,
	// getEmployee(id): thenable
	getEmployee,
	// getEmployeesByNationality(nationality): thenable
	getEmployeesByNationality,
	// getNationalities(): thenable
	getNationalities,
}
