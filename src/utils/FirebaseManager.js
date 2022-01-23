import { getDatabase, set, ref, onValue, get, child, update } from 'firebase/database';

const db = getDatabase(); // Might have to individually put this in each function
const POST_LINK = 'posts/'

/*

const post = {
    title:
    link:
    date:
    type:
    votes:
    description:
    tags: []
}

Eventually add tags, description, group size.
*/

// ------------- POSTS ------------- 

function convertToArray(json) {
    var array = [];
    for (var i in json) array.push([i, json[i]]);
    return array
}

export function writePost(postId, post) {
    set(ref(db, POST_LINK + postId), {
        title: post.title,
        link: post.link,
        date: post.date,
        type: post.type,
        votes: post.votes,
        description: post.description,
        tags: post.tags
    });
}

export function updatePost(postId, post) {
    var postRef = ref(db)
    const updates = {}
    updates[POST_LINK + postId] = post
    update(postRef, updates)
}

//where updatePosts is some function that takes in the new data
export function retrieveRealTimePosts(updatePosts) {
    const postRef = ref(db, POST_LINK);
    onValue(postRef, (snapshot) => {
        const data = snapshot.val();
        updatePosts(convertToArray(data))
    })
}

//this function returns a snapshot of the posts (slower, bad, etc)
export function retrieveAllPosts(updatePosts) {
    const dbRef = ref(getDatabase())
    get(child(dbRef, POST_LINK)).then((snapshot) => {
        if (snapshot.exists()) {
            var data = snapshot.val()
            updatePosts(convertToArray(data))
        }
        console.log("No Data!")
    }).catch((error) => {
        console.log(error);
    })
}

// ------------- USER_VOTE_POSTS ------------- 

const USERS_VOTE_POSTS_LINK = 'users_vote_posts/'

/*

const vote = {
    post_id:
    vote_state: ("up" or "down")
}

*/

export function writeVote(userId, vote) {
    set(ref(db, USERS_VOTE_POSTS_LINK + userId), {
        post_id: vote.post_id,
        vote_state: vote.vote_state 
    });
}

export function updateVote(userId, vote) {
    var voteRef = ref(db)
    const updates = {}
    updates[USERS_VOTE_POSTS_LINK + userId] = vote
    update(voteRef, updates)
}

