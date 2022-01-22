import { Row, Col, Container } from "react-bootstrap";
import Post from "../components/Post";
import PostAlg from "../utils/PostAlg";

function getPostsWithScore(posts) {
    var postsWithScore = {};
    var score = 0;
    for (var i = 0; i < posts.length; i++) {
        score = PostAlg(posts[i][1].votes, 0, posts[i][1].date, posts[i][1].date);
        postsWithScore[score] = posts[i];
    }
    return postsWithScore;
}

function PostManager({posts}) {
    const numberSort = function (a,b) {
        return a - (b + .0001);
    };
    const postsWithScore = getPostsWithScore(posts);
    const sortedScores = Object.keys(postsWithScore).sort(numberSort).reverse();
    console.log(sortedScores)
    return (
        <div>
            <br />
            <Container flud="md">
            {
                sortedScores.map((score, i) => {
                    return (
                    <div key={i}>
                        <Row className="g-4">
                            <Post postId={postsWithScore[score][0]} post={postsWithScore[score][1]}/>
                        </Row>
                    </div> )
                })
            }
            </Container>
        </div>
    );
}

export default PostManager;