import { getDatabase, set, ref, onValue, get, child } from 'firebase/database';

const db = getDatabase(); // Might have to individually put this in each function
const POST_LINK = 'posts/'

function convertToArray(json) {
    var array = [];
    for (var i in json) 
        array.push([i, json[i]]);
    console.log(array)
    return array
}

export function writePost(postId, title, link) {
    set(ref(db, POST_LINK + postId), {
        title: title,
        link: link
    });
}

//where updatePosts is some function that takes in the new data
export function retrieveRealTimePosts(updatePosts) {
    const postRef = ref(db, POST_LINK);
    onValue(postRef, (snapshot) => {
        const data = snapshot.val();
        updatePosts(convertToArray(data))
    })
}

//this function returns a snapshot of the posts
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