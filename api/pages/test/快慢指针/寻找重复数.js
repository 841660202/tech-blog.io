{"title":"","uid":"1cd19fc71517798e2fa5b7457d1fb06e","text":"// 题目描述 // 给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。 // 这题完全是扯淡，没有任何价值，不具备一类问题的解决，不是一个好的程序 funct...","date":"2022-07-14T13:56:54.398Z","updated":"2022-07-14T13:56:54.398Z","comments":true,"path":"api/pages/test/快慢指针/寻找重复数.js","covers":null,"excerpt":"","content":"// 题目描述\n// 给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。\n// 这题完全是扯淡，没有任何价值，不具备一类问题的解决，不是一个好的程序\nfunction findDuplicate(nums) {\n  // # P1\n  let slow = nums[0];\n  let fast = nums[slow];\n  // # P2\n  while (slow != fast) {\n    slow = nums[slow];\n    fast = nums[nums[fast]];\n  }\n  // # P3\n  slow = 0;\n  // # P4\n  while (slow != fast) {\n    fast = nums[fast];\n    slow = nums[slow];\n  }\n  console.log(\"slow\", slow);\n  return slow;\n}\nfindDuplicate([1, 3, 4, 2, 4]);\n","count_time":{"symbolsCount":499,"symbolsTime":"1 mins."},"toc":""}