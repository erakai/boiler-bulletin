import { Row, Col, Container } from "react-bootstrap";
import Post from "../components/Post";

function PostManager(props) {
    return (
        <div>
            <br />
            <Container flud="md">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Row xs={1} md={1} lg={1} xl={1} sm={1} xxl={1} className="g-4">
                    <Col>
                        <Post />
                    </Col>
                </Row>
            ))}
            </Container>
        </div>
    );
}

export default PostManager;