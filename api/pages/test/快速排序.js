{"title":"","uid":"1cd19fc71517798e2fa5b7457d1fb06e","text":"/* 快排是冒泡的一种改进，基于分治思想 */ const arr2 = [2, 44, 1, 0, -22, 56, -78]; function quickSort2(arr) { if (arr.length === 0) return arr; const pivot =...","date":"2022-07-06T11:54:37.693Z","updated":"2022-07-06T11:54:37.693Z","comments":true,"path":"api/pages/test/快速排序.js","covers":null,"excerpt":"","content":"/*\n快排是冒泡的一种改进，基于分治思想\n*/\nconst arr2 = [2, 44, 1, 0, -22, 56, -78];\nfunction quickSort2(arr) {\n  if (arr.length === 0) return arr;\n  const pivot = arr.pop(); // 使用最后一个元素当作基准数\n  const left = [],\n    right = [];\n  for (let i = 0; i < arr.length; i++) {\n    if (arr[i] < pivot) left.push(arr[i]); // 小于基准数则放到left\n    else right.push(arr[i]); // 大于基准数则放到right\n  }\n  // 合并left的快排结果，基准数和右侧的快排结果\n  console.log(\"arr\", arr);\n  console.log(\"left\", left);\n  console.log(\"right\", right);\n  console.log('--')\n  return quickSort2(left).concat(pivot, quickSort2(right));\n}\n\nconsole.log(quickSort2(arr2));\n// arr [ 2, 44, 1, 0, -22, 56 ]\n// left []\n// right [ 2, 44, 1, 0, -22, 56 ]\n// --\n// arr [ 2, 44, 1, 0, -22 ]\n// left [ 2, 44, 1, 0, -22 ]\n// right []\n// --\n// arr [ 2, 44, 1, 0 ]\n// left []\n// right [ 2, 44, 1, 0 ]\n// --\n// arr [ 2, 44, 1 ]\n// left []\n// right [ 2, 44, 1 ]\n// --\n// arr [ 2, 44 ]\n// left []\n// right [ 2, 44 ]\n// --\n// arr [ 2 ]\n// left [ 2 ]\n// right []\n// --\n// arr []\n// left []\n// right []\n// --\n// [\n//   -78, -22,  0, 1,\n//     2,  44, 56\n// ]","count_time":{"symbolsCount":"1.1k","symbolsTime":"1 mins."},"toc":""}