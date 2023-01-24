import ForumCard from './ForumCard';
import Button from 'react-bootstrap/Button';
import '../../css/forum/ForumPost.css';

export default function ForumPost({ post }) {

    return (
        <div className="post-cont">
            <ForumCard word={post}/>
            <p className="post-comments">This one gotta be in here</p>
            <p className="post-comments">How this not in here already</p>
            <Button variant="secondary">View Thread</Button>
        </div>
    )
}