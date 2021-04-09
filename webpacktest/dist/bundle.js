/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _circle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./circle.js */ \"./js/circle.js\");\n/* harmony import */ var _point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point.js */ \"./js/point.js\");\n/* harmony import */ var _particle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./particle.js */ \"./js/particle.js\");\n\r\n\r\n\r\n\r\nconst particlesNum = 500;\r\n\r\nclass App{\r\n    constructor(){\r\n        this.canvas = document.getElementById('canvas1');\r\n        this.ctx = this.canvas.getContext('2d');\r\n\r\n        this.canvas.width = window.innerWidth;\r\n        this.canvas.height = window.innerHeight;\r\n        \r\n        this.mousePos = new _point_js__WEBPACK_IMPORTED_MODULE_1__.default();\r\n\r\n        this.items = [];\r\n        this.particles = [];\r\n        this.items.push(new _circle_js__WEBPACK_IMPORTED_MODULE_0__.default(1000,400))\r\n        this.clickeffect = new _circle_js__WEBPACK_IMPORTED_MODULE_0__.default(this.canvas.width/2,this.canvas.height/2);\r\n        this.clickeffect.size=170;\r\n        this.clickeffect.bigbangeffect=true;\r\n\r\n        \r\n        window.addEventListener('mousedown',this.handleMouseDown.bind(this),false);\r\n        this.particleinit();\r\n        this.animate();\r\n    }\r\n\r\n    particleinit(){\r\n        for(let i =0;i<particlesNum;i++){\r\n            this.particles.push(new _particle_js__WEBPACK_IMPORTED_MODULE_2__.default(this.canvas.width/2,this.canvas.height/2,i*500));\r\n        }\r\n    }\r\n\r\n    handleMouseDown(e){ \r\n        let rect = this.canvas.getBoundingClientRect();\r\n\r\n        let scaleX = this.canvas.width/rect.width;\r\n        let scaleY = this.canvas.height/rect.height;\r\n\r\n        //resize된 캔버스 마우스 pos 재정렬\r\n        this.mousePos.x = (e.clientX - rect.left)*scaleX\r\n        this.mousePos.y = (e.clientY - rect.top)*scaleY\r\n\r\n        this.clickeffect.down(this.mousePos.clone());\r\n        /*\r\n        for(let i=0;i<this.items.length;i++){\r\n            const item = this.items[i].down(this.mousePos.clone());\r\n\r\n        }\r\n        */\r\n        \r\n    }\r\n    bigbangupdate(){\r\n        this.particles.forEach(p =>{\r\n            p.update();\r\n        })\r\n    }\r\n\r\n    bigbangrender(){\r\n        this.particles.forEach(p =>{\r\n            p.render(this.ctx);\r\n        })\r\n    }\r\n\r\n    animate(){\r\n        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);\r\n        \r\n        if(this.clickeffect.size<=0){\r\n           this.bigbangupdate();\r\n           this.bigbangrender();\r\n        }\r\n        if(this.clickeffect!==null){\r\n            this.clickeffect.draw(this.ctx);\r\n        }\r\n        /*\r\n        for(let i=0;i<this.items.length;i++){\r\n            this.items[0].draw(this.ctx);\r\n        }\r\n        */\r\n        \r\n        \r\n       \r\n        requestAnimationFrame(this.animate.bind(this));\r\n\r\n    }\r\n}\r\n\r\nwindow.onload = () =>{\r\n    new App();\r\n}\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/circle.js":
/*!**********************!*\
  !*** ./js/circle.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point.js */ \"./js/point.js\");\n\r\n\r\nclass Circle{\r\n    constructor(x,y){\r\n        this.size = 80;\r\n        this.pos = new _point_js__WEBPACK_IMPORTED_MODULE_0__.default(x,y);\r\n        this.isDown = false;\r\n        this.bigbangeffect = false;\r\n    }\r\n\r\n    draw(ctx){\r\n        if(this.bigbangeffect){\r\n            if(this.isDown && this.size>0){\r\n                this.size -= 1;\r\n            }else{\r\n                this.isDown=false;\r\n            }\r\n\r\n            if(this.size<0){\r\n                this.size =0;\r\n            }\r\n            \r\n            ctx.fillStyle='red';\r\n            ctx.strokeStyle = 'blue';\r\n            ctx.lineWidth = 5;\r\n            ctx.beginPath();\r\n            ctx.arc(this.pos.x,this.pos.y,this.size,0,Math.PI*2);\r\n            ctx.closePath();\r\n            ctx.fill();\r\n            ctx.stroke();\r\n            \r\n\r\n        }else{\r\n            if(this.isDown && this.size<1600){\r\n                this.size += 50;\r\n            }else{\r\n                this.isDown=false;\r\n            }\r\n            ctx.fillStyle='red';\r\n            ctx.strokeStyle = 'blue';\r\n            ctx.lineWidth = 5;\r\n            ctx.beginPath();\r\n            ctx.arc(this.pos.x,this.pos.y,this.size,0,Math.PI*2);\r\n            ctx.closePath();\r\n            ctx.fill();\r\n            ctx.stroke();\r\n        }\r\n        \r\n    }\r\n\r\n    down(point){\r\n        if(this.pos.radiuscollide(point,this.size)){\r\n            this.isDown = true;\r\n\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Circle);\n\n//# sourceURL=webpack:///./js/circle.js?");

