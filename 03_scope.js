function funcA() {
  let a = 1

  function funcB() {
    let b = 2

    function funcC() {
      let c = 3

      console.log('funcC:',a, b, c)
    }

    funcC()
    console.log('funcB:', a, b)
  }

  funcB()
  console.log('funcA:', a)
}

funcA()
