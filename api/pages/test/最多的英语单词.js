{"title":"","uid":"1cd19fc71517798e2fa5b7457d1fb06e","text":"var paragraph = \"Bob hit a ball, the hit BALL flew far after it was hit.\"; function findMaxWord(paragraph) { var p = paragraph .replace(/[\\W...","date":"2022-09-16T13:54:56.392Z","updated":"2022-09-16T13:54:56.392Z","comments":true,"path":"api/pages/test/最多的英语单词.js","covers":null,"excerpt":"","content":"var paragraph = \"Bob hit a ball, the hit BALL flew far after it was hit.\";\n\nfunction findMaxWord(paragraph) {\n  var p = paragraph\n    .replace(/[\\W\\s_]/g, \" \")\n    .toLowerCase()\n    .split(\" \");\n  const obj = {};\n\n  for (const word of p) {\n    if (!word) continue;\n    if (obj[word]) {\n      obj[word]++;\n    } else {\n      obj[word] = 1;\n    }\n  }\n\n  let max = 0;\n  let word = \"\";\n  for (const k in obj) {\n    if (obj[k] > max) {\n      max = obj[k];\n      word = k;\n    }\n  }\n\n  return {\n    count: max,\n    word,\n  };\n}\n\nconst res = findMaxWord(paragraph);\nconsole.log(res);\n","count_time":{"symbolsCount":578,"symbolsTime":"1 mins."},"toc":""}