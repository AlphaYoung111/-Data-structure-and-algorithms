function hashFunc(str, max) {
  let hashCode = 0
  for (let i = 0; i < str.length; i++) {
    hashCode = 31 * hashCode + str.charCodeAt(i)
  }
  hashCode = hashCode % max
  return hashCode
}

console.log(hashFunc('nae', 10))

class HashTable {
  constructor() {
    this.storage = [] //数组存储个数
    this.count = 0 //存放个数
    this.limit = 7//总个数
  }
  // 引入哈希函数
  hashFunc(str, max) {
    let hashCode = 0
    for (let i = 0; i < str.length; i++) {
      hashCode = 31 * hashCode + str.charCodeAt(i)
    }
    hashCode = hashCode % max
    return hashCode
  }
  // 放入、修改元素
  put(key, value) {
    const index = this.hashFunc(key, this.limit)
    let bucket = this.storage[index]
    // 插入
    if (bucket === undefined) {
      bucket = []
      this.storage[index] = bucket
    }
    // 判断覆盖，覆盖就修改，没覆盖就通过数组形式push进去
    let override = false
    // 判断是插入还是修改
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        tuple[1] = value
        override = true //存在键就将值覆盖
      }
    }

    if (!override) {
      bucket.push([key, value])
      this.count++
      if (this.count > this.limit * 0.75) {
        let newList = this.limit * 2
        newList = this.getPrime(newList)
        this.resize(newList)
      }
    }
  }
  // 获取
  get(key) {
    const index = this.hashFunc(key, this.limit)
    const bucket = this.storage[index]
    if (bucket === undefined) {
      return null
    }
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        return tuple[1]
      }
    }
    return null
  }
  //根据键删除
  remove(key) {
    const index = this.hashFunc(key, this.limit)
    const bucket = this.storage[index]
    if (bucket === undefined) return null
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i]
      if (tuple[0] === key) {
        bucket.splice(i, 1)
        this.count--
        return tuple[1]
      }
    }
  }
  isEmpty() {
    return this.count === 0
  }
  size() {
    return this.count
  }
  // 扩容函数
  resize(newLimit) {
    let oldStorage = this.storage
    this.limit = newLimit
    this.count = 0
    this.storage = []
    oldStorage.forEach((bucket) => {
      if (bucket === null) return
      for (let i = 0; i < bucket.length; i++) {
        let tuple = bucket[i]
        this.put(tuple[0], tuple[1])
      }
    })
  }
  isPrime(num) {
    if (num === 4) return false
    let tem = Math.ceil(Math.sqrt(num))
    for (let i = 2; i < tem; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }
  getPrime(num) {
    while (!isPrime(num)) {
      num++
    }
    return num
  }
}

// 判断质数
function isPrime(num) {
  if (num === 4) return false
  let tem = Math.ceil(Math.sqrt(num))
  for (let i = 2; i < tem; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

const ht = new HashTable()
ht.put('npc', 'xiaohong')
ht.put('npb', 'xia')
ht.put('bb', 'hello')
console.log(ht.remove('npc'))
console.log(ht.storage)
console.log(ht.get('npb'))
console.log(ht.get('np'))


