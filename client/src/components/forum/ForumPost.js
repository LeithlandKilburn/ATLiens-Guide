import ForumCard from './ForumCard';
import Button from 'react-bootstrap/Button';
import '../../css/forum/ForumPost.css';

export default function ForumPost() {

    return (
        <div className="post-cont">
            <ForumCard word={{name: "Bando", definition: "An abandoned house"}}/>
            <p className="post-comments">This one gotta be in here</p>
            <p className="post-comments">How this not in here already</p>
            <Button variant="secondary">View Thread</Button>
        </div>
    )
}