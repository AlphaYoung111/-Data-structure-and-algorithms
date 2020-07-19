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

class QueueElement {
  constructor(element, priority) {
    this.element = element
    this.priority = priority
  }
}
class PriorityQueue extends Queue {
  enqueue(element, priority) {
    const ele = new QueueElement(element, priority)
    // 考虑新元素的优先级排序
    if (this.isEmpty()) {
      this.items.push(ele)
    } else {
      let added = false
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].priority > ele.priority) {
          this.items.splice(i, 0, ele)
          added = true
          break
        }
      }
      // 这个情况是处理新加入的元素没有比他优先级低的，直接将该放置砸队列最后
      if (!added) {
        this.items.push(ele)
      }
    }
  }
}

const priorityTest = new PriorityQueue()

priorityTest.enqueue(1, 20)
priorityTest.enqueue(2, 30)
priorityTest.enqueue(3, 320)
priorityTest.enqueue(4, 330)
priorityTest.enqueue(8, 10)

console.log(priorityTest.items)
