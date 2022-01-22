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
                        <Row xs={1} md={1} lg={1} xl={1} sm={1} xxl={1} className="g-4">
                            <Col>
                                <Post postId={post[0]} post={post[1]}/>
                            </Col>
                        </Row>
                    </div> )
                })
            }
            </Container>
        </div>
    );
}

export default PostManager;