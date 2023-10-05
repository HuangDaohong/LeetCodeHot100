// const arr = [1, 2, 1, 3, 4, 1, 2];
// const newArr = arr.filter((item, index) => {
//     return arr.indexOf(item) === index;
// });
// const newArr2 = Array.from(new Set(arr));
// const newArr3 = [...new Set(arr)];
// const newArr4 = arr.reduce((prev, cur) => {
//     console.log('prev:', prev, '-- cur:', cur);
//     return prev.includes(cur) ? prev : [...prev, cur];
// }, []);


//定义链表节点类
// class ListNode {
//     constructor(val = 0) {
//         this.val = val; //当前节点的值
//         this.next = null; //指向下一个节点的指针，默认为null
//     }
// }

// //构建链表
// let node1 = new ListNode(1);
// let node2 = new ListNode(2);
// let node3 = new ListNode(3);
// let node4 = new ListNode(4);
// let node5 = new ListNode(5);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;

// //输出链表
// let current = node1; //从头节点开始遍历
// while (current != null) { //一直遍历到链表末尾
//     console.log(current.val);
//     current = current.next; //指向下一个节点
// }

// 对象扁平化
// const obj = {
//     a: {
//         b: {
//             c: 1,
//             f: 2
//         }
//     },
//     d: {
//         e: 2
//     }
// };

// const flatten = (obj, prefix = '') => {
//     console.log('prefix:', prefix);
//     const res = {};
//     Object.keys(obj).forEach(key => {
//         console.log('key:', key);
//         console.log('res:', res);
//         if (typeof obj[key] === 'object') {
//             Object.assign(res, flatten(obj[key], prefix + key + '.'));
//             flatten(obj[key], prefix + key + '.')
//         } else {
//             res[prefix + key] = obj[key];
//             console.log('res2:', res);
//         }
//     });
//     return res;
// };
// console.log(flatten(obj));
// function flatten (obj) {
//     let res = {};
//     function flat (obj, pre) {// pre是前缀
//         for (let key in obj) {
//             if (typeof obj[key] === 'object') {
//                 flat(obj[key], pre ? pre + '.' + key : key);
//             } else {
//                 res[pre ? pre + '.' + key : key] = obj[key];
//             }
//         }
//     }
//     flat(obj);
//     return res;
// }
// function mynew (Func, ...args) {
//     // 1.创建一个新对象
//     const obj = {};
//     // 2.新对象原型指向构造函数原型对象
//     obj.__proto__ = Func.prototype;
//     // 3.将构建函数的this指向新对象
//     //通过apply 来执行  apply是改变this 并执行
//     let result = Func.apply(obj, args);
//     // 4.根据返回值判断
//     return result instanceof Object ? result : obj;
// }

// //测
// function Person (name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.say = function () {
//     console.log(this.name);
// };

// let p = mynew(Person, "huihui", 123);
// console.log(p); // Person {name: "huihui", age: 123}
// p.say(); // huihui

// const obj={
//   [Symbol('a')]:1,
//   'b':undefined,
//   'c':function(){},
// }
// console.log(Reflect.ownKeys(obj));
// console.log(Object.getOwnPropertyNames(obj));
// console.log(Object.getOwnPropertySymbols(obj));
// console.log(Object.keys(obj));
// /*
// [ 'b', 'c', Symbol(a) ]
// [ 'b', 'c' ]
// [ Symbol(a) ]
// [ 'b', 'c' ]
// */

// function objectFlat(obj = {}) {
//   const res = {}
//   function flat(item, preKey = '') {
//     Object.entries(item).forEach(([key, val]) => {
//       const newKey = preKey ? `${preKey}.${key}` : key
//       if (val && typeof val === 'object') {
//         flat(val, newKey)
//       } else {
//         res[newKey] = val
//       }
//     })
//   }
//   flat(obj)
//   return res
// }

