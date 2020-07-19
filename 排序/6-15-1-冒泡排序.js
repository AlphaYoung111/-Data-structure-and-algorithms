function bubble(arr) {
  for (var i = 0; i < arr.length; i++){
    for (var j = i + 1; j < arr.length - 1; j++){
      if (arr[i] > arr[j]) {
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

var arr = [1, 3, 2, 6, 5, 4, 10]
console.log(bubble(arr));


// function _sort(arr) {
//   for (var i = 0; i < arr.length; i++){
//     for (var j = i + 1; j < arr.length - 1; j++){
//       if (arr[i] > arr[j]) {
//         var tem = arr[i]
//         arr[i] = arr[j]
//         arr[j] =tem
//       }
//     }
//   }
//   return arr
// }