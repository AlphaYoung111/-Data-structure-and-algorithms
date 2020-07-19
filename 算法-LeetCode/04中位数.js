// 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
// 请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
// 你可以假设 nums1 和 nums2 不会同时为空。
// 示例 1:
// nums1 = [1, 3]
// nums2 = [2]
// 则中位数是 2.0
// 示例 2:
// nums1 = [1, 2]
// nums2 = [3, 4]
// 则中位数是 (2 + 3)/2 = 2.5
var findMedianSortedArrays = function (nums1, nums2) {
  let n1 = nums1 || []
  let n2 = nums2 || []
  let arr = n1.concat(n2)
  arr = arr.sort((a, b) => a - b)
  let len = arr.length
  let middle
  let pos = Math.ceil(0 + (len - 1))
  if (len % 2 !== 0) {
    middle = (arr[0] + arr[len - 1]) / 2
  } else {
    middle = arr[pos]
  }
  return middle
}
console.log(findMedianSortedArrays([1, 3], [2]))

