class Queue {
  constructor() {
    this.items = []
  }
  enqueue(element) {
    this.items.push(element)
  }
  dequeue() {
    return this.items.shift()
  }
  // 查看第一个
  front() {
    return this.items.length === 0 ? null : this.items[0]
  }
  isEmpty() {
    return this.items.length === 0
  }
  size() {
    return this.items.length
  }
}
const que = new Queue()
que.enqueue(1)
que.enqueue(2)
que.enqueue(3)

// console.log(que.items);
// console.log(que.dequeue());
// console.log(que.items);

// 击鼓传花类似
function passGame(nameList, num) {
  const queue = new Queue()
  for (item of nameList) {
    queue.enqueue(item)
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
  }
  return queue.front()
}

console.log(passGame(['li', 'ai', 'yang', 'ki'], 5))
