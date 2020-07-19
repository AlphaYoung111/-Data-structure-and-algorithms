class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }
  // 添加新项
  append(element) {
    const newNode = new Node(element)
    // 分情况判断，一开始有值，和一开始没值
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      // 进行循环遍历，只要指向的元素位置有值，那么就一直寻找next，直到出现next没有指向，就将新元素node赋值给这个指向
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.length++
  }
  // 插入项，根据指定的位置传入链表内
  insert(position, element) {
    // 1.越界
    if (position < 0 || position > this.length) return false
    const newNode = new Node(element)
    // 判断插入位置使首位还是其他位置
    if (position === 0) {
      // 将原来head指向的赋值给新元素的next，然后再将新元素赋值给head
      newNode.next = this.head
      this.head = newNode
    } else {
      let index = 0
      let current = this.head
      let previous = null
      // 找到要插入的位置，将新元素的next指向原来的元素，将原来元素的前一个元素指向新元素
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = newNode
      newNode.next = current
    }
    this.length++
    return true
  }
  // 获取对应位置的元素
  get(position) {
    if (position < 0 || position > this.length - 1) return true
    let index = 0
    let current = this.head
    while (index++ < position) {
      current = current.next
    }
    return current.element
  }
  // 查找元素的位置
  indexOf(element) {
    // 从第一个元素开始查找
    let current = this.head
    let index = 0
    while (current) {
      if (current.element === element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }
  // 删除元素
  removeAt(position) {
    if (position < 0 || position > this.length - 1) return null
    // 删除首字母
    let current = this.head
    let previous = null
    if (position === 0) {
      this.head = current.next
    } else {
      let index = 0
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = current.next
    }
    this.length--
    return current.element
  }
  // 更新元素
  update(position, element) {
    const result = this.removeAt(position)
    this.insert(position, element)
    return result
  }
  // 删除元素项
  remove(element) {
    const index = this.indexOf(element)
    if (index === -1) return
    this.removeAt(index)
  }
  isEmpty() {
    return this.length === 0
  }
  size() {
    return this.length
  }
}

const link_list = new LinkedList()
link_list.append(1)
link_list.append(5)
link_list.append(3)
link_list.append('aaa')

// console.log(link_list)

link_list.insert(1, 'bcc')

// console.log(link_list)

// console.log(link_list.get(1))

// console.log(link_list.indexOf(1))
// console.log(link_list.indexOf(6))
// console.log(link_list.removeAt(1))
// console.log(link_list.update(1,'ooo'))

console.log(link_list)
