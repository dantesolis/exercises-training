describe('Closures', function(){

	it('can hold private data - incrementer', function(){
		// write incrementer function below
		// each `incrementer` call returns a function which, when called, increments the counter with +1 and returns the new value
		// the initial value of the counter is 0
		// the value itself is not directly accessible from the outside

		// define incrementer function here
		// try to define function signature

		var inc1 = incrementer();
		expect(inc1()).toEqual(1);
		expect(inc1()).toEqual(2);
		expect(inc1()).toEqual(3);
		var inc2 = incrementer();
		expect(inc2()).toEqual(1);
		expect(inc2()).toEqual(2);
		expect(inc2()).toEqual(3);
		expect(inc2()).toEqual(4);
	});

	it('can hold private data - counter', function(){
		// write counter function below
		// each `counter` call returns an object with 2 functions, inc and dec
		// `inc`, when called, acts as `incrementer` above
		// `dec` does the same job with -1
		// the initial value of the counter is 0, same as in previous exercise
		// the value itself is not directly accessible from the outside

		// define counter function here
		// try to define function signature

		var c1 = counter();
		expect(c1.inc()).toEqual(1);
		expect(c1.inc()).toEqual(2);
		expect(c1.inc()).toEqual(3);
		expect(c1.dec()).toEqual(2);
		expect(c1.dec()).toEqual(1);

		var c2 = counter();
		expect(c2.dec()).toEqual(-1);
		expect(c2.dec()).toEqual(-2);
	});

	it('can encapsulate domain logic', function(){
		// write finanseStorage function which will hold information about personal finanseStorage
		// it will store all incomes and outcomes (numbers),
		// each separately added via `saveIncome`/`saveOutcome` method.
		// `getBalance` method subtracts all outcomes from all incomes

		// define finanseStorage function here
		// try to define function signature

		var f1 = finanseStorage();
		expect(f1.getBalance()).toEqual(0);
		f1.saveIncome(1500);
		f1.saveIncome(525);
		expect(f1.getBalance()).toEqual(2025);
		f1.saveIncome(300);
		expect(f1.getBalance()).toEqual(2325);
		f1.saveOutcome(599.99);
		expect(f1.getBalance()).toEqual(1725.01);
		f1.saveOutcome(49.99);
		f1.saveOutcome(824.91);
		f1.saveOutcome(174.4);
		expect(f1.getBalance()).toEqual(675.71);

		var f2 = finanseStorage();
		expect(f2.getBalance()).toEqual(0);
		f2.saveIncome(1000);
		f2.saveOutcome(29.99);
		f2.saveOutcome(718.85);
		f2.saveIncome(150);
		expect(f2.getBalance()).toEqual(401.16);
		f2.saveOutcome(396.81);
		f2.saveIncome(72);
		expect(f2.getBalance()).toEqual(76.35);
	});

});
