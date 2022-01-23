import { getAuth } from 'firebase/auth';
import React, { useState, useEffect } from 'react'
import { Row, Container } from "react-bootstrap";
import { retrieveRealTimeVotes, updatePost } from "../utils/FirebaseManager";
import Post from "../components/Post";
import PostAlg from "../utils/PostAlg";

function getPostsWithScore(posts) {
    var postsWithScore = {};
    var score = 0;
    for (var i = 0; i < posts.length; i++) {
        score = PostAlg(posts[i][1].votes, 0, posts[i][1].date, posts[i][1].date) + Math.random() * (.001 - .0001) + .0001;
        postsWithScore[score] = posts[i];
    }
    return postsWithScore;
}

function PostManager({posts}) {
    const [sortedPosts, setSortedPosts] = useState({
        postDict: {},
        sortedScores: []
    })
    const [allVotes, setAllVotes] = useState([])

    const numberSort = function (a,b) {
        return Number(a) - Number(b);
    };

    useEffect(() => {
        retrieveRealTimeVotes(setAllVotes)
    }, [])

    useEffect(() => {
        var scores = getPostsWithScore(posts)
        setSortedPosts({
            postDict: scores,
            sortedScores: Object.keys(scores).sort(numberSort).reverse() 
        })


        return () => {
            setSortedPosts({
                postDict: {},
                sortedScores: []
            })
        }
    }, [posts])

    return (
        <div>
            <br />
            <Container flud="md">
            {
                sortedPosts.sortedScores.map((score, i) => {
                    var userVoteOnPost = 0;
                    var voteId = (new Date()).getTime();
                    for (var j = 0; j < allVotes.length; j++) {
                        console.log(allVotes[j])
                        if (allVotes[j][1].user_id == getAuth().currentUser.uid) {
                            if (allVotes[j][1].post_id == sortedPosts.postDict[score][0]) {
                                voteId = allVotes[j][0]
                                if (allVotes[j][1].vote_state == "up") {
                                    userVoteOnPost = 1;
                                } else if (allVotes[j].vote_state == "down") {
                                    userVoteOnPost = 2;
                                }
                            }
                        }
                    }
                    return (
                    <div key={i}>
                        <Row className="g-4">
                            <Post postId={sortedPosts.postDict[score][0]} post={sortedPosts.postDict[score][1]} initalVoteState={userVoteOnPost} voteId={voteId}/>                        </Row>
                    </div> )
                })
            }
            </Container>
        </div>
    );
}

export default PostManager;