// // 测试
// const source = { a: { b: { c: 1, d: 2 }, e: 3 }, f: { g: 2 } }
// console.log(objectFlat(source));
// let str = "This is a test string with let343ters.";
// let result = "";
// for (let i = 0; i < str.length; i++) {
//   let char = str.charAt(i);
//   if (char < "A" || char > "z" || (char > "Z" && char < "a")) {
//     result += char;
//   }
// }

// var str = "a2119naskdna";
// var newStr = str.replace(/[a-z|A-Z]/g, '');
// console.log(newStr);


// const obj={
//   [Symbol('a')]:1,
//   'b':undefined,
//   'c':function(){},
// }
// console.log(Reflect.ownKeys(obj));


// const rl = require("readline").createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;

// void async function () {
//     // Write your code here
//     while(line = await readline()){
//         let tokens = line.split(' ');
//         let a = parseInt(tokens[0]);
//         let b = parseInt(tokens[1]);
//         console.log(a + b);
//     }
// }()


/* 
static修饰的属性和方法都是静态方法和属性,只能被类名调用,不能被实例化对象调用.同时也不能被子类继承,换句话说它属于当前这个类的.
原因是：
使用static声明的函数或属性是不能够被实例化对象所调用，
也不能被子类所继承，而仅仅属于这个类所使用（调用）。
*/
// 声明类
// class Boy {
//   //定义属性
//   static info = '见过你的美,还能爱上谁?';
//   // 定义方法
//   say () {
//     console.log('小姐姐,' + this.info);

//   }
//   // static 修饰的方法
//   static desc () {
//     console.log('小姐姐,我看见你就犯困...');

//   }
// }
// // 实例化类
// let b = new Boy;
// // 成功调用方法
// b.say();
// // 调用static修饰的方法
// // b.desc();
// Boy.desc();


// var a=0;
// var b=async()=>{
//   a=a+await 10;
//   console.log(a);
// }
// b();
// a++;
// console.log(a);

// function getContinuous (arr) {
//   let res = [];
//   let temp = [];
//   arr.forEach((item, index) => {
//       if (item + 1 === arr[index + 1]) {
//           temp.push(item);
//       } else {
//           temp.push(item);
//           res.push(temp);
//           temp = [];
//       }
//   });
//   return res;
// }

// // js 判断一组数字是否连续，当出现连续数字时用‘-’输出。例如：[1,2,3,4,6,7,8,10] 输出：1-4|6-8|10
// const arr = [1, 2, 3, 4, 6, 7, 8, 10, 12, 13, 14];
// // 输出：1-4|6-8|10
// function getStr (arr) {
//   let str = '';
//   let temp = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] + 1 === arr[i + 1]) {
//       temp.push(arr[i]);
//     } else {
//       temp.push(arr[i]);
//       if (temp.length > 1) {
//         str += `${temp[0]}-${temp[temp.length - 1]}|`;
//       } else {
//         str += `${temp[0]}|`;
//       }
//       temp = [];
//     }
//   }
//   return str.slice(0, str.length - 1);
// }
// console.log('@@@0,',getStr(arr));
// console.log(getContinuous(arr));
// const [first, ...rest] = [1, 2, 3, 4, 5];
// console.log(first, rest);
// // 对象

// function generateAllRedStrings(n, current = "", result = []) {
//   if (n === 0) {
//     result.push(current);
//     return;
//   }

//   // 递归生成字符串
//   generateAllRedStrings(n - 1, current + 'r', result);
//   generateAllRedStrings(n - 1, current + 'e', result);
//   generateAllRedStrings(n - 1, current + 'd', result);
// }

// // 示例用法
// const n = 3; // 设置字符串长度
// const allRedStrings = [];
// generateAllRedStrings(n, "", allRedStrings);
// console.log(allRedStrings); // 输出所有情况

// console.log(NaN == NaN);
// console.log(null == undefined);
// console.log(!![]);
// console.log([]==true);

// console.log(isNaN('1'));
// console.log([] instanceof Array);
// console.log(parseInt('1a')===1);


