import React, {useState} from 'react';
import postList from './data';
import './App.css';
import PostTable from './tables/PostTable';
import AddPostForm from './forms/AddPostForm';
import EditPostForm from './forms/EditPostForm';



const Home = () => {

  const [ posts, setPosts ] = useState(postList);
  console.log(posts);
  
  //Add new post 
  const addPost = post => {
    post.id = posts.length + 1;
    setPosts( [...posts, post]);
  }

  //delte the post
  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  }

  //states editing post
  const [editing, setEditing] = useState(false);

  //post must have got
  const initialPost = {
    id: null,
    title: '',
    date: ''
  }

  const [currentPost, setCurrentPost] = useState(initialPost);

  //editng post by id
  const editPost = (id, post) => {
    setEditing(true);
    setCurrentPost(post);
  }
  //update post and create newpost
  const updatePost = (newPost) => {
    setPosts(
      posts.map((post) => (post.id === currentPost.id ? newPost : post))
    );
    setCurrentPost(initialPost);
    setEditing(false);
  }


  return (
  
    <div className="container">
      <h1>React CRUD App</h1>
        <div className="row">
          <div className="ten columns">
            <h2>View Post</h2>
            <PostTable posts={posts} deletePost={deletePost} editPost={editPost} />
          </div>
          <div className="twelve columns">
            { editing ? (
              <div>
                <h2>Edit Post</h2>
                <EditPostForm 
                  currentPost={currentPost}
                  setEditing={setEditing}
                  updatePost={updatePost}
                />
              </div>
            ) : (
              <div>
                <h2>Add post</h2>
                <AddPostForm addPost={addPost} />
              </div>
            )}
          </div>
        </div>
    </div>
  );
};

export default Home;