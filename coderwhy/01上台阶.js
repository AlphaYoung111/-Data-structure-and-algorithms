// 有n个台阶，每次上1阶或者2阶，总共有多少方法

// f(100) = f(99) + f(98)
// 最后到99走1阶，到98走两阶

// 递归
function clamp(n) {
  if (n === 1) {
    return 1
  } else if (n === 2) {
    return 2
  } else if (n > 2) {
    return clamp(n - 1) + clamp(n - 2)
  }
}
// console.log(clamp(10));

// 数组方法
function clampArr(n) {
  let res = new Array(n + 1).fill(0)
  res[1] = 1
  res[2] = 2
  for (let i = 3; i < n + 1; i++) {
    res[i] = res[i - 1] + res[i - 2]
  }
  return res[n]
}
console.log(clampArr(10))

// 递归优化
let cache = {}
function clampSelf(n) {
  if (!(n in cache)) {
    cache[n] = _clampSelf(n)
  }
  console.log(cache);
  
  return cache[n]
}
function _clampSelf(n) {
  if (n === 1 || n === 2) {
    return n
  } else {
    return clampSelf(n - 1) + clampSelf(n - 2)
  }
}

console.log(clampSelf(10))


