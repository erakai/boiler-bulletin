import React, { useState } from 'react'
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import reactLogo from "../assets/logo.svg"
import discord from '../assets/discord.png'
import groupme from '../assets/groupme.png'
import { updatePost } from "../utils/FirebaseManager";
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import PostInfo from './PostInfo'

const Post = ({postId, post}) => {
    const [hasVoted, setVoted] = useState(false)

    if (typeof post == 'undefined') {
        post = {
            title: "None",
            votes: "0"
        }
    }

    const getLogo = (type) => {
        switch (type) {
            case 'GroupMe':
                return groupme
            case 'Discord':
                return discord
            default:
                return reactLogo
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
        <Card bg='light'>
            <Card.Body>
                <Container className="justify-content-center-md-center">
                    <Row className="">
                        <Col sm='auto'>
                            <img
                            alt=""
                            src={getLogo(post.type)}
                            width="50"
                            height="50"
                            className="img-fluid"
                            />{' '}
                        </Col>                        
                        <Col className="ml-auto">
                            <a href={post.link}>{post.title}</a>
                        </Col>
                        <Col md='auto' className='border border-right-0 border-dark'>
                            <div className='mb-2'>
                                <PostInfo post={post}/>
                            </div>
                        </Col>
                        <Col lg="2" className="border border-dark border-left-0 ml-auto">
                            <Button variant="primary-outline"  onClick={onUpvote} disabled={hasVoted}><MdOutlineKeyboardArrowUp size={28}/></Button>
                            <span className="text-right">{post.votes}</span>
                            <Button variant="danger-outline" onClick={onDownvote} disabled={hasVoted}><MdOutlineKeyboardArrowDown size={28}/></Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default Post;