interface Array<T> {
	min(): T;
	max(): T;
}

// @types/promise.prototype.finally
(<any>Promise.prototype).finally = function(cb){
	this.then(cb).catch(cb);
}

// own implementation
interface Promise<T> {
	tap(onTap: (value: T) => void): Promise<T>;
}

(<any>Promise.prototype).tap = function<T>(cb: Function){
	return this.then(function(value: T): T | Promise<T> {
		cb(value);
		return value;
	})
}

declare namespace jasmine {
	interface Matchers<T> {
		toEqualJSON(expected: T, expectationFailOutput?: any): boolean;
	}
}
