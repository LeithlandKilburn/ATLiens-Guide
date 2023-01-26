import ForumCard from './ForumCard';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { chooseThread } from '../../store/slices/ForumSlice';
import '../../css/forum/ForumPost.css';

export default function ForumPost({ post }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const viewPost = () => {
        dispatch(chooseThread(post))
        navigate("/forum-thread");
    }

    return (
        <div className="post-cont">
            <div className="forum-card-prev">
                <ForumCard word={post}/>
            </div>
            <div className="forum-comments">
                <p className="post-comments">This one gotta be in here</p>
                <p className="post-comments">How this not in here already</p>
            </div>
            <Button className="view-thread" variant="secondary" onClick={viewPost}>View Thread</Button>
        </div>
    )
}