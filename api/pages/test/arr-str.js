{"title":"","uid":"1cd19fc71517798e2fa5b7457d1fb06e","text":"const data = { createStartTime: 1672502400000, createEndTime: 1675871999999, customerGrades: [\"S\", \"A\"], creatorIds: [\"00002\"], creatorTeamO...","date":"2023-02-20T21:20:56.500Z","updated":"2023-02-20T21:20:56.500Z","comments":true,"path":"api/pages/test/arr-str.js","covers":null,"excerpt":"","content":"const data = {\n  createStartTime: 1672502400000,\n  createEndTime: 1675871999999,\n  customerGrades: [\"S\", \"A\"],\n  creatorIds: [\"00002\"],\n  creatorTeamOrgIds: [3],\n  collaboratorIds: [\"00002\", \"00001\"],\n  operatorTeamOrgIds: [116, 3],\n  followerIds: [\"00001\"],\n  followerTeamOrgIds: [119],\n  limit: 50,\n  pageIndex: 1,\n  participants: [\"1354617269770047488\"],\n  bizId: 1365,\n  problemIdOrName: \"\",\n  states: [],\n};\n\n/** arr 2 str */\nconst arr2StrOrUndefined = (value) => {\n  return Array.isArray(value) && value.length > 0 ? value.join(\",\") : undefined;\n};\n\n/** str 2 arr */\nconst str2ArrOrUndefined = (value) => {\n  if (!value) return undefined;\n  return typeof value === \"string\" ? value.split(\",\") : [];\n};\n\nconst keyValObj = {\n  collaboratorIds: \"collaboratorIds\",\n  collaboratorTeamOrgIds: \"collaboratorOrgIds\",\n  creatorIds: \"creatorIds\",\n  creatorTeamOrgIds: \"creatorOrgIds\",\n  customerGrades: \"customerGrades\",\n  followerIds: \"followerIds\",\n  followerTeamOrgIds: \"followerOrgIds\",\n  operatorIds: \"operatorIds\",\n  operatorTeamOrgIds: \"operatorOrgIds\",\n  participants: \"participants\",\n  states: \"states\",\n};\n\nconst fieldKeys = Object.keys(keyValObj);\nconst valKeyObj = {};\n\nObject.keys(keyValObj).forEach((key) => {\n  valKeyObj[keyValObj[key]] = key;\n});\nconst fieldValues = Object.keys(valKeyObj);\n\nconst objectFileds2str = (obj) => {\n  fieldKeys.forEach((key) => {\n    const valueKey = keyValObj[key];\n    if (Array.isArray(obj[key]) && valueKey) {\n      obj[valueKey] = arr2StrOrUndefined(obj[key]);\n      key !== valueKey && delete obj[key];\n    }\n  });\n\n  return obj;\n};\n\nconst objectFileds2arr = (obj) => {\n  fieldValues.forEach((valueKey) => {\n    if (typeof obj[valueKey] === \"string\") {\n      const key = valKeyObj[valueKey];\n      obj[key] = str2ArrOrUndefined(obj[valueKey]);\n    }\n  });\n  return obj;\n};\n\n// const result = {\n//   createStartTime: 1672502400000,\n//   createEndTime: 1675871999999,\n//   customerGrades: \"S,A\",\n//   creatorIds: \"00002\",\n//   collaboratorIds: \"00002,00001\",\n//   followerIds: \"00001\",\n//   limit: 50,\n//   pageIndex: 1,\n//   participants: \"1354617269770047488\",\n//   bizId: 1365,\n//   problemIdOrName: \"\",\n//   states: \"1,3\",\n//   creatorOrgIds: \"\",\n//   followerOrgIds: \"119\",\n//   operatorOrgIds: \"116,3\",\n// };\n\n// // console.log(\"objectFileds2arr(data);\", objectFileds2arr(result));\n","count_time":{"symbolsCount":"2.3k","symbolsTime":"2 mins."},"toc":""}