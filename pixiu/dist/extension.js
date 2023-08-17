/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const vscode = __webpack_require__(2);
const msg = vscode.commands.registerCommand('pixiu.helloWorld', () => {
    vscode.window.showInformationMessage('第一个demo弹出信息!');
    vscode.window.showWarningMessage('第一个警告信息');
    vscode.window.showErrorMessage('第一个错误信息!');
});
exports["default"] = msg;


/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const vscode = __webpack_require__(2);
const nav = vscode.commands.registerCommand('pixiu.nav', () => {
    let day = new Date();
    day.setTime(day.getTime() + 24 * 60 * 60 * 1000);
    let date = day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate();
    vscode.window.showInformationMessage(`明天是: ${date}`);
});
exports["default"] = nav;


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const vscode = __webpack_require__(2);
const progress = vscode.commands.registerCommand('pixiu.progress', () => {
    vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: "载入xxxx的进度...",
        cancellable: true
    }, (progress) => {
        // 初始化进度
        progress.report({ increment: 0 });
        setTimeout(() => {
            progress.report({ increment: 10, message: "在努力。。。." });
        }, 1000);
        setTimeout(() => {
            progress.report({ increment: 40, message: "马上了..." });
        }, 2000);
        setTimeout(() => {
            progress.report({ increment: 50, message: "这就结束..." });
        }, 3000);
        const p = new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 5000);
        });
        return p;
    });
});
exports["default"] = progress;


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const vscode = __webpack_require__(2);
const px = vscode.commands.registerCommand('pixiu.px', () => {
    vscode.window.showInformationMessage('Welcome to use 曹操!');
});
exports["default"] = px;


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const vscode = __webpack_require__(2);
const config_1 = __webpack_require__(7);
const welcome = () => {
    console.log(`Congratulations, ${config_1.default.appName} is now active!`);
    vscode.window.showInformationMessage(`${config_1.default.appName} is ready`);
};
exports["default"] = welcome;


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = {
    appName: 'pixiu'
};


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const vscode = __webpack_require__(2);
const hi = vscode.commands.registerCommand('pixiu.hi', () => {
    let day = new Date();
    day.setTime(day.getTime() + 24 * 60 * 60 * 1000);
    let date = day.getFullYear() + "-" + (day.getMonth() + 1) + "-" + day.getDate();
    vscode.window.showInformationMessage(`明天是: ${date}`);
});
exports["default"] = hi;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
const msg_1 = __webpack_require__(1);
const nav_1 = __webpack_require__(3);
const progress_1 = __webpack_require__(4);
// import hover from './lib/hover'
const px_1 = __webpack_require__(5);
const welcome_1 = __webpack_require__(6);
const hi_1 = __webpack_require__(8);
function activate(context) {
    (0, welcome_1.default)();
    context.subscriptions.push(hi_1.default);
    context.subscriptions.push(msg_1.default);
    context.subscriptions.push(px_1.default);
    context.subscriptions.push(nav_1.default);
    context.subscriptions.push(progress_1.default);
    // context.subscriptions.push(hover)
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map