import API from '../../data/api';
import { async } from '../../data/async';

import { Employee, Nationality } from '../../data/data';

describe('coroutines', () => {

	// consider examples from promises/api.spec.js file

	// define EmployeeListCoroutine datatype here
	// note, that a coroutine is a function, that returns a promise of a given type

	it('should perform asynchronous calls sequentially', (done) => {
		// write a coroutine which will request data of 4 employees SEQUENTIALLY (when one finished,
		// request another one) and return list of these 4 employees to make `expect` calls pass
		// find appropriate employees in src/data.js file

		function* fetchEmployees(){
			// coroutine body
		}

		const fetchEmployeesCoroutine: EmployeeListCoroutine = async(fetchEmployees);
		fetchEmployeesCoroutine().then(result => {
			expect(result[0].name).toBe("Ms. Melisa Dooley")
			expect(result[1].address.city).toBe("West East Adelinefurt")
			expect(result[2].name).toBe("Maxie Windler")
			expect(result[3].phone).toBe("(073) 255-0190")
			done();
		});
	})

	it('should perform asynchronous calls sequentially using for..of loop', (done) => {
		function* fetchEmployees(...ids: number[]){
			// coroutine body
		}

		const fetchEmployeesCoroutine: EmployeeListCoroutine = async(fetchEmployees);
		fetchEmployeesCoroutine(id1, id2, id3, id4 /* put IDs here */)
			.then(result => {
				expect(result[0].name).toBe("Ms. Melisa Dooley")
				expect(result[1].address.city).toBe("West East Adelinefurt")
				expect(result[2].name).toBe("Maxie Windler")
				expect(result[3].phone).toBe("(073) 255-0190")
				done();
			});
	})

	it('should perform asynchronous calls simultaneously', (done) => {
		// write a coroutine which will request data of 4 employees SIMULTANEOUSLY (all at the same time)
		// and return list of these 4 employees to make `expect` calls pass
		// the data expectations are the same as in previous exercise

		function* fetchEmployees(){
			// coroutine body
		}

		const fetchEmployeesCoroutine: EmployeeListCoroutine = async(fetchEmployees);
		fetchEmployeesCoroutine().then(result => {
			expect(result[0].name).toBe("Ms. Melisa Dooley")
			expect(result[1].address.city).toBe("West East Adelinefurt")
			expect(result[2].name).toBe("Maxie Windler")
			expect(result[3].phone).toBe("(073) 255-0190")
			done();
		});
	})

	// define NationalSalaryCoroutine datatype here

	it('should perform a simple business domain scenario', (done) => {
		// write a coroutine which will calculate and return total salaries of employees filtered by nationality

		function* getTotalNationalSalary(nationality: Nationality){
			// coroutine body
		}

		const getNationalSalaryCoroutine: NationalSalaryCoroutine = async(getTotalNationalSalary);
		Promise.all([
			getNationalSalaryCoroutine("UK"),
			getNationalSalaryCoroutine("US"),
			getNationalSalaryCoroutine("FR"),
			getNationalSalaryCoroutine("DE")
		]).then(salaries => {
			let [UK, US, FR, DE] = salaries
			expect(UK).toBe(213080)
			expect(US).toBe(335580)
			expect(FR).toBe(267800)
			expect(DE).toBe(334910)
			done();
		});
	})

	// define CountrySalariesCoroutine datatype here

	it('should perform a complex business domain scenario', (done) => {
		// similarly to the previous exercise write a coroutine which will
		// calculate and return total salaries of employees of all nationalities
		// available in the system
		// the response should be a map: { UK: amount, US: amount, ...}

		function* getTotalSalariesByNationality(){
			// coroutine body
		}

		const getTotalSalariesByNationalityCoroutine: CountrySalariesCoroutine = async(getTotalSalariesByNationality);
		getTotalSalariesByNationalityCoroutine().then(salaries => {
			let { US, UK, DE, FR } = salaries
			expect(UK).toBe(213080)
			expect(US).toBe(335580)
			expect(FR).toBe(267800)
			expect(DE).toBe(334910)
			done();
		});
	})
})
