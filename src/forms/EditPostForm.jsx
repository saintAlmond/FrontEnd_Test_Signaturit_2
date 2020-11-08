import React, {useState, useEffect} from 'react';

const EditPostForm = (props) => {

    const {currentPost, setEditing, updatePost} = props;
    const [post, setPost] = useState(props.currentPost);

    useEffect(() => {
        setPost(props.currentPost)
    }, [props])

    const handleChange = (value, key)=> {
        setPost({...post, [key]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (post.title && post.date) props.updatePost(post);
    }

    return (
        <form>
            <label>Title</label>
            <input className="u-full-width" type="text" value={post.title} name="title" onChange={(e) => handleChange(e.target.value, "title" )} />
            <label>Date</label>
            <input className="u-full-width" type="text" value={post.date} name="date" onChange={(e) => handleChange(e.target.value, "date" )} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Edit Post</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default EditPostForm;