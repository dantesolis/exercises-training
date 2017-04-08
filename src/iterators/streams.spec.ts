describe('Stream Iterators', () => {

  // define StreamIterator datatype here

  // let's assume the following data represents some stream data
  const dataStream = [
    "0r:8cSumDFY:LOP:Y5p:TFKq",
    "Bio5:uSe:8q:37zgyjBd:Ljz",
    "88:Mo9n:AEYz5Zn:ujF2rNc",
    "K:MOE:OawCm:NEhVFH:JLiG9",
    "pe5:Hy4n:rUqJC:hCfT6upV",
    "O:7f2gk4:Zoe:usr:e0Cmj:EP"
  ]

  it('iterates over data streams and returns a chunk each step', () => {
    // Write a simple stream generator
    // it will accept some byte streams as they arrive from the data source
    // and each step it will yield a data chunk
    // data chunks are separated by ':'
    // so for each input byte stream the generator will yield multiple data chunks (sep by ':')
    // EXAMPLE: abc:def / ghi:jkl / m:n:o / p
    //          will emit abc, def, ghi, jkl, m, n, o, p

    // also, define datatype for the iterators produced by the iterator

    // define iterateStream generator here

    let iterator: StreamIterator;
    iterator = iterateStream(dataStream);
    expect([...iterator]).toEqual(["0r", "8cSumDFY", "LOP", "Y5p", "TFKq", "Bio5", "uSe", "8q", "37zgyjBd", "Ljz", "88", "Mo9n", "AEYz5Zn", "ujF2rNc", "K", "MOE", "OawCm", "NEhVFH", "JLiG9", "pe5", "Hy4n", "rUqJC", "hCfT6upV", "O", "7f2gk4", "Zoe", "usr", "e0Cmj", "EP"]);

    iterator = iterateStream(dataStream);
    expect(iterator.next().value).toEqual("0r");
    expect(iterator.next().value).toEqual("8cSumDFY");
    expect(iterator.next().value).toEqual("LOP");
    expect(iterator.next().value).toEqual("Y5p");
  })

  it('iterates over data streams, aggregates chunks and returns joined 3 pieces each step', () => {
    // Write a slightly more complex stream generator
    // use the solution from exercise above
    // the new generator will concatenate 3 chunks in a buffer and then emit the buffer (and empty it)
    // EXAMPLE: abc:def / ghi:jkl / m:n:o / p
    //          will emit abcdefghi, jklmn, op

    // reuse the iterator datatype (it will still use `string`, so nothing changes)

    // define iterateStreamAndBuffer generator here

    let iterator: StreamIterator;
    iterator = iterateStreamAndBuffer(dataStream);
    expect([...iterator]).toEqual(["0r8cSumDFYLOP", "Y5pTFKqBio5", "uSe8q37zgyjBd", "Ljz88Mo9n", "AEYz5ZnujF2rNcK", "MOEOawCmNEhVFH", "JLiG9pe5Hy4n", "rUqJChCfT6upVO", "7f2gk4Zoeusr", "e0CmjEP"]);

    iterator = iterateStreamAndBuffer(dataStream);
    expect(iterator.next().value).toEqual("0r8cSumDFYLOP");
    expect(iterator.next().value).toEqual("Y5pTFKqBio5");
    expect(iterator.next().value).toEqual("uSe8q37zgyjBd");
    expect(iterator.next().value).toEqual("Ljz88Mo9n");
  })

})
