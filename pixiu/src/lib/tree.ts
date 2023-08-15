// import * as vscode from 'vscode'

// const c1Tree = {
//   '1': {
//     '作者': "lulu",
//     '宠物': {
//       '名字': 'cc',
//       '品种': '金毛',
//       '年龄': 6,
//     }
//   },
//   '2': {
//     '作者': "lulu2",
//     '宠物': {
//       '名字': 'cc2',
//       '品种': '金毛',
//       '年龄': 9,
//     }
//   },
//   '3': '单独的字符串'
// }

// function aNodeWithIdTreeDataProvider() {
//   return {
//     getChildren: (el) => {
//       const arr = [];
//       const tree = el || c1Tree;
//       for (let item in tree) {
//         const activeItem = tree[item];
//         if (typeof activeItem !== 'object') {
//           arr.push(`${item}：${activeItem}`)
//         } else {
//           Object.defineProperty(activeItem, "_cc_key", {
//             get: function () { return item },
//             enumberable: false
//           });
//           arr.push(activeItem)
//         }
//       }
//       return arr
//     },
//     getTreeItem: (el) => {
//       let treeItem = {};
//       if (typeof el === 'string') {
//         treeItem = {
//           label: el,
//           collapsibleState: 0,
//           tooltip: "hover: 单纯的字符串 ",
//         }
//       } else {
//         treeItem = {
//           label: el._cc_key,
//           collapsibleState: 1,
//           tooltip: "hover: 可展开 ",
//         }
//       }
//       return treeItem;
//     },
//     getParent: () => {
//       return {}
//     }
//   };
// }

// const tree = vscode.window.createTreeView('c1', {
//   treeDataProvider: aNodeWithIdTreeDataProvider(),
//   showCollapseAll: true
// })

// export default tree