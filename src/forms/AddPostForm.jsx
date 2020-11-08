import React, {useState} from 'react';

const AddPostForm = (props) => {

    const initPost = {
        id: null,
        title: '',
        date: ''
    }

    const [post, setPost] = useState(initPost);

    const handleChange = e => {
        const {title, value} = e.target;
        setPost({...post, [title]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (post.title && post.date) {
           handleChange(e, props.addPost(post));
        }
    }

    return (
        <form>
            <label>Title</label>
            <input className="u-full-width" type="text" value={post.title} name="title" onChange={handleChange} />
            <label>Date</label>
            <input className="u-full-width" type="text" value={post.date} name="date" onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Add Post</button>
        </form>
    )
}
export default AddPostForm;