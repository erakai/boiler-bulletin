function PostAlg(upvotes, views, time_creation, time_update) {
    var score = (upvotes + (.002 * views) + 0.75);

    var time_of_creation = (new Date(time_creation)).getTime()
    var time_of_update = ((new Date(time_update)).getTime())
    
    var time_since_creation = (new Date()).getTime() - time_of_creation;
    var time_since_update = (new Date()).getTime() - time_of_update;

    var hours_since_creation = (time_since_creation / (1000 * 60 * 60)).toFixed(1);
    var hours_since_update = (time_since_update / (1000 * 60 * 60)).toFixed(1);

    var decay = 1 + Math.pow(hours_since_creation, 1.8) - Math.pow(hours_since_creation - hours_since_update, 1.2);
    return (score / decay);
}

export default PostAlg;