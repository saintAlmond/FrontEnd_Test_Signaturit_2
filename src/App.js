import React, { useState } from "react";
import postList from "./data";
import AddPostForm from "./components/forms/AddPostForm";
import DetailPost from "./DetailPost";

const App = () => {

  const [posts, setPosts] = useState(postList);

  const addPost = (post) => {
    post.id = post.length + 1;
    setPosts([...posts, post]);
  };

  const [currentPost, setCurrentPost] = useState(initialPost);

  return (
    <div className="container">
       <h1>React CRUD App</h1>
       
       <div>
            <h2>Add Post</h2>
            <AddPostForm addPost={addPost} />
        </div>
        
    </div>
  );
};

export default App;