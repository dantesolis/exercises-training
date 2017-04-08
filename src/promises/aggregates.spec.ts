// IMPORTANT NOTE: for the sake of these tests, Promise.prototype.finally has been added

describe('promise aggregates', () => {

  let logMemory;
  function log(...args){
    logMemory = logMemory.concat(args);
  }

  beforeEach(() => {
    logMemory = [];
  });

  interface TrainingPromise {
    // regular level:
    sequential<T>(values: (() => PromiseLike<T>)[]): Promise<T>;
    all<T>(values: PromiseLike<T>[]): Promise<T[]>;
    race<T>(values: PromiseLike<T>[]): Promise<T>;
    any<T>(values: PromiseLike<T>[]): Promise<T>;
    // advanced level (native definitions):
    // sequential<T>(values: Iterable<() => T | PromiseLike<T>>): Promise<T>;
    // all<T>(values: Iterable<T | PromiseLike<T>>): Promise<T[]>;
    // race<T>(values: Iterable<T | PromiseLike<T>>): Promise<T>;
    // any<T>(values: Iterable<T | PromiseLike<T>>): Promise<T>;
  }

  const TrainingPromise: TrainingPromise = <TrainingPromise>{};

  describe('TrainingPromise.sequential', () => {

    // This method is NOT covered within ES6 standard

    // The idea is to enforce that multiple promises would be executed sequentially
    // (n-th has to finish before n+1 th can start)
    // the result will be:
    // - a list of all values that each promise has resolved with
    // - a rejection reason of the first rejected promise (won't start upcoming promises)

    // (!) IMPORTANT: if we pass a list of promises as the function input
    // then they will be running in parallel already (having multiple promises
    // means they are already running) hence, we must *POSTPONE* the start
    // of a promise. In order to achieve that, we'll wrap starting/creating
    // a promise with a function. Hence, `sequentiall` will accept list of
    // functions that return promises as its input (instead of list of promises)

    // execution will look like this:
    // - first function is executed, a promise is returned
    // - no other function is called (no other promise is creates/started)
    // - when 1st promise (form 1st function) is fulfilled, 2nd function
    //   is called to create 2nd promise
    // - repeat...

    // define `sequential` here
    TrainingPromise.sequential;

    it('executes promises sequentially', (done) => {
      TrainingPromise.sequential([
        () => resolveDelay('f1', 300),
        () => resolveDelay('f2', 200),
        () => resolveDelay('f3', 100),
      ]).then(value => {
        expect(value).toEqual(['f1', 'f2', 'f3'])
        expect(logMemory).toEqual(['start:f1', 'fulfill:f1', 'start:f2', 'fulfill:f2', 'start:f3', 'fulfill:f3'])
      }).catch(fail)
      .finally(done)
    })

    it('rejects when first item is rejected', (done) => {
      TrainingPromise.sequential([
        () => resolveDelay('f1', 300),
        () => rejectDelay('s2', 200),
        () => resolveDelay('f3', 100),
      ]).then(fail)
      .catch(reason => {
        expect(reason).toEqual('s2')
        expect(logMemory).toEqual(['start:f1', 'fulfill:f1', 'start:s2', 'reject:s2'])
      }).finally(done)
    })
  })

  describe('TrainingPromise.race', () => {

    // define `race` here
    TrainingPromise.race;

    it('is resolved, if the first settled promise is resolved', (done) => {
      TrainingPromise.race([
        resolveDelay('s1', 100),
        rejectDelay('f1', 200)
      ]).then(value => {
        expect(value).toEqual('s1')
      }).catch(fail)
      .finally(done)
    })

    it('is rejected, if the first settled promise is rejected', (done) => {
      TrainingPromise.race([
        rejectDelay('f1', 100),
        resolveDelay('s1', 200)
      ]).then(fail)
      .catch(reason => {
        expect(reason).toEqual('f1')
      }).finally(done)
    })

    it('resolves with the value of the first promise that resolves', (done) => {
      TrainingPromise.race([
        resolveDelay('s1', 300),
        resolveDelay('s2', 100),
        resolveDelay('s3', 200),
      ]).then(value => {
        expect(value).toEqual('s2')
      }).catch(fail)
      .finally(done)
    })

    it('rejects with the reason of the first promise that rejects', (done) => {
      TrainingPromise.race([
        rejectDelay('f1', 300),
        rejectDelay('f2', 100),
        rejectDelay('f3', 200),
      ]).then(fail)
      .catch(reason => {
        expect(reason).toEqual('f2')
      }).finally(done)
    })
  })

  describe('TrainingPromise.all', () => {

    // define `all` here
    TrainingPromise.all;

    it('is resolved after all promises get resolved', (done) => {
      TrainingPromise.all([
        resolveDelay('s1', 100),
        resolveDelay('s2', 300),
        resolveDelay('s3', 200)
      ]).then(([v1, v2, v3]) => {
        expect(v1).toEqual('s1')
        expect(v2).toEqual('s2')
        expect(v3).toEqual('s3')
      }).catch(fail)
      .finally(done)
    })

    it('is rejected if at least one gets rejected', (done) => {
      TrainingPromise.all([
        resolveDelay('s1', 100),
        rejectDelay('f2', 300),
        resolveDelay('s3', 200)
      ]).then(fail)
      .catch(reason => {
        expect(reason).toEqual('f2')
      }).finally(done)
    })

  })

  describe('TrainingPromise.any', () => {

    // define `any` here
    TrainingPromise.any;

    it('resolves with the value of the first promise that resolves', (done) => {
      TrainingPromise.any([
        resolveDelay('s1', 300),
        rejectDelay('f1', 100),
        rejectDelay('f2', 200),
      ]).then(value => {
        expect(value).toEqual('s1')
      }).catch(fail)
      .finally(done)
    })

    it('rejects if all promises reject', (done) => {
      TrainingPromise.any([
        rejectDelay('f1', 300),
        rejectDelay('f2', 100),
        rejectDelay('f3', 200),
      ]).then(fail)
      .catch(([r1, r2, r3]) => {
        expect(r1).toEqual('f1')
        expect(r2).toEqual('f2')
        expect(r3).toEqual('f3')
      }).finally(done)
    })
  })
})
