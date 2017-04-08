describe('spread parameters', () => {

  it('should be able to call a function and spread the arguments', () => {
    const args = ['a', 'b', 'c']
    let calls = 0
    // call myFunction using the spread operator with args
    expect(calls).toBe(1)

    // In order to use spread with typescript, need to overload function/method signature
    // uncomment the line below - and/or ask the trainer what's going on here, if in doubt ;)
    // function myFunction(...args: string[]);
    function myFunction(a, b, c) {
      expect(a).toBe('a')
      expect(b).toBe('b')
      expect(c).toBe('c')
      calls++
    }
  })

  it('should be easier to concatenate arrays', () => {
    const array1 = [1, 2, 3]
    // create a result array that uses the spread operator to concatenate array1 with [4, 5, 6]
    expect(result).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('can clone arrays', () => {
    const array1 = [9, 8, 7, 6, 5, 4, 3, 2, 1]

    // create clone
    let array2;
    expect(array1 === array2).toBe(false)

    // sort clone
    let array3;
    expect(array1).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1])
    expect(array3).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])

    // add 10 and 0 to a clone
    let array4;
    expect(array4).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0])

    // immutable splice
    let array5;
    expect(array5).toEqual([6, 5, 4])
  })

})
