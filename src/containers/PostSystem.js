import React, { useState, useEffect } from 'react'
import MenuBar from './MenuBar';
import PostManager from "./PostManager";
import PostButton from '../components/PostButton';
import { retrieveRealTimePosts } from '../utils/FirebaseManager';

function PostSystem(props) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        retrieveRealTimePosts(setPosts)
        console.log(posts)
    }, [])

    return (
        <div>
            <MenuBar posts={posts}/>
            <PostManager posts={posts}/>
            <div className='float-end mt-5 mr-3'>
                <PostButton/>
            </div>
        </div>
    );
}

export default PostSystem;