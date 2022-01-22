function PostAlg(upvotes, views, time_creation, time_update) {
    var score = (upotes + (.002 * views) + 0.75);
    var decay = (1 + Math.pow(time_creation, 1.8) - Math.pow(time_creation - time_update, 1.2));
    return score / decay;
}

export default PostAlg;