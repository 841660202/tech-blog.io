{"title":"","uid":"1cd19fc71517798e2fa5b7457d1fb06e","text":"const arr = [2, 44, 1, 0, -22, 56, -78]; // arr.sort((a,b)=>a-b) function bubbleSort(arr) { let tmp; for (let i = arr.length; i > 0; i--) { ...","date":"2022-07-06T11:54:37.693Z","updated":"2022-07-06T11:54:37.693Z","comments":true,"path":"api/pages/test/冒泡排序.js","covers":null,"excerpt":"","content":"const arr = [2, 44, 1, 0, -22, 56, -78];\n// arr.sort((a,b)=>a-b)\nfunction bubbleSort(arr) {\n  let tmp;\n  for (let i = arr.length; i > 0; i--) {\n    // 较大的arr[j]会冒泡到arr的尾部\n    for (let j = 0; j < i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        // 前一个元素比后一个大，则向后冒泡(交换)\n        tmp = arr[j];\n        arr[j] = arr[j + 1];\n        arr[j + 1] = tmp;\n      }\n    }\n    console.log(\"arr\", i, arr);\n  }\n  return arr;\n}\nconsole.log(bubbleSort(arr)); // [-78, -22, 0, 1, 2, 44, 56]\n// 冒泡过程\n// [2, 1, 0, -22, 44, -78, 56];\n// [1, 0, -22, 2, -78, 44, 56];\n// [0, -22, 1, -78, 2, 44, 56];\n// [-22, 0, -78, 1, 2, 44, 56];\n// [-22, -78, 0, 1, 2, 44, 56];\n// [-78, -22, 0, 1, 2, 44, 56];\n","count_time":{"symbolsCount":644,"symbolsTime":"1 mins."},"toc":""}