import React, {useState} from 'react';

const AddPostForm = (props) => {

    const initPost = {
        id: null,
        title: '',
        date: ''
    }

    const [post, setPost] = useState(initPost);

    const handleChange = (value, key) => {
        setPost( {...post, [key]: value});
    }


    const handleSubmit = e => {
        e.preventDefault();
        props.addPost(post);
        setPost(initPost);
    }

    return (
        <form>
            <label>Title</label>
            <input className="u-full-width" type="text" value={post.title} name="title" onChange={(e) => handleChange(e.target.value, "title")} />
            <label>Date</label>
            <input className="u-full-width" type="text" value={post.date} name="date" onChange={(e) => handleChange(e.target.value, "date")} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Add Post</button>
        </form>
    )
}
export default AddPostForm;