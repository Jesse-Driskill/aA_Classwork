/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {

function FollowToggle(el, i) {
    this.i = i;
    this.nonWrapped = el;
    this.wrapper = $(el);
    this.userId = this.wrapper.data("userId");
    this.followState = this.wrapper.data("initialFollowState");
    // this.nonWrapped.addEventListener("click", this.handleClick);
    this.boundClick = this.handleClick.bind(this);
    // let that = this;
    this.nonWrapped.addEventListener("click", this.boundClick);
    console.log(this.followState === false);
    console.log(this.followState);
}

FollowToggle.prototype.render = function() {
    if (this.followState === true) {
        $(".follow-toggle")[this.i].innerHTML = "Unfollow!";
    } else {
        $(".follow-toggle")[this.i].innerHTML = "Follow!";
    }
}

FollowToggle.prototype.handleClick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    let type = "POST";

    if (this.followState === true) {
        type = "DELETE";
    }

    // console.log(this);
    $.ajax({
        // url: "/users/user_id/follow",
        url: `/users/${this.userId}/follow`,
        method: type,
        dataType: "json"
        // data: {
        //     follow: {
        //         "follower-id": this.userId,
        //     }

        // }

    }).then( () => {
        // console.log('erfkjhfeiuwrhferj');
        if (this.followState === true) {
            this.followState = false;
        }
        else {
            this.followState = true;
        }

        this.render();
    });
//    function success() {
        // if (this.followState === true) {
        //     this.followState = false;
        // }
        // else {
        //     this.followState = true;
        // }

        // this.render();
        // console.log('erfkjhfeiuwrhferj');
//     }
    // console.log(this);
}



module.exports = FollowToggle;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");

document.addEventListener("DOMContentLoaded", () => {
    
    for (let i = 0; i < $(".follow-toggle").length; i++) {
        let button = new FollowToggle($(".follow-toggle")[i], i);
        let actualEle = $(".follow-toggle")[i];
        // actualEle.addEventListener("click", () => {console.log("Hi")});
        button.render();        
    }
});


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map