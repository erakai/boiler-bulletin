import MenuBar from './MenuBar';
import PostManager from "./PostManager";
import PostButton from '../components/PostButton';

function PostSystem(props) {
    return (
        <div class='position-relative h-100'>
            <MenuBar />
            <PostManager />
            <div class='position-absolute' style={{bottom:0, right:0}}>
                <PostButton/>
            </div>
        </div>
    );
}

export default PostSystem;