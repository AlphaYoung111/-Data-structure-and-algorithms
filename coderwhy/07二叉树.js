class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  // 插入方法
  insert(key) {
    const newNode = new Node(key)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insetNode(this.root, newNode)
    }
  }
  // 插入位置的递归方法
  insetNode(node, newNode) {
    if (newNode.key > node.key) {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insetNode(node.right, newNode)
      }
    } else {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insetNode(node.left, newNode)
      }
    }
  }
  // 先序遍历 （左边遍历完后再去遍历右边）
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root)
  }
  preOrderTraverseNode(node) {
    if (node === null) return
    console.log(node.key)
    this.preOrderTraverseNode(node.left)
    this.preOrderTraverseNode(node.right)
  }
  //中序遍历，先将左边的所有全部遍历出来，在往上查找,遍历出的顺序是从小到大的
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root)
  }
  inOrderTraverseNode(node) {
    if (node === null) return
    this.inOrderTraverseNode(node.left)
    console.log(node.key)
    this.inOrderTraverseNode(node.right)
  }
  //右序遍历，先将同层级能够取出的元素，取出再返回上层
  postOrderTraverse() {
    this.inOrderTraverseNode(this.root)
  }
  postOrderTraverseNode(node) {
    if (node === null) return
    this.postOrderTraverseNode(node.left)
    this.postOrderTraverseNode(node.right)
    console.log(node.key)
  }
  // min最小值
  min() {
    let node = this.root
    while (node.left != null) {
      node = node.left
    }
    return node.key
  }
  // max去最大值
  max() {
    let node = this.root
    while (node.right != null) {
      node = node.right
    }
    return node.key
  }

  search(key) {
    return this.searchNode(this.root, key)
  }
  searchNode(node, key) {
    if (node === null) return false
    if (key < node.key) {
      return this.searchNode(node.left, key)
    } else if (key > node.key) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }
  search2(key) {
    let node = this.root
    while (node != null) {
      if (key < node.key) {
        node = node.left
      } else if (key > node.key) {
        node = node.right
      } else {
        return true
      }
    }
    return false
  }

  // 删除操作
  remove(key) {
    let current = this.root
    let parent = null
    let isLeftChild = true
    // 找出删除节点为current
    while (current.key !== key) {
      parent = current
      if (key < current.key) {
        current = current.left
        isLeftChild = true
      } else if(key > current.key) {
        current = current.right
        isLeftChild = false
      }
      if(current ===null) return false
    }

    // 删除的节点没有子节点（叶子节点）
    if (current.left === null && current.right === null) {
      if (current === this.root) {
        this.root = null
      } else if (isLeftChild) {
        parent.left = null
      } else {
        parent.right = null
      }
    }

    // 删除的节点只有一个子节点
    else if (current.right === null) { //只有左子节点
      if (current === this.root) {
        this.root = current.left
      } else if(isLeftChild) {
        parent.left = current.left
      } else {
        parent.right = current.left
      }
    } else if (current.left === null) {//只有右子节点
      if (current === this.root) {
        this.root = current.right
      } else if (isLeftChild) {
        parent.left = current.right
      } else {
        parent.right = current.right
      }
    } else {//右两个子节点
      // 获取后继节点
      let successor = this.getSuccessor(current)
      if (this.root === current) {
        this.root = successor
      } else if (isLeftChild) {
        parent.left = successor
      } else {
        parent.right = successor
      }
      successor.left = current.left
    }
    return true
  }

  // 获取后继（后继就是当前节点右树的最小值，前驱当前节点左树的最大值）
  getSuccessor(delNode) {
    let successorParent = delNode
    let successor = delNode.right
    let current = delNode.right

    while (current !== null) {
      successorParent = successor
      successor = current
      current= current.left
    }

    // 如果后继节点不是删除节点的右节点
    if (successor != delNode.right) {
      successorParent.left = successor.right
      successor.right = delNode.right
    }
    return successor
  }
}

const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)
console.log(tree)
// tree.preOrderTraverse()
// tree.inOrderTraverse()
tree.min()
console.log(tree.search(8))
console.log(tree.search(26))
tree.remove(7)
tree.inOrderTraverse()

