{"title":"","uid":"1cd19fc71517798e2fa5b7457d1fb06e","text":"function arr2tree(arr) { let hash = {}; const result = []; for (let item of arr) { hash[item.id] = item; } for (let item of arr) { const par...","date":"2022-09-15T14:26:11.109Z","updated":"2022-09-15T14:26:11.109Z","comments":true,"path":"api/pages/test/arr2tree.js","covers":null,"excerpt":"","content":"function arr2tree(arr) {\n  let hash = {};\n  const result = [];\n\n  for (let item of arr) {\n    hash[item.id] = item;\n  }\n\n  for (let item of arr) {\n    const parent = hash[item.pid];\n    if (parent) {\n      if (!parent.children) {\n        parent.children = [];\n      }\n      delete item.pid;\n      parent.children.push(item); // 之所以能够实现，原因：使用了数组引用\n    } else {\n      delete item.pid;\n      result.push(item); // 只有第一次pid = 0的时候，树根节点才走这里\n    }\n  }\n  hash = undefined; // 回收\n  return result;\n}\n// 作者：liuz2\n// 链接：https://juejin.cn/post/7064576548195532837\n// 来源：稀土掘金\n// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。\n\nconst arr = [\n  { id: 1, pid: 0 },\n  { id: 2, pid: 1 },\n  { id: 3, pid: 1 },\n  { id: 4, pid: 2 },\n  { id: 5, pid: 2 },\n  { id: 6, pid: 3 },\n];\n\nconst res = arr2tree(arr);\nconsole.log(\"res\", JSON.stringify(res, null, 2));\n","count_time":{"symbolsCount":823,"symbolsTime":"1 mins."},"toc":""}