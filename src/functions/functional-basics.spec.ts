import { customMatchers } from '../matchers';

describe('Functional programming', function(){

	var list3 = [3, 6, 12, 24, 36, 39, 51, 63];
	var list5 = [5, 15, 30, 40, 45, 55, 105];

	it('simple operations on primitives collection', () => {
		// use .map function on arrays to make tests pass
		// define multiplyBy3 and multiplyBy5 functions
		// and use them along with .map

		// code should look like: collection.map(fn)

		var multiplyBy3;
		var multiplyBy5;
		var list3times3;
		var list5times5;

		expect(typeof multiplyBy3).toEqual("function");
		expect(multiplyBy3.length).toEqual(1);
		expect(multiplyBy3(3)).toEqual(9);
		expect(typeof multiplyBy5).toEqual("function");
		expect(multiplyBy5.length).toEqual(1);
		expect(multiplyBy5(5)).toEqual(25);
		expect(list3times3).toEqual([9, 18, 36, 72, 108, 117, 153, 189]);
		expect(list5times5).toEqual([25, 75, 150, 200, 225, 275, 525]);

		// reuse functions from previous exercise

		// reuse multiplyBy3 and multiplyBy5 functions from above within .map
		// additionally, define isEven function that returns boolean whether a number is even
		// use it to filter only even numbers (remainder of dividing by 2 is 0) from result arrays

		// code should look like: collection.map(fn).filter(fn)

		var isEven;
		var list3times3filteredEven;
		var list5times5filteredEven;

		expect(typeof isEven).toEqual("function");
		expect(isEven.length).toEqual(1);
		expect(isEven(2016)).toEqual(true);
		expect(isEven(2017)).toEqual(false);
		expect(list3times3filteredEven).toEqual([18, 36, 72, 108]);
		expect(list5times5filteredEven).toEqual([150, 200]);

		// again, reuse functions from previous exercise
		// reuse multiplyBy3, multiplyBy5 and isEven functions from above
		// additionally, define sum function that will reduce a list into a single value
		// use the sum function to sum the lists of multiplied-and-then-filtered elements

		// code should look like: collection.map(fn).filter(fn).reduce(fn)

		var sum;
		var list3times3filteredEvenSum;
		var list5times5filteredEvenSum;

		expect(typeof sum).toEqual("function");
		expect(sum.length).toEqual(2);
		expect(sum(2016, 2017)).toEqual(4033);
		expect(list3times3filteredEvenSum).toEqual(234);
		expect(list5times5filteredEvenSum).toEqual(350);
	});

	it('reverses lists', function(){
		// reverse both arrays
		// but be careful - don't alter original arrays!

		var list3reversed;
		var list5reversed;

		expect(list3reversed).toEqual([63, 51, 39, 36, 24, 12, 6, 3]);
		expect(list3).toEqual([3, 6, 12, 24, 36, 39, 51, 63]);
		expect(list5reversed).toEqual([105, 55, 45, 40, 30, 15, 5]);
		expect(list5).toEqual([5, 15, 30, 40, 45, 55, 105]);
	});

	it('sequentially processes calculations', () => {
		let numbers = [2, 3, 8, 1, 33, 76, 13, 32, 13];
		// given above list of numbers, perform following calculations
		// - take all numbers to the power of 3
		// - summarize all the new elements which are odd (not even)
		let result; // = ...

		expect(result).toEqual(40359);
	});

	it('picks a single element (where .find does not apply)', () => {
		let numbers = [{"val":2},{"val":3},{"val":8},{"val":1},{"val":33},{"val":76},{"val":13},{"val":32},{"val":13}];
		// use .reduce to find maximal and minimal item from above array

		let maxValue; // = ...
		let minValue; // = ...

		expect(maxValue).toEqual({val: 76});
		expect(minValue).toEqual({val: 1});
	});

	describe('algorithms', () => {
		beforeEach(() => {
			jasmine.addMatchers(customMatchers);
		});

		it('gimmePairs function', () => {
			// write function `gimmePairs` which accepts dynamic number of parameters
			// and returns an array of all possible pairs

			let gimmePairs;

			expect(gimmePairs(1)).toEqualJSON([]);
			expect(gimmePairs(1, 2)).toEqualJSON([[1, 2]]);
			expect(gimmePairs(1, 2, 3)).toEqualJSON([[1, 2], [2, 3], [1, 3]]);
			expect(gimmePairs(1, 2, 3, 4)).toEqualJSON([[1, 2], [2, 3], [3, 4], [1, 3], [2, 4], [1, 4]]);
		});
	});
});
