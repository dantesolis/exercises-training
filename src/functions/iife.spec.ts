describe('Immediately Invoked Function Expressions', () => {

	it("don't pollute global scope", () => {
		// the code below creates many temporary variables that pollute global scope
		// wrap the code below with an IIFE not to make those variables leak to the global scope
		// and assign its return value to `result` variable

		var result;

		// DON'T REMOVE FOLLOWING CODE // START
		var firstName = "John";
		var lastName = "Lennon";
		var john = {
			first: firstName,
			last: lastName
		};
		// DON'T REMOVE FOLLOWING CODE // END

		expect(result.first).toEqual('John');
		expect(result.last).toEqual('Lennon');

		try {
			firstName;
			fail('variable firstName should not exist');
		} catch (e){
			// do nothing
		}
		try {
			lastName;
			fail('variable lastName should not exist');
		} catch (e){
			// do nothing
		}
		try {
			john;
			fail('variable john should not exist');
		} catch (e){
			// do nothing
		}
	});

	it('can be used with closures to remember value at a time', () => {
		// the code below runs in a loop - it store functions that return a value and its square
		// currently it stores values from the last iteration multiple times 
		// use IIFE to store value from each iteration to make tests pass

		var list = [];
		for(var k = 0; k < 25; k += 2){
			list.push(function(){
				return [k, k*k];
			});
		}

		var result = list.map(function(fn){
			return fn();
		});
		expect(result).toEqual([[0,0],[2,4],[4,16],[6,36],[8,64],[10,100],[12,144],[14,196],[16,256],[18,324],[20,400],[22,484],[24,576]]);
	});

});
