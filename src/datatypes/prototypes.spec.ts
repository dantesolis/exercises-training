describe('Prototypes', () => {

	describe('constructors', () => {
		// define your answers to make tests pass

		it('can be used to produce objects', () => {
			function Person(first, last, age?){
				this.first = first;
				this.last = last;
				if (age){
					this.age = age;
				}
			}
			Person.prototype.age = 18;

			var paul = new Person("Paul", "McCartney");
			var john = new Person("John", "Lennon", 40);

			expect(paul.age).toEqual( /* YOUR ANSWER HERE */ );
			expect(john.age).toEqual( /* YOUR ANSWER HERE */ );

			Person.prototype.age = 23;

			expect(paul.age).toEqual( /* YOUR ANSWER HERE */ );
			expect(john.age).toEqual( /* YOUR ANSWER HERE */ );
		});
	});

	describe('extensions', () => {
		it('can provide additional features', () => {

			// Array.prototype.min and Array.prototype.max
			// prototype methods don't exist. Create them, using Math.min/max

			expect([3,6,9].map(e => e * 2).min()).toEqual(6);
			expect([3,6,9].map(e => e * 2).max()).toEqual(18);
			expect([4, 5, 6, 7, 8, 9].map(e => Math.sqrt(e)).min()).toEqual(2);
			expect([4, 5, 6, 7, 8, 9].map(e => Math.sqrt(e)).max()).toEqual(3);

			// IMPORTANT (!)
			// you should not extend prototypes in your project
			// this exercise only checks your understanding of prototypal inheritance in JS
		});
	});
});
