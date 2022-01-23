import React, { useState, useEffect } from 'react'
import MenuBar from './MenuBar';
import PostManager from "./PostManager";
import AddPostButton from '../components/AddPostButton';
import { retrieveRealTimePosts } from '../utils/FirebaseManager';
import Scroll from '../components/Scroll.js'

function PostSystem(props) {
    const [posts, setPosts] = useState([])
    const [displayPosts, setDisplayPosts] = useState([])

    useEffect(() => {
        retrieveRealTimePosts(setPosts)
    }, [])

    return (
        <div>
            <div className='mb-3'>
                <MenuBar posts={posts} setDisplayPosts={setDisplayPosts}/>
            </div>
            <Scroll>
                <PostManager posts={displayPosts}/>
            </Scroll>
            <div className='mt-3 mb-0'>
                <AddPostButton/>
            </div>
        </div>
    );
}

export default PostSystem;