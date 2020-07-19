// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807
 function ListNode(val) {
      this.val = val;
      this.next = null;
 }
var addTwoNumbers = function (l1, l2, curr = 0) {
  if (l1 === null && l2 === null) {
    if (curr) return new ListNode(curr)
    else return null
  } else {
    if (l1 == null) l1 = new ListNode(0)
    if (l2 == null) l2 = new ListNode(0)    
    let nextVal = (l2.val || 0) + (l1.val || 0) + curr
    curr = 0
    if (nextVal > 9) {
      curr = 1
      nextVal -= 10
    }
    l1.val = nextVal
    l1.next = addTwoNumbers(l1.next, l2.next, curr)
    return l1
  }
} 
console.log(addTwoNumbers([2,4,3],[5,6,4]))
