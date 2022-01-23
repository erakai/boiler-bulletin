import React, { useState, useEffect } from 'react'
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import reactLogo from "../assets/logo.svg"
import discord from '../assets/discord.png'
import groupme from '../assets/groupme.png'
import { updatePost, updateVote } from "../utils/FirebaseManager";
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import PostInfo from './PostInfo'
import { getAuth } from 'firebase/auth';
import { IconContext } from 'react-icons/lib';

const enabled_vote = 'green'
const disabled_vote = 'black'



const Post = ({postId, post, initalVoteState, voteId}) => {
    const [voteState, setVoteState] = useState(initalVoteState)
    const [isDownVoted, setIsDownVoted] = useState((voteState == 2 ? enabled_vote : disabled_vote))
    const [isUpVoted, setIsUpVoted] = useState((voteState == 1 ? enabled_vote : disabled_vote))

    const initialVote = post.votes
    
    function updatePostVote(_vote_state, color_upvote, color_downvote, increment) {
        const vote = {
            user_id: getAuth().currentUser.uid,
            post_id: postId,
            vote_state: _vote_state
        }

        if (_vote_state == "up") {
            setVoteState(1)
        } else if (_vote_state == "down") {
            setVoteState(2)
        } else {
            setVoteState(0)
        }

        updateVote(voteId, vote)
        setIsUpVoted(color_upvote)
        setIsDownVoted(color_downvote)
        post.votes = initialVote + increment;
        updatePost(postId, post);
    }

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
        if ((isUpVoted != enabled_vote)) {
            if (isDownVoted == enabled_vote) {
                updatePostVote("up", enabled_vote, disabled_vote, 2);
            } else {
                updatePostVote("up", enabled_vote, disabled_vote, 1);
            }
        } else {            
            updatePostVote("n/a", disabled_vote, disabled_vote, -1);
        }
    }

    const onDownvote = () => {
        if ((isDownVoted != enabled_vote)) {
            if (isUpVoted == enabled_vote) {
                updatePostVote("down", disabled_vote, enabled_vote, -2);
            } else {
                updatePostVote("down", disabled_vote, enabled_vote, -1);
            }
        } else {            
            updatePostVote("n/a", disabled_vote, disabled_vote, 1);
        }

    }
    
    return (
        <Card bg='light'>
            <Card.Body>
                <Container className="justify-content-left-md-left">
                    <Row className="">
                        <Col sm='auto'>
                            
                        </Col>                        
                        <Col className="ml-auto">
                            <Button variant="outline-primary" href={post.link}>
                                <img
                                alt=""
                                src={getLogo(post.type)}
                                width="50"
                                height="50"
                                className="img-fluid"
                                />{' '}
                                {post.title}
                            </Button>
                        </Col>
                        <Col md='auto' className='border-right-0 border-dark'>
                            <div className='mb-2'>
                                <PostInfo post={post}/>
                            </div>
                        </Col>
                        <Col lg="2" className="border-dark border-left-0 ml-auto">
                            <Button className="btn" variant="primary-no-outline"  onClick={onUpvote}>
                                <MdOutlineKeyboardArrowUp size={28} color={isUpVoted}/>
                            </Button>
                            <span className="text-right">{post.votes}</span>
                            <Button variant="danger-outline" onClick={onDownvote}><MdOutlineKeyboardArrowDown size={28} color={isDownVoted}/></Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default Post;