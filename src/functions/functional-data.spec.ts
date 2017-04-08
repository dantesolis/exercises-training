import db from '../../data/data';

describe('Functional programming', function(){
	// database is defined in data/data.js file
	var employees = db.getEmployees();

	describe('Processing data simple scenario', function(){

		it('is possible using for loop, yet inconvenient', function(){
			// calculate total amount of bonus
			// given to all employees with nationality equal "DE"
			// whose salary is below 5000
			// where bonus equals 20% of the salary

			// use FOR loops
			var totalBonus;
			// for(...; ...; ...)

			expect(totalBonus).toEqual(17964);
		});

		it('is more readable and more convenient using functional programming', function(){
			// calculate total amount of bonus
			// given to all employees with nationality equal "DE"
			// whose salary is below 5000
			// where bonus equals 20% of the salary

			// use functional programming, assign step by step
			var employeesDE; // = employees.doSomething(...)
			var employeesWithSalaryLessThan5000; // = employeesDE.doSomething(...)
			var totalBonus; // = employeesWithSalaryLessThan5000.doSomething(...)

			expect(employeesDE.length).toEqual(62);
			expect(employeesWithSalaryLessThan5000.length).toEqual(29);
			expect(totalBonus).toEqual(17964);
		});

		it('is even better using chaining', function(){
			// do the same as above, but don't use intermediate variables
			// process all steps and assign to final variable

			// use functional programming
			var totalBonus;
			// = employees
			// .filter(...)
			// .map(...)
			// .reduce(...)

			expect(totalBonus).toEqual(17964);
		});

	});

	it('makes it easy to filter data by condition', function(){
		// fetch the employee with ID 9451
		var employee9451;

		expect(employee9451.id).toEqual(9451);
		expect(employee9451.address.city).toEqual("Port Bentonshireland");
		expect(employee9451.phone).toEqual("1-139-794-6794");

		// fetch a employee with nationality US
		var USEmployee;

		expect(USEmployee.nationality).toEqual("US");
	});

	it('makes it easy to filter data by condition', function(){
		// fetch all employees with nationality DE only
		var DEEmployees;

		expect(DEEmployees.length).toEqual(62);
		expect(DEEmployees[19].name).toEqual("Ari Raynor");
		expect(DEEmployees[38].name).toEqual("Jacey Halvorson");

		// fetch all employees with gmail.com email domain only
		var GmailEmployees;

		expect(GmailEmployees.length).toEqual(135);
		expect(GmailEmployees[19].name).toEqual("Kallie Quigley");
		expect(GmailEmployees[39].name).toEqual("Caterina Cruickshank III");
	});

	it('makes it easy to sort data by condition', function(){
		// sort employees by descending salary
		var RichestEmployees;

		expect(RichestEmployees.length).toEqual(365);
		expect(RichestEmployees[0].salary).toEqual(9960);
		expect(RichestEmployees[2].salary).toEqual(9920);
		expect(RichestEmployees[66].salary).toEqual(8280);
		expect(RichestEmployees[116].salary).toEqual(7130);

		// sort employees by ascending salary
		var PoorestEmployees;

		expect(PoorestEmployees.length).toEqual(365);
		expect(PoorestEmployees[0].salary).toEqual(1010);
		expect(PoorestEmployees[2].salary).toEqual(1140);
		expect(PoorestEmployees[66].salary).toEqual(2770);
		expect(PoorestEmployees[116].salary).toEqual(3960);
	});

	it('makes it easy to modify entire collections', function(){
		// grab all telephone numbers of all employees without modifying the order
		var EmployeePhoneNumbers;

		expect(EmployeePhoneNumbers.length).toEqual(365);
		expect(EmployeePhoneNumbers[8]).toEqual("1-415-304-0824");
		expect(EmployeePhoneNumbers[31]).toEqual("286.336.5409 x035");
		expect(EmployeePhoneNumbers[92]).toEqual("595.794.3113 x870");
		expect(EmployeePhoneNumbers[109]).toEqual("1-727-541-7250 x26689");
	});

	it('makes it easy to search for single objects', function(){
		// fetch the phone to the richest employee who is American
		// or (gives the same result in this case)
		// fetch the phone to the richest American
		var maxSalary;

		expect(RichestUSEmployeePhone).toEqual("794-226-3531 x810");
	});

});