// function toggleCase(str) {
//   return str.replace(/[a-z]/gi, function(char) {
//     return char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase();
//   });
// }

// let result = toggleCase('Hello World!');
// console.log(result); // hELLO wORLD!
// console.log(parseInt('0x111'));//273,16进制转10进制

// function foo () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(3);
//     }, 200);
//     reject('errMsg');
//   });
// }
// foo().then(res => console.log(res)).catch(err => console.log(err)).then(res => console.log(res)).catch(err => console.log(err));

// function fn(nums, k, t) {
//   const numLen = nums.length;
//   for (let i = 0; i < numLen; i++) {
//     for (let j = i + 1; j <= i + k && j < numLen; j++) {
//       if (Math.abs(nums[i] - nums[j]) <= t) {
//         return true;
//       }
//     }
//   }
//   return false;
// }


// let nums = [1, 2, 3, 1], k = 3, t = 0;
// console.log(fn(nums, k, t)); // true
// 二叉树
// function countPathsWithOneMoreOne(root) {
//   if (!root) {
//       return 0;
//   }

//   let count = 0;

//   function dfs(node, ones, zeros) {
//       if (!node) {
//           return;
//       }

//       ones += node.val === 1 ? 1 : 0;
//       zeros += node.val === 0 ? 1 : 0;

//       if (!node.left && !node.right) {
//           if (ones === zeros + 1) {
//               count++;
//           }
//           return;
//       }

//       dfs(node.left, ones, zeros);
//       dfs(node.right, ones, zeros);
//   }

//   dfs(root, 0, 0);
//   return count;
// }

// // 示例用法
// const tree = {
//   val: 1,
//   left: {
//       val: 0,
//       left: {
//           val: 0,
//           left: null,
//           right: null
//       },
//       right: {
//           val: 1,
//           left: null,
//           right: null
//       }
//   },
//   right: {
//       val: 0,
//       left: null,
//       right: {
//           val: 1,
//           left: null,
//           right: null
//       }
//   }
// };

// console.log(countPathsWithOneMoreOne(tree))// 2

// function robot(command) {
//   let x = 0;
//   let y = 0;

//   for (let i = 0; i < command.length; i++) {
//     const direction = command[i];
//     const step = Number(command[++i]);

//     switch(direction) {
//       case 'e':
//         x += step;
//         break;
//       case 'w':
//         x -= step;
//         break;
//       case 'n':
//         y += step;
//         break;
//       case 's':
//         y -= step;
//         break;
//     }
//   }

//   return [x, y];
// }

// const command = 'e1s1w2n2';
// // console.log(robot(command)); 
// // 定义菜单树形结构数据
// let menuData = {
//   id: 0,
//   children: [
//     {
//       id: 1,

//     },
//     {
//       id: 2,
//     },
//     {
//       id: 3,
//       children: [
//         {
//           id: 4,
//         },
//         {
//           id: 5,
//         },
//       ],
//     },

//   ]
// }
// let permissonData = [1,2,3,4];

// function filterMenu(menu, permissions) {
//   const result = {...menu};
//   filterNode(result);
//   return result;
//   function filterNode(node) {
//     if (!node) return;
//     if (node.children) {
//       node.children = node.children.filter(child => {
//         const hasPermission = permissions.includes(child.id);
//         if (hasPermission) {
//           filterNode(child);
//           return true;
//         }
//         return false;
//       });
//     }
//   }

// }
// console.log(filterMenu(menuData, permissonData));// { id: 0, children: [ { id: 1 }, { id: 2 } ] }


// 读取菜单数据和用户权限列表
// const menuInput = prompt('请输入菜单数据：');
// const userPermissionsInput = '1,2'

// const menuData = {"id":"0","children":[{"id":"1"},{"id":"2"},{"id":"3"}]}
// const userPermissions = new Set(userPermissionsInput.split(',').map(Number));

