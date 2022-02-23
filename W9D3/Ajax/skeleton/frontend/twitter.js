const FollowToggle = require("./follow_toggle");

document.addEventListener("DOMContentLoaded", () => {
    
    for (let i = 0; i < $(".follow-toggle").length; i++) {
        let button = new FollowToggle($(".follow-toggle")[i], i);
        let actualEle = $(".follow-toggle")[i];
        // actualEle.addEventListener("click", () => {console.log("Hi")});
        button.render();        
    }
});

