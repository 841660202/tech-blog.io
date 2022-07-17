{"title":"","uid":"1cd19fc71517798e2fa5b7457d1fb06e","text":"// 什么是链表? // 数据的一种存储结构，一个链表包含若干个节点，每个节点至少包含一个数据域和指针域 // JS实现链表 https://blog.csdn.net/m0_47109503/article/details/117566907 // // 在创建链表时，需要创建...","date":"2022-07-13T13:23:18.388Z","updated":"2022-07-13T13:23:18.388Z","comments":true,"path":"api/pages/test/l链表/单链表.js","covers":null,"excerpt":"","content":"// 什么是链表?\n// 数据的一种存储结构，一个链表包含若干个节点，每个节点至少包含一个数据域和指针域\n// JS实现链表 https://blog.csdn.net/m0_47109503/article/details/117566907\n\n//\n\n// 在创建链表时，需要创建两个类：指针类和节点类\nclass Node {\n  constructor(data) {\n    this.data = data; // 节点的数据域/数据成员\n    this.next = null; // 节点的指针域/指针成员\n  }\n}\n// 定义一个单向链表类\nclass singleLinked {\n  constructor() {\n    this.size = 0; // 记录单链表长度或节点个数\n    this.head = new Node(\"head\"); // 记录链表的头指针：主要作用记录链表的起始地址\n    this.currentNode = \"\";\n  }\n  // 获取链表的长度\n  getLength() {\n    return this.size;\n  }\n  // 判断链表是否为空\n  isEmpty() {\n    return this.size === 0;\n  }\n  // 遍历链表：不重复访问链表中的每个节点\n  displayList() {\n    var list = \"\";\n    var currentNode = this.head; // 指向链表的头指针\n    while (currentNode) {\n      // 如果当前节点不为空，则表明当前节点中存在数据\n      list += currentNode.data;\n      // 同时让当前节点的指针指向下一个节点\n      currentNode = currentNode.next;\n\n      if (currentNode) {\n        // 如果当前节点的下一个节点不为空\n        list += \"->\"; // 拼接后看起来像一个链表\n      }\n    }\n    console.log(list);\n  }\n\n  // 获取链表的最后一个节点\n  findLast() {\n    var currentNode = this.head;\n    while (currentNode.next) {\n      currentNode = currentNode.next;\n    }\n    return currentNode;\n  }\n\n  // 采用尾插法在链表尾部添加元素，即创建一个链表\n  appendNode(element) {\n    var currentNode = this.findLast(); // 找到链表的最后一个节点\n    var newNode = new Node(element); // 创建一个新节点\n    currentNode.next = newNode; // 把新的节点放在链表里去（放在最后一个的后面）\n    newNode.next = null; // 因为新节点已经是链表最后一个节点\n    this.size++; // 因为新插入一个节点，让链表的长度+1\n  }\n  // 删除一个节点\n  deleteNode(element) {\n    var currentNode = this.head;\n    while (currentNode.next.data !== element) {\n      currentNode = currentNode.next;\n    }\n    // 将链的节点与另一个节点连上\n    currentNode.next = currentNode.next.next;\n    this.size--;\n  }\n}\n\n// 上述链表代码的测试\n// 最好使用循环，往里面加数据\nvar slist = new singleLinked();\n\nvar arr = [1001, 1234, 1006, 7788, 5512, 6129];\nfor (var i = 0; i < arr.length; i++) {\n  slist.appendNode(arr[i]);\n}\nslist.displayList();\nslist.deleteNode(1001);\nslist.displayList();\n","count_time":{"symbolsCount":"1.9k","symbolsTime":"2 mins."},"toc":""}