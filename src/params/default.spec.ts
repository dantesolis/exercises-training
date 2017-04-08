describe('default parameters', () => {

  it('can be triggered when the incoming argument is undefined', () => {
    function shoot(name = 'Steve') {
      return name
    }

    expect(shoot('Chris')).toBe(/* YOUR ANSWER */)
    expect(shoot(undefined)).toBe(/* YOUR ANSWER */)
    expect(shoot(null)).toBe(/* YOUR ANSWER */)
    expect(shoot()).toBe(/* YOUR ANSWER */)
  })

  it('are not included in arguments', () => {
    function shoot(name = 'Steve') {
      return arguments.length
    }

    expect(shoot('Chris')).toBe(/* YOUR ANSWER */)
    expect(shoot(null)).toBe(/* YOUR ANSWER */)
    expect(shoot()).toBe(/* YOUR ANSWER */)
  })

  it('can trigger a function call', () => {
    let triggerCount = 0

    function shoot(name = getDefault()) {
      return name
    }

    function getDefault() {
      triggerCount++
      return 'Steve'
    }

    expect(triggerCount).toBe(/* YOUR ANSWER */)
    expect(shoot('Chris')).toBe(/* YOUR ANSWER */)
    expect(shoot()).toBe(/* YOUR ANSWER */)
    expect(shoot(undefined)).toBe(/* YOUR ANSWER */)
    expect(triggerCount).toBe(/* YOUR ANSWER */)
  })

  it('can default all arguments, optionally', () => {
    // Modify the method signature of `myFunction` to allow for all args to be optional

    function myFunction({name, age, favoriteBand}) {
      expect(name).toBeDefined()
      expect(age).toBeDefined()
      expect(favoriteBand).toBeDefined()
    }

    myFunction({name: 'John', age: 40, favoriteBand: 'The Beatles'})
    myFunction({name: 'John', age: 40})
    myFunction({name: 'John'})
    myFunction({})
    myFunction()
  })

})
