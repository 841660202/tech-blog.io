{"title":"","uid":"1cd19fc71517798e2fa5b7457d1fb06e","text":"function add(str1, str2) { str1 = str1.split(\"\"); // 转化成数组 str2 = str2.split(\"\"); // 转化成数组 let result = \"\"; // 结果 let flag = 0; // 满10进1标记 w...","date":"2022-09-15T14:26:11.119Z","updated":"2022-09-15T14:26:11.119Z","comments":true,"path":"api/pages/test/大数相加.js","covers":null,"excerpt":"","content":"function add(str1, str2) {\n  str1 = str1.split(\"\"); // 转化成数组\n  str2 = str2.split(\"\"); // 转化成数组\n  let result = \"\"; // 结果\n  let flag = 0; // 满10进1标记\n  while (str1.length || str2.length || flag) {\n\n    flag = flag + ~~str1.pop() + ~~str2.pop(); // ~~undefined = 0, true + 0 =1, false + 0 = 0\n\n    result = (flag % 10) + result; // 结果\n\n    flag = flag > 9; // 是否进位\n  }\n  return result.replace(/^0+/, \"\"); // 首部有0去除\n}\n\nconsole.log(add(\"00125\", \"0131231231232132136\"))","count_time":{"symbolsCount":462,"symbolsTime":"1 mins."},"toc":""}