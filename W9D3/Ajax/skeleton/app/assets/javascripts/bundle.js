/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
/// Must fix after lunch :)

for (let i = 0; i < $(".follow-toggle").length; i++) {
  let button = new FollowToggle($(".follow-toggle")[i]);
  if (button.followState === true) {
    button.append("Unfollow");
  } else {
    button.append("Follow");
  }
}
/******/ })()
;
//# sourceMappingURL=bundle.js.map