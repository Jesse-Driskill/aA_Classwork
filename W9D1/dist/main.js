/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\")\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nconst DEFAULT = {\n    COLOR: \"gray\",\n    RADIUS: 30, \n    SPEED: 5\n}\n\n\nfunction Asteroid(options) {\n    //options = options || {};\n    options.color = DEFAULT.COLOR;\n    options.radius = DEFAULT.RADIUS;\n    options.vel = Util.randomVec(DEFAULT.SPEED);\n    options.pos = options.pos;\n    \n\n    MovingObject.call(this, options);\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\n\nconst mo = new Asteroid({\n    pos: [30, 30],\n    vel: [10, 10],\n    radius: 5,\n    color: \"#00FF00\"\n});\n\nconsole.log(mo);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\nfunction Game () {\n    this.asteroids = [];\n    this.addAsteroids();\n}\n\nconst DIM_X = 1500;\nconst DIM_Y = 1500;\nconst NUM_ASTEROIDS = 10;\n\nGame.prototype.randomPosition = function() {\n    return [DIM_X * Math.random(), DIM_Y * Math.random()];\n}\n\nGame.prototype.addAsteroids = function() {\n    for (let i = 0; i < NUM_ASTEROIDS; i++) {\n        this.asteroids.push(new Asteroid({\n            pos: this.randomPosition()\n        }));\n    }\n}\n//sup = new GameView(new Game(), document.getElementById('game-canvas').getContext('2d'));\n//sup.draw(document.getElementById('game-canvas').getContext('2d'));\nGame.prototype.draw = function (ctx) {\n    ctx.clearRect(0, 0, DIM_X, DIM_Y);\n    //ctx.clearRect(0, 0, 500, 500);\n    ctx.fillStyle = \"white\";\n    ctx.fillRect(0, 0, DIM_X, DIM_Y);\n\n    this.asteroids.forEach(ele => {\n        ele.draw();\n    })\n}\n\nGame.prototype.moveObjects = function (context) {\n    context.asteroids.forEach(ele => {\n        ele.move();\n    });\n    console.log(context);\n    console.log(context.asteroids);\n}\n\n// Game.prototype.wrap = function(pos) {\n//     if (pos[0] < 0) {\n//         pos[0] = DIM_X;\n\n//     }\n//     else if (pos[0] > DIM_X) {\n//         pos[0] = 0;\n//     }\n\n//     if (pos[1] < 0) {\n//         pos[1] = DIM_Y;\n\n//     }\n//     else if (pos[1] > DIM_Y) {\n//         pos[1] = 0;\n//     }\n\n//     return pos;\n// }\n\nmodule.exports = Game;\n\n// let newGame = new Game();\n// console.log(newGame.addAsteroids());\n// console.log(newGame.asteroids);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView(game, ctx) {\n    this.game = game;\n    this.ctx = ctx;\n\n}\n\n\n\nGameView.prototype.start = function(context) {\n    let that = context;\n    setInterval(function () {that.game.moveObjects(that.game);\n    that.game.draw(ctx)}, 200);\n\n    // setInterval(this.moveObjects(this), 10);\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\r\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\r\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\r\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\r\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\r\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\r\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\r\n\r\n\r\n\r\n\r\nconsole.log(\"Webpack is working!\");\r\nwindow.addEventListener('DOMContentLoaded', (event) => {\r\n    \r\n    console.log('DOM fully loaded and parsed');\r\n    ctx = document.getElementById(\"game-canvas\").getContext('2d');\r\n    sup = new GameView(new Game(), ctx);\r\n    sup.game.draw(ctx);\r\n    sup.start(sup);\r\n\r\n    // sup.game.addAsteroids();\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.MovingObject = MovingObject;\r\nwindow.Asteroid = Asteroid;\r\nwindow.Game = Game;\r\nwindow.GameView = GameView;\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nfunction MovingObject(options) {\n\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n}\n\nMovingObject.prototype.draw = function() {\n    let gameCanvas = document.getElementById(\"game-canvas\");\n    let ctx = gameCanvas.getContext('2d');\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n    ctx.lineWidth = 10;\n    ctx.stroke();\n    \n    ctx.fill();\n}\n\nMovingObject.prototype.move = function() {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n\n    Util.wrap(this.pos);\n}\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ (() => {

eval("\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("\r\nDIM_X = 1500;\r\nDIM_Y = 1500;\r\n\r\nconst Util = {\r\n    inherits(childClass, parentClass) {\r\n        childClass.prototype = Object.create(parentClass.prototype);\r\n        childClass.prototype.constructor = childClass;\r\n    },\r\n\r\n    randomVec(length) {\r\n        const deg = 2 * Math.PI * Math.random();\r\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\r\n    },\r\n      // Scale the length of a vector by the given amount.\r\n    scale(vec, m) {\r\n        return [vec[0] * m, vec[1] * m];\r\n    },\r\n\r\n    wrap(pos) {\r\n        if (pos[0] < 0) {\r\n            pos[0] = DIM_X;\r\n    \r\n        }\r\n        else if (pos[0] > DIM_X) {\r\n            pos[0] = 0;\r\n        }\r\n    \r\n        if (pos[1] < 0) {\r\n            pos[1] = DIM_Y;\r\n    \r\n        }\r\n        else if (pos[1] > DIM_Y) {\r\n            pos[1] = 0;\r\n        }\r\n    \r\n        return pos;\r\n    }\r\n};\r\n\r\nmodule.exports = Util;\r\n\n\n//# sourceURL=webpack:///./src/util.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;