/***/ }),

/***/ "./js/particle.js":
/*!************************!*\
  !*** ./js/particle.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst particlesNum = 2000;\r\n\r\n\r\n\r\nclass Particle{\r\n    constructor(x,y,hue){\r\n        this.x = x;\r\n        this.y = y;\r\n        this.w = Math.random()*30;\r\n \r\n        this.hue=0;\r\n        this.color = 'hsla('+hue+',100%,50%,0.8)';\r\n        this.dir = Math.random() * Math.PI*2;\r\n        this.vel = {x:Math.cos(this.dir),y:Math.sin(this.dir)}\r\n        this.speed = Math.random() * 10;\r\n\r\n    }\r\n\r\n    render(ctx){\r\n        ctx.fillStyle = this.color;\r\n        ctx.beginPath();\r\n        ctx.arc(this.x,this.y,this.w,0,Math.PI*2);\r\n        ctx.fill();\r\n    \r\n    }\r\n\r\n    update(){\r\n         this.x += this.vel.x * this.speed;\r\n         this.y += this.vel.y * this.speed;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Particle);\n\n//# sourceURL=webpack:///./js/particle.js?");

/***/ }),

/***/ "./js/point.js":
/*!*********************!*\
  !*** ./js/point.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Point{\r\n    constructor(x,y){\r\n        this.x = x || 0;\r\n        this.y = y || 0;\r\n    }\r\n\r\n    add(point){\r\n        this.x += point.x;\r\n        this.y += point.y;\r\n    }\r\n\r\n    clone(){\r\n        return new Point(this.x,this.y);\r\n    }\r\n\r\n    subtract(point){\r\n        this.x-=point.x;\r\n        this.y-=point.y;\r\n    }\r\n\r\n    reduce(value){\r\n        this.x *=value;\r\n        this.y*=value;\r\n    }\r\n\r\n    collide(point,width,height){\r\n        if(this.x>=point.x&&\r\n            this.x<=point.x+width&&\r\n            this.y>=point.y&&\r\n            this.y<=point.y+height){\r\n                return true\r\n        }else{\r\n                return false\r\n        }\r\n    }\r\n    radiuscollide(point,radius){\r\n        if(Math.sqrt(Math.pow(this.x-point.x,2)+Math.pow(this.y-point.y,2))<radius){\r\n            return true;\r\n        }else{\r\n            return false;\r\n        }\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Point);\n\n//# sourceURL=webpack:///./js/point.js?");

/***/ })

/******/ 	});
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/app.js");
/******/ 	
/******/ })()
;