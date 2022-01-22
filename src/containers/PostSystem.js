import React, { useState, useEffect } from 'react'
import MenuBar from './MenuBar';
import PostManager from "./PostManager";
import PostButton from '../components/PostButton';
import { retrieveRealTimePosts } from '../utils/FirebaseManager';

function PostSystem(props) {
    const [posts, setPosts] = useState([])
    const [displayPosts, setDisplayPosts] = useState([])

    useEffect(() => {
        retrieveRealTimePosts(setPosts)
        console.log(posts)
    }, [])

    return (
        <div>
            <MenuBar posts={posts} setDisplayPosts={setDisplayPosts}/>
            <PostManager posts={displayPosts}/>
            <div className='mt-5 mb-5'>
                <PostButton/>
            </div>
        </div>
    );
}

export default PostSystem;