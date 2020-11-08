import React, {useState, useEffect} from 'react';

const EditPostForm = (props) => {

    useEffect(() => {
        setPost(props.currentPost)
    }, [props])

    const [post, setPost] = useState(props.currentPost);

    const handleChange = e => {
        const {title, value} = e.target;
        setPost({...post, [title]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (post.title && post.date) props.updatePost(post);
    }

    return (
        <form>
            <label>Title</label>
            <input className="u-full-width" type="text" value={post.title} name="title" onChange={handleChange} />
            <label>Date</label>
            <input className="u-full-width" type="text" value={post.date} name="date" onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Edit Post</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default EditPostForm;