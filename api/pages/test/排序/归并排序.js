{"title":"","uid":"1cd19fc71517798e2fa5b7457d1fb06e","text":"const arr = [2, 44, 1, 0, -22, 56, -78]; function mergeSort(arr) { if (arr.length === 0 || arr.length === 1) return arr; const middle = Math...","date":"2022-09-16T13:54:56.379Z","updated":"2022-09-16T13:54:56.379Z","comments":true,"path":"api/pages/test/排序/归并排序.js","covers":null,"excerpt":"","content":"const arr = [2, 44, 1, 0, -22, 56, -78];\nfunction mergeSort(arr) {\n  if (arr.length === 0 || arr.length === 1) return arr;\n\n  const middle = Math.floor(arr.length / 2);\n  const left = arr.slice(0, middle);\n  const right = arr.slice(middle);\n  console.log(middle, left, right)\n  return merge(mergeSort(left), mergeSort(right));\n\n  // 辅助函数，用于将两个数组合并为一个有序数组，并返回\n  function merge(left, right) {\n    const result = [];\n    console.log('left,right',left,right)\n    while (left.length && right.length) {\n      // 放入较小的元素，并从头部移出\n      result.push(left[0] <= right[0] ? left.shift() : right.shift());\n    }\n    result.push(...left, ...right); // 放入剩余元素\n    console.log('result',result)\n    return result;\n  }\n}\nconsole.log(mergeSort(arr));\n\n// [ 2, 44, 1 ]              [ 0, -22, 56, -78 ]\n// [ 2 ] [ 44, 1 ]           [ 0, -22 ] [ 56, -78 ]\n// [ 44 ] [ 1 ]              [ 0 ] [ -22 ]\n//                           [ 56 ] [ -78 ]\n\n// 合并\n\n// [ 2, 44, 1 ]              [ 0, -22, 56, -78 ]\n// [ 2 ] [ 44, 1 ]           [ 0, -22 ] [ 56, -78 ]\n// [ 44 ] [ 1 ]              [ 0 ] [ -22 ]\n//                           [ 56 ] [ -78 ]","count_time":{"symbolsCount":"1.1k","symbolsTime":"1 mins."},"toc":""}