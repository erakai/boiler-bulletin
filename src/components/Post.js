import { Card, Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.svg"

function Post(props) {
    return (
        <Card>
            <Card.Body className="">
                <Container className="mx-auto d-flex">
                    <Row>
                        <Col>
                            <img
                            alt=""
                            src={logo}
                            width="50"
                            height="50"
                            className=""
                            />{' '}
                        </Col>
                        <Col className="">
                            <p>Title</p>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default Post;