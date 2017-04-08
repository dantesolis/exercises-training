// IMPORTANT (!)
// use reducers in all tasks
// don't use FOR loops
import { shoppingData, ShoppingItemWithId } from '../../data/data-shopping';

describe('Reducers', () => {
	it('can accumulate a collection down to a single value', () => {
		// (!) FIND A BUG, fix it to make the test pass

		// calculate total cost of above shopping cart
		let totalPrice = shoppingData.reduce((total, item) => {
			return total += item.qty * item.price;
		});

		expect(totalPrice).toEqual(159.45);
	});

	it('can split one big collection into smaller grouped collections', () => {
		// group all items by type; each type should have its own sub-collection (array)
		// the top-level should be a key-value structure
		let groupedAggregate;

		expect(groupedAggregate.Clothes.length).toEqual(4);
		expect(groupedAggregate.Music.length).toEqual(3);
		expect(groupedAggregate.Food.length).toEqual(3);
	});

	it('can also apply calculations to grouped items', () => {
		// same as above, we'll group items by type
		// but instead of putting them in per-type arrays, we want to calculate
		// the total price (item price times quantity) of all products that belong to a group
		// the final result should state: for this group, the total price equals x
		let priceAggregate;

		expect(priceAggregate.Clothes).toEqual(63.6);
		expect(priceAggregate.Music).toEqual(30.75);
		expect(priceAggregate.Food).toEqual(65.1);
	});

	it('can perform further operations on grouped items', () => {
		// same as above, we'll group items by type
		// but this time, for each group, we want to find the maximum total price of a given item
		// where total price is: item price times quantity
		let maxPriceAggregate;

		expect(maxPriceAggregate).toEqual({Clothes: 46.0, Music: 11.90, Food: 33.6});
	});

	describe('logical reducers', () => {
		// define a common type for all functions below

		let isEven = n => n % 2 === 0;
		let isOdd = n => n % 2 === 1;
		let isGT10 = n => n > 10;
		let isLT1000 = n => n < 1000;
		let isBetween20And50 = n => n >= 20 && n <= 50;
		let isPositive = n => n > 0;
		let isNegative = n => n < 0;

		it('can check if all predicates are truthy', () => {
			// write the function `allTruthy` that will check if
			// 1. for a given value
			// 2. all predicates are truthy (all functions for this value return true) 

			// function allTruthy(value, predicates)...

			expect(allTruthy(0, [isEven, isLT1000])).toBe(true);
			expect(allTruthy(25, [isOdd, isGT10, isNegative])).toBe(false);
			expect(allTruthy(32, [isOdd, isBetween20And50, isLT1000])).toBe(false);
			expect(allTruthy(-1, [isEven, isOdd, isNegative])).toBe(false);
			expect(allTruthy(-1, [isNegative])).toBe(true);
		});

		it('can check if any predicate is truthy', () => {
			// write the function `anyTruthy` that will check if
			// 1. for a given value
			// 2. at least one predicates is truthy (at least one function returns true for this value) 

			// function anyTruthy(value, predicates)...

			expect(anyTruthy(0, [isOdd, isNegative])).toBe(false);
			expect(anyTruthy(25, [isEven, isBetween20And50, isNegative])).toBe(true);
			expect(anyTruthy(32, [isEven, isBetween20And50, isLT1000])).toBe(true);
			expect(anyTruthy(-1, [isEven, isBetween20And50, isPositive])).toBe(false);
			expect(anyTruthy(-1, [isNegative])).toBe(true);
		});
	});

	it('sequential processing via function pipe', () => {
		// start - is a starting value
		// operations - is a sequence of operations, output of step n is an input of step n+1
		// write the execute function which accepts function sequence and the starting value
		// and returns the value processed by piping via function sequence

		// don't use FOR loops

		// function execute...

		var start = 2;
		var operations = [
			function(a){ return 8 * a - 10; },
			function(a){ return (a - 3) * (a - 3) * (a - 3); },
			function(a){ return a * a + 4; },
			function(a){ return a % 5; }
		];
		var result = execute(operations, start);
		expect(result).toEqual(3);

		var start = 5;
		var operations = [
			function(a){ return (a - 3) * (a - 3) * (a - 3); },
			function(a){ return 8 * a - 10; },
			function(a){ return a * a + 4; }
		];
		var result = execute(operations, start);
		expect(result).toEqual(2920);
	});
});
