// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// 输入: "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length

  let max = 1
  let ptr = 0

  for (let i = 1; i < s.length; i++) {
    // 算法意思：按照顺序通过indexOf方法进行查找，
    // 如果当出现连续的字母时，查找到的index一定是前一个的，
    // 所以就会不当前的i小，就会进入if判断，从而将查找为 + 1
    // 最后会将最大值，和当前的i值减去开始索引的值加上开始位得到最大的字符串值
    let index = s.indexOf(s.charAt(i), ptr)
    if (index < i) {
      ptr = index + 1
    }
    max = Math.max(max, i - ptr + 1)
  }
  return max
}
