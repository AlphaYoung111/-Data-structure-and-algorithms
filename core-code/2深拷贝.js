function clone(obj) {
  if (typeof obj === 'object') {
    let cloneObj = {}
    for (const k in obj) {
      cloneObj[k] = clone(obj[k])
    }
    return cloneObj
  } else {
    return obj
  }
}

let o = {
  a: {
    b: {
      c: 1,
    },
  },
}

console.log(clone(o))
