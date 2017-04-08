import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from './constants'

// The task here is to implement 4 selectors (in the `selectors` file nearby) and make tests pass:
// - getTodosCount, getVisibleTodos, getActiveTodos, getCompletedTodos

describe('Redux TodoMVC Selectors', () => {

    const todosOfPaul = [{
        id: 0,
        marked: false,
        text: 'buy milk'
    }, {
        id: 1,
        marked: true,
        text: 'eat pizza'
    }, {
        id: 2,
        marked: true,
        text: 'play Mozart'
    }, {
        id: 3,
        marked: true,
        text: 'read Vaughn Vernon'
    }];

    const todosOfJohn = [{
        id: 0,
        marked: true,
        text: 'get born in Liverpool'
    }, {
        id: 1,
        marked: true,
        text: 'learn to play guitar'
    }, {
        id: 2,
        marked: true,
        text: 'leave your band, go solo'
    }, {
        id: 3,
        marked: true,
        text: 'marry Yōko Ono'
    }, {
        id: 4,
        marked: true,
        text: 'get killed in New York'
    }, {
        id: 5,
        marked: false,
        text: 'record a film'
    }];

    it('getTodosCount selector works', () => {
		expect(getTodosCount({
            todos: todosOfPaul,
            filter: FILTER_ALL
        })).toEqual(4)

        expect(getTodosCount({
            todos: todosOfPaul,
            filter: FILTER_ACTIVE
        })).toEqual(4)

        expect(getTodosCount({
            todos: todosOfPaul,
            filter: FILTER_COMPLETED
        })).toEqual(4)

        expect(getTodosCount({
            todos: todosOfJohn,
            filter: FILTER_ALL
        })).toEqual(6)

        expect(getTodosCount({
            todos: todosOfJohn,
            filter: FILTER_ACTIVE
        })).toEqual(6)

        expect(getTodosCount({
            todos: todosOfJohn,
            filter: FILTER_COMPLETED
        })).toEqual(6)
	})

    it('getVisibleTodos selector works', () => {
        expect(getVisibleTodos({
            todos: todosOfPaul,
            filter: FILTER_ALL
        }).length).toEqual(4)

        expect(getVisibleTodos({
            todos: todosOfPaul,
            filter: FILTER_ACTIVE
        }).length).toEqual(1)

        expect(getVisibleTodos({
            todos: todosOfPaul,
            filter: FILTER_COMPLETED
        }).length).toEqual(3)

        expect(getVisibleTodos({
            todos: todosOfJohn,
            filter: FILTER_ALL
        }).length).toEqual(6)

        expect(getVisibleTodos({
            todos: todosOfJohn,
            filter: FILTER_ACTIVE
        }).length).toEqual(1)

        expect(getVisibleTodos({
            todos: todosOfJohn,
            filter: FILTER_COMPLETED
        }).length).toEqual(5)
	})

    it('getActiveTodos selector works', () => {
        expect(getActiveTodos({
            todos: todosOfPaul,
            filter: FILTER_ALL
        }).length).toEqual(1)

        expect(getActiveTodos({
            todos: todosOfPaul,
            filter: FILTER_ACTIVE
        }).length).toEqual(1)

        expect(getActiveTodos({
            todos: todosOfPaul,
            filter: FILTER_COMPLETED
        }).length).toEqual(1)

        expect(getActiveTodos({
            todos: todosOfJohn,
            filter: FILTER_ALL
        }).length).toEqual(1)

        expect(getActiveTodos({
            todos: todosOfJohn,
            filter: FILTER_ACTIVE
        }).length).toEqual(1)

        expect(getActiveTodos({
            todos: todosOfJohn,
            filter: FILTER_COMPLETED
        }).length).toEqual(1)
    })

    it('getCompletedTodos selector works', () => {
        expect(getCompletedTodos({
            todos: todosOfPaul,
            filter: FILTER_ALL
        }).length).toEqual(3)

        expect(getCompletedTodos({
            todos: todosOfPaul,
            filter: FILTER_ACTIVE
        }).length).toEqual(3)

        expect(getCompletedTodos({
            todos: todosOfPaul,
            filter: FILTER_COMPLETED
        }).length).toEqual(3)

        expect(getCompletedTodos({
            todos: todosOfJohn,
            filter: FILTER_ALL
        }).length).toEqual(5)

        expect(getCompletedTodos({
            todos: todosOfJohn,
            filter: FILTER_ACTIVE
        }).length).toEqual(5)

        expect(getCompletedTodos({
            todos: todosOfJohn,
            filter: FILTER_COMPLETED
        }).length).toEqual(5)
	})
})
