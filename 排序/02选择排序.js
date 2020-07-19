function select(arr) {
  let minIndex, tem
  for (var i = 0; i < arr.length; i++) {
    minIndex = i
    for (var j = i + 1; j < arr.length - 1; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    tem = arr[i]
    arr[i] = arr[minIndex] 
    arr[minIndex] = tem
  }
  return arr
}

console.log(select([2,1,8,5,6]))