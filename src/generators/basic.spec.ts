describe('generators', () => {

  // define StringIterator datatype here

  it('should yield values and terminate', () => {
    function* reciteHamletPrinceOfDenmark(): StringIterator {
      yield "to"
      yield "be"
      yield "or"
      yield "not"
      yield "to"
      yield "be"
    }

    const hamlet = reciteHamletPrinceOfDenmark()

    expect(hamlet.next().value).toBe(/* YOUR ANSWER */)
    expect(hamlet.next().value).toBe(/* YOUR ANSWER */)
    expect(hamlet.next().value).toBe(/* YOUR ANSWER */)
    expect(hamlet.next().value).toBe(/* YOUR ANSWER */)
    expect(hamlet.next().value).toBe(/* YOUR ANSWER */)
    expect(hamlet.next().value).toBe(/* YOUR ANSWER */)
    expect(hamlet.next().value).toBe(/* YOUR ANSWER */)
  })

  // define NumberIterator datatype here

  it('should yield objects with value and done properties', () => {
    function* oddNumbers(): NumberIterator {
      yield 1
      yield 3
      yield 5
      yield 7
      yield 9
    }

    const odds = oddNumbers()

    expect(odds.next().value).toBe(/* YOUR ANSWER */)
    expect(odds.next().value).toBe(/* YOUR ANSWER */)
    expect(odds.next().done).toBe(/* YOUR ANSWER */)
    odds.next()
    expect(odds.next().value).toBe(/* YOUR ANSWER */)
    expect(odds.next().done).toBe(/* YOUR ANSWER */)
  })

  it('can be iterated over', () => {
    function* evenNumbers(): NumberIterator {
      yield 2
      yield 4
      yield 6
      yield 8
    }

    let sum = 0
    for (let even of evenNumbers()) {
      sum = sum + even
    }

    expect(sum).toBe(/* YOUR ANSWER */)
  })

  it('can accept values from outside', () => {
    function* fibonacci(): NumberIterator {
      var fn1 = 0;
      var fn2 = 1;
      while (true){
        var current = fn1;
        fn1 = fn2;
        fn2 = current + fn1;
        var reset = yield current;
        if (reset){
            fn1 = 0;
            fn2 = 1;
        }
      }
    }

    var fib = fibonacci()

    expect(fib.next().value).toBe(/* YOUR ANSWER */)
    expect(fib.next().value).toBe(/* YOUR ANSWER */)
    expect(fib.next().value).toBe(/* YOUR ANSWER */)
    expect(fib.next().done).toBe(/* YOUR ANSWER */)
    fib.next()
    expect(fib.next().value).toBe(/* YOUR ANSWER */)
    expect(fib.next().value).toBe(/* YOUR ANSWER */)
    expect(fib.next(true).done).toBe(/* YOUR ANSWER */)
    expect(fib.next().value).toBe(/* YOUR ANSWER */)
    fib.next()
    expect(fib.next(false).value).toBe(/* YOUR ANSWER */)
    expect(fib.next(undefined).value).toBe(/* YOUR ANSWER */)
    expect(fib.next("training hell yeah!").value).toBe(/* YOUR ANSWER */)
    expect(fib.next().done).toBe(/* YOUR ANSWER */)
  })
})
