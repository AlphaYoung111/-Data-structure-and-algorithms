class Stack {
  constructor() {
    this.items = []
  }
  push(element) {
    this.items.push(element)
  }
  pop() {
    return this.items.pop()
  }
  // peek查看最后一个数，不获取，pop是获取
  peek() {
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return this.items.length === 0
  }
  size() {
    return this.items.length
  }
}


const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)

// console.log(stack.items);
// console.log(stack.pop());
// console.log(stack.items);
// console.log(stack.peek());
// console.log(stack.isEmpty());
// console.log(stack.size());



// 十进制转二进制
function dec2bin(num) {
  const stack = new Stack()
  while (num > 0) {
    let rest = num % 2
    num = Math.floor(num / 2)
    stack.push(rest)
  }
  // console.log(stack.items);
  // return stack.items.reverse().join('')
  let str = ''
  while (!stack.isEmpty()) {
    str += stack.pop()
  }
  return str
}

console.log(dec2bin(100))

