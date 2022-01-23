import React, { useState, useEffect } from 'react'
import { Row, Col, Container } from "react-bootstrap";
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

    const numberSort = function (a,b) {
        return Number(a) - Number(b);
    };

    useEffect(() => {
        console.log("UPDATED DICTIONARY AND SCORES")
        var scores = getPostsWithScore(posts)
        console.log(scores)
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
                    return (
                    <div key={i}>
                        <Row className="g-4">
                            <Post postId={sortedPosts.postDict[score][0]} post={sortedPosts.postDict[score][1]}/>
                        </Row>
                    </div> )
                })
            }
            </Container>
        </div>
    );
}

export default PostManager;