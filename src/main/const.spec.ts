describe('const declarations', () => {

  it('cannot modify the value of a `const` variable', () => {
    // modify `var` below to a `const`
    // then you have to make the `const` unchaged (comment the changing line)

    var releaseName = 'ES6'
    releaseName = 'ES2015';

    expect(releaseName).toEqual('ES6')
  })

  it('are perfect for function declarations', () => {
    // modify `var` below to a `const`
    // implement a function to make the tests pass

    var myFn;

    expect(myFn()).toEqual('training')
  })

})