// // 定义函数来过滤菜单树
// function filterMenu(menu, userPermissions) {
//   // 如果当前节点没有子节点，检查用户权限是否包含该节点的id
//   if (!menu.children) {
//     const menuId = parseInt(menu.id);
//     return userPermissions.has(menuId);
//   }

//   // 如果当前节点有子节点，递归过滤子节点
//   menu.children = menu.children.filter((child) => filterMenu(child, userPermissions));

//   // 如果过滤后没有子节点，返回null，否则返回过滤后的子节点列表
//   if (menu.children.length === 0) {
//     return null;
//   } else {
//     return menu;
//   }
// }

// // 过滤菜单树
// const filteredMenu = filterMenu(menuData, userPermissions);

// // 输出结果
// console.log(JSON.stringify(filteredMenu));

// new Promise(()=>{
//   setTimeout(()=>{
//       console.log(1);
//   },0)
//   console.log(2);
// }).then().then(console.log(4));
// console.log(3);

// var ctx={
//   _val:30
// }
// var _val=10;
// function rootFn(){
//   console.log(this._val);
//   this._val=20;
//   function childFn(){
//       console.log(this._val);
//   }
//   return childFn;
// }
// rootFn.call(ctx)();
// console.log(ctx._val);

// function Parent(){
//   this.prop1 = 'prop1';
// }
// function Child(){
//   this.prop2 = 'prop2';
// }
// Child.prototype.prop3 = 'prop3';
// Child.prototype = new Parent();
// Child.prototype.prop4 = 'prop4';
// var child1 = new Child();
// for(var prop in child1){
//   console.log(prop);
// }

// function Dog(name) {
//   this.name = name;
// }
// var dog1 = new Dog('旺财');
// console.log(Dog.prototype.__proto__===Object.prototype);
// console.log(Object.prototype.__proto__===null);
// console.log(Dog.prototype.__proto__===Object.prototype);
// console.log(dog1.__proto__===Dog.prototype);

// function Person(name) {
//   this.name = name;
// }
// Person.prototype.age = 18;
// const p1 = new Person('小明');
// const p2 = new Person('小红');

// Person.prototype = {
//   age: 20
// }
// console.log(p1.age,p2.age);//true

// js编程：
// 在无限的平面上，机器人最初位于（0，0）处，面朝北方，机器人可以接受下列指令：
// G：直走一步
// B：后退一步
// L：左转90度
// R：右转90度
// 机器人按顺序执行一串指令instructions并一直重复执行它们。
// 只有在平面中存在环使得机器人永远无法离开时，返回true。否则，返回false。

// 示例1：
// 输入：instructions = "GGLLGG"
// 输出：true
// 解释：机器人从（0，0）移动到（0，2），转180度，然后回到（0，0）。重复这些指令后，机器人将永远处于平面上的（0，0）处。
// 请实现函数 function isCircle(instructions){}
// 请在此处编写实现代码
// function isCircle(instructions) {
//   let x = 0, y = 0, direction = 0;
//   const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
//   for (let i = 0; i < instructions.length; i++) {
//     const instruction = instructions[i];
//     switch (instruction) {
//       case 'G':
//         x += directions[direction][0];
//         y += directions[direction][1];
//         break;
//       case 'B':
//         x -= directions[direction][0];
//         y -= directions[direction][1];
//         break;
//       case 'L':
//         direction = (direction + 3) % 4;
//         break;
//       case 'R':
//         direction = (direction + 1) % 4;

//         break;
//     }
//   }
//   return x === 0 && y === 0;
// }
// // 测试
// console.log(isCircle('GG')); // true
// f2();
// var num = 123;
// function f1() 0
//   console.log(num);
// }
// function f2() {
//   var num = 456;
//   f1();
// }
// console.log(num);
// function versionSort(versions) {

//   return versions.sort((a, b) => {

//     const aParts = a.split('.');
//     const bParts = b.split('.');

