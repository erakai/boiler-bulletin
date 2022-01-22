import { Card, Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.svg"

function Post({post}) {
    if (typeof post == 'undefined') {
        post = {
            title: "None",
            votes: "0"
        }
    }
        
    return (
        <Card>
            <Card.Body>
                <Container className="justify-content-center">
                    <Row className="border">
                        <Col xs lg="2" className="border">
                            <img
                            alt=""
                            src={logo}
                            width="100"
                            height="100"
                            className="img-fluid"
                            />{' '}
                        </Col>
                        <Col className="border"><a href={post.link}>{post.title}</a></Col>
                        <Col xs lg="2" className="border ml-auto">
                            <span className="text-right">{post.votes}</span>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default Post;