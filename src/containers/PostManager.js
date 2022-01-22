import { Row, Col, Container } from "react-bootstrap";
import Post from "../components/Post";

function PostManager({posts}) {
    return (
        <div>
            <br />
            <Container flud="md">
            {
                posts.map((post, i) => {
                    return (
                    <div key={i}>
                        <Row className="g-4">
                            <Post post={post[1]}/>
                        </Row>
                    </div> )
                })
            }
            </Container>
        </div>
    );
}

export default PostManager;