//     for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
//       const aPart = parseInt(aParts[i]) || 0;  
//       const bPart = parseInt(bParts[i]) || 0;

//       if (aPart < bPart) return -1;
//       if (aPart > bPart) return 1;
//     }

//     return 0;

//   });

// }

// const versions = ['1.0', '0.1.1', '2.3.4', '3.4.5.6'];

// console.log(versionSort(versions)); 
// // ['0.1.1', '1.0', '2.3.4', '3.4.5.6']
// function findFaults(keywords, faults) {
//   const keywordSet = new Set(keywords);

//   const results = [];

//   for (let i = 0; i < faults.length; i++) {
//     const fault = faults[i];
//     const faultKeywords = new Set(fault.slice(1));

//     if (hasMatch(keywordSet, faultKeywords)) {
//       results.push(fault[0]);
//     }
//   }

//   return results;
// }

// function hasMatch(setA, setB) {
//   for (let key of setB) {
//     if (setA.has(key)) {
//       return true;
//     }
//   }

//   return false;
// }


// const keywords = ['启动', '电瓶'];
// const faults = [
//   ['引擎无法启动', '启动', '引擎'],
//   ['电瓶电量不足', '电瓶', '电量']  
// ];

// const results = findFaults(keywords, faults);

// console.log(results); // ['引擎无法启动', '电瓶电量不足']


// function parseQueryString(queryString) {
//   const params = new URLSearchParams(queryString);//URLSearchParams是一个内置对象，用于解析URL中的查询字符串
//   console.log(params);
//   // URLSearchParams { 'a' => '1', 'b' => '1', 'c.d' => '2', 'x.y.z' => '3' }
//   const result = {};

//   params.forEach((value, key) => {
//     const keys = key.split('.');
//     let currentObject = result;

//     keys.forEach((keyPart, index) => {
//       if (index === keys.length - 1) {
//         currentObject[keyPart] = value;
//       } else {
//         currentObject[keyPart] = currentObject[keyPart] || {};
//         currentObject = currentObject[keyPart];
//       }
//     });
//   });

//   return result;
// }

// // 示例用法
// const queryString = "?a=1&b=1&c.d=2&x.y.z=3";
// const parsedObject = parseQueryString(queryString);
// console.log(parsedObject);
// { a: '1', b: '1', c: { d: '2' }, x: { y: { z: '3' } } }


// function request(content, time) {
//   return () =>
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(content);
//       }, time);
//     });
// }

// class TaskRunner {
//   constructor(tasks, count) {
//     this.tasks = tasks;
//     this.count = count;
//   }

//   taskHandler() {
//     const minCount = Math.min(this.tasks.length, this.count);
//     for (let i = 0; i < minCount; i++) {
//       const task = this.tasks.shift();
//       this.count--;
//       this.run(task);
//     }
//   }

//   run(task) {
//     task()
//       .then(
//         (res) => {
//           console.log("checkResult:", res);
//         },
//         (err) => {
//           console.log("checkError:", err);
//         }
//       )
//       .finally(() => {
//         this.count++;
//         this.taskHandler();
//       });
//   }
// }

// const runner = new TaskRunner(
//   [request(1, 3000), request(2, 2000), request(3, 800), request(4, 1200), request(5, 1500)],
//   2
// );
// runner.taskHandler();

// // 千分位分隔
// function formatNumber(num) {
//   const parts = num.toString().split('.');
//   const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
//   const decimalPart = parts[1] || '';
//   return `${integerPart}.${decimalPart}`;
// }
// // console.log(formatNumber(123456789.123456789));//123,456,789.12345679

// function formatNumber2(num) {
//   return num.toLocaleString('en');
// }
// // console.log(formatNumber2(123456789.123456789));//123,456,789.123,美式英语小数点后面只有三位
// // console.log(formatNumber2(123456789));//123,456,789

