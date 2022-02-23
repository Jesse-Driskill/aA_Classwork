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
        if (this.followState === true) {
            this.followState = false;
        }
        else {
            this.followState = true;
        }

        this.render();
        // console.log('erfkjhfeiuwrhferj');
//     }
    // console.log(this);
}



module.exports = FollowToggle;