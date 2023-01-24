import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setForumPosts } from '../../store/slices/ForumSlice';
import ForumPost from './ForumPost.js';
import '../../css/forum/SlangForum.css';

export default function SlangForum() {

    const posts = useSelector(state => state.forum.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("http://localhost:8080/atliens/forum", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => {
            if (resp.status === 200)
            {
                return resp.json();
                //navigate("/");

            } else {
                console.log("Failure");
            }
        })
        .then(data => {
            dispatch(setForumPosts(data));

        })
        .catch( err => {
            console.log();
        })
    },[])

    let forumPosts = posts.map(post => <ForumPost post={post}/>)

    return (
        <div>
            {console.log(posts)}
            <div className="forum-header">
                <h1>Slang Forum</h1>
                <div>Post Word</div>
            </div>

            <div className="forum-post-container">
                {forumPosts}
            </div>
        </div>

    )
}