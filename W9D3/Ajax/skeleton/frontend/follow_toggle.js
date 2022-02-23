function FollowToggle(el) {
    this.userId = el["user-id"];
    this.followState = el["initial-follow-state"];
    this.wrapper = $(el);
}

module.exports = FollowToggle;