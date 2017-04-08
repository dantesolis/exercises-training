import { shoppingData } from '../../data/data-shopping';

describe('arrow functions', () => {

	it('can replace simple traditional functions', () => {
		// Write two functions that take two parameters and return their sum
		// 'fnAdd' - as a regular function
		// 'arrowAdd' - as an arrow function

		let fnAdd, arrowAdd;

		expect(fnAdd.length).toBe(2);
		expect(arrowAdd.length).toBe(2);
		expect(fnAdd(3, 3)).toBe(arrowAdd(3, 3));
	});

	describe('are great for defining simple calculations', () => {
		// Write following lambda functions, performing subtraction, multiplication and division

		let arrowSub, arrowMul, arrowDiv;

		it('subtracts numbers correctly', () => {
			expect(arrowSub(20, -15)).toEqual(35)
			expect(arrowSub.length).toBe(2);
		})

		it('multiplies numbers correctly', () => {
			expect(arrowMul(10.2, 5)).toEqual(51)
			expect(arrowMul.length).toBe(2);
		})

		it('divides numbers correctly', () => {
			expect(arrowDiv(546, 39)).toEqual(14)
			expect(arrowDiv.length).toBe(2);
		})
	})

	it('can replace complex traditional functions', () => {
		// Write two functions that implement Fibonacci sequence
		// 'fnFib' - as a regular function
		// 'arrowFib' - as an arrow function, try NOT to use curly brackets {}
		// Fibonacci sequence:
		// 0, for x = 0
		// 1, for x = 1
		// fib(x-1) + fib(x-2), for x > 1

		let fnFib, arrowFib;

		[fnFib, arrowFib].forEach(function(fn){
			expect(fn(0)).toBe(0);
			expect(fn(1)).toBe(1);
			expect(fn(5)).toBe(5);
			expect(fn(10)).toBe(55);
			expect(fn(15)).toBe(610);
		});
		expect(fnFib.length).toBe(1);
		expect(arrowFib.length).toBe(1);
	});

	it('binds `this` to the eval scope, not the runtime scope', () => {
		// console.log is being spied not to pollute output for other tests
		spyOn(console, 'log');

		// Change the person object.
		// One of the functions should become an arrow to allow for 'this' to retain context correctly
		const person = {
			name: 'Jarosław',
			greetFriends: function(friends) {
				friends.forEach(function(friend) {
					console.log(this.name + ' greets to ' + friend)
				})
			},
		}

		const friendsArray = ['Antoni', 'Andrzej', 'Krystyna', 'Wiktor']

		expect(() => person.greetFriends(friendsArray)).not.toThrow()
		expect(console.log).toHaveBeenCalledWith('Jarosław greets to Antoni');
		expect(console.log).toHaveBeenCalledWith('Jarosław greets to Andrzej');
		expect(console.log).toHaveBeenCalledWith('Jarosław greets to Krystyna');
		expect(console.log).toHaveBeenCalledWith('Jarosław greets to Wiktor');
	})

	it('can return objects', () => {
		// define following as arrow functions
		// look out for object literal syntax in arrow functions!
		let makePerson;

		expect(makePerson('John', 'Lennon')).toEqual({first: 'John', last: 'Lennon'})
		expect(makePerson('Paul', 'McCartney')).toEqual({first: 'Paul', last: 'McCartney'})
	})

	it('are great for currying', () => {
		// define following functions:
		// adder as arrow function (it stores first parameter in a closure and return a function accepting second parameter)
		// add5 and minus10 as `adder` calls (curried functions, they actually accept the second parameter and perform actual add)
		let adder, add5, minus10;

		expect(add5(4)).toBe(9)
		expect(add5(-4)).toBe(1)
		expect(add5(3.5)).toBe(8.5)
		expect(add5(400)).toBe(405)
		expect(minus10(4)).toBe(-6)
		expect(minus10(-4)).toBe(-14)
		expect(minus10(3.5)).toBe(-6.5)
		expect(minus10(400)).toBe(390)

		expect(typeof adder).toBe("function");
		expect(adder.length).toBe(1);
		expect(typeof add5).toBe("function");
		expect(add5.length).toBe(1);
		expect(typeof minus10).toBe("function");
		expect(minus10.length).toBe(1);
	})

	it('can make array filter chains more managable', () => {
		// REPLACE ALL REGULAR FUNCTION WITH ARROW FUNCTIONS
		const shoppingList = shoppingData
			.filter(/* function(d) {
				return d.type != 'Clothes'
			} */) // Remove Clothes
			.filter(/* function(d) {
				return	d.price < 5
			} */) // Find only remaining items with price < 5
			.sort(/* function(a, b) {
				return b.price * b.qty - a.price * a.qty
			} */) // Sort by total price, desc
			.map(/* function(d) {
				return d.name
			} */) // Pull just the name from each item

		expect(shoppingList.shift()).toBe('Beer')
		expect(shoppingList.shift()).toBe('Chips')
	})

})
