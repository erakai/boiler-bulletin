import React, { useState } from 'react'
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import logo from "../assets/logo.svg"
import { updatePost } from "../utils/FirebaseManager";
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";

const Post = ({postId, post}) => {
    const [hasVoted, setVoted] = useState(false)

    if (typeof post == 'undefined') {
        post = {
            title: "None",
            votes: "0"
        }
    }

    const onUpvote = () => {
        setVoted(true);
        post.votes += 1;
        updatePost(postId, post);
    }

    const onDownvote = () => {
        setVoted(true);
        post.votes -= 1;
        updatePost(postId, post);
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
                            <Button variant="primary-outline"  onClick={onUpvote} disabled={hasVoted}><MdOutlineKeyboardArrowUp /></Button>
                            <span className="text-right">{post.votes}</span>
                            <Button variant="danger-outline" onClick={onDownvote} disabled={hasVoted}><MdOutlineKeyboardArrowDown /></Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default Post;