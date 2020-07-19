class Event {
  constructor() {
    this._cache = {}
  }
  on(type, fn) {
    // 判断事件名是否存在
    this._cache[type] = this._cache[type] || []
    const flag = this._cache[type].some((item) => item.name === fn.name)
    if (!flag) {
      this._cache[type].push(fn)
    }
  }
  // 解绑
  off(type, fn) {
    if (!this._cache[type]) {
      console.error(new Error('this type not defined'))
    } else {
      this._cache[type].forEach((item, index) => {
        if (item.name == fn.name) {
          this._cache[type].splice(index, 1)
        }
      })
    }
  }
  // 触发
  trigger(type, data) {
    if (this._cache[type]) {
      this._cache[type].forEach((item) => {
        item(data)
      })
      // console.error(new Error('this type not defined'));
    }
  }
}
var data = 4
let e = new Event()
const add = (a) => {
  console.log(a + 1)
}
e.on('plus', add)
console.log(e._cache)
// e.off('plus', add)
console.log(e._cache)
e.trigger('plus', 3)