// function formatNumber3(num) {
//   const parts = num.toString().split('.');
//   const integerPart = parts[0];
//   const decimalPart = parts[1] || '';
//   let result = '';
//   let count = 0;
//   for (let i = integerPart.length - 1; i >= 0; i--) {
//     count++;
//     result = integerPart[i] + result;//从后往前拼接
//     if (count % 3 === 0 && i !== 0) {//每三位加一个逗号，但是第一位不加
//       result = ',' + result;
//     }
//   }
//   return `${result}.${decimalPart}`;
// }
// // console.log(formatNumber3(123456789.123456789))

// 并发请求函数
// const concurrencyRequest = (urls, maxNum) => {
//   return new Promise((resolve) => {
//       if (urls.length === 0) {
//           resolve([]);
//           return;
//       }
//       const results = [];
//       let index = 0; // 下一个请求的下标
//       let count = 0; // 当前请求完成的数量

//       // 发送请求
//       async function request() {
//           if (index === urls.length) return;
//           const i = index; // 保存序号，使result和urls相对应
//           const url = urls[index];
//           index++;
//           console.log(url);
//           try {
//               const resp = await fetch(url);
//               // resp 加入到results
//               results[i] = resp;
//           } catch (err) {
//               // err 加入到results
//               results[i] = err;
//           } finally {
//               count++;
//               // 判断是否所有的请求都已完成
//               if (count === urls.length) {
//                   console.log('完成了');
//                   resolve(results);
//               }
//               request();
//           }
//       }

//       // maxNum和urls.length取最小进行调用
//       const times = Math.min(maxNum, urls.length);
//       for(let i = 0; i < times; i++) {
//           request();
//       }
//   })
// }
// const urls = [];
// for (let i = 1; i <= 20; i++) {
//     urls.push(`https://jsonplaceholder.typicode.com/todos/${i}`);
// }
// concurrencyRequest(urls, 3).then(res => {
//     console.log(res);
// })

// function kebabToCamel(str) {
//   return str.replace(/[-][a-z]/g, function(match) {
//     console.log(match);
//     return match.charAt(1).toUpperCase();
//   });
// }

// const kebabCaseStr = "my-variable-name";
// const camelCaseStr = kebabToCamel(kebabCaseStr);
// console.log(camelCaseStr); // 输出 "myVariableName"


// // 原地删除一个有序数组中的重复2次以上的项，返回删除后的数组长度
// function removeDuplicates(nums) {
//   let i = 0;
//   for (let j = 0; j < nums.length; j++) {
//       if (nums[j] !== nums[i - 2]) {// i-2是因为最多重复两次
//           nums[i] = nums[j];
//           i++;
//       }
//   }
//   return i;
// }
// // 测试
// const nums = [1, 1, 1, 2,2, 2, 3];
// // const length = removeDuplicates(nums);
// // console.log(length); // [1, 1, 2, 2, 3]
// class A {
//   constructor() {
//     this.promise = Promise.resolve(); // 初始化一个已解决的 Promise
//   }

//   log(str) {
//     // 将 log 操作添加到 Promise 链中
//     this.promise = this.promise.then(() => {
//       console.log(str);
//       return this; // 返回类实例自身
//     });
//     return this; // 返回类实例自身
//   }

//   wait(delay) {
//     // 将 wait 操作添加到 Promise 链中
//     this.promise = this.promise.then(() => {
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           resolve(this); // 返回类实例自身
//         }, delay);
//       });
//     });
//     return this; // 返回类实例自身
//   }

//   // 添加一个结束方法，以便在链式调用结束后执行其他操作
//   end() {
//     return this.promise;
//   }
// }

// // 使用示例
// new A()
//   .log("a")
//   .wait(10)
//   .log("b")
//   .wait(2000)
//   .wait(10)
//   .log("c")
//   .end()
//   .then(() => {
//     console.log("Chain completed.");
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

function combine(str1, str2) {
  const res = [];
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      res.push(str1[i] + str2[j]);
    }
  }
  return res;
}
console.log(combine([''],'abc'));