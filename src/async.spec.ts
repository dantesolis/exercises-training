describe('Asynchronous Tests', () => {

	let GracefulClosingSpy: Function;

	beforeEach(() => {
		GracefulClosingSpy = jasmine.createSpy('GracefulClosingSpy');
	})

	afterEach(() => {
		expect(GracefulClosingSpy).toHaveBeenCalled();
	})

	// All tests below have correct assertions. However, they're set as async tests
	// (note the `done` parameter of `it` callback). The test runner injects a function
	// into the `done` param, calling it finishes the current `it` test. If `done` is
	// present (test is async), but doesn't get called, the test runner doesn't know
	// when to consider the test finished. That's a bug!

	// Call the `done` function _after_ the assertion check and spy call (this ensures
	// that done is called asynchronously and NOT synchronously)

	it('finish gracefully if setTimeout callback calls `done` explicitly', (done) => {
		let ok = false;
		setTimeout(() => {
			ok = true;
			expect(ok).toBe(true);
			GracefulClosingSpy();
		}, 1000);
	})

	const resolveDelay = (value: any, delay: number) => new Promise((res, rej) => {
		setTimeout(() => res(value), delay);
	});

	it('finish gracefully if Promise callback calls `done` explicitly', (done) => {
		resolveDelay(false, 1000)
			.then(value => true)
			.then(value => {
				expect(value).toBe(true);
				GracefulClosingSpy();
			})
	})
})
