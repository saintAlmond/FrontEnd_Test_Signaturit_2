import React from 'react';
import postList from '../data';

const PostDetails = ({ location }) => {
  
    const { state: { id } } = location; 

    const postInfo = postList.find(post => post.id === id); 

    return (
        <div className="w3-container">
            <h2>Detail Card</h2>
            <div class="w3-card-4">
                <header class="w3-container w3-blue">
                    <h1>{postInfo.title}</h1>
                </header>
            </div>
            <div className="w3-card">
                <p>
                   {postInfo.date}
                   {postInfo.id}
                </p>
            </div>
        </div>
    )
}

export default PostDetails;