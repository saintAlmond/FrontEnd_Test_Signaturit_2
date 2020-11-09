import React from 'react';
//import { CardView } from 'react-card-with-image'
import postList from '../data';
//import 'react-card-with-image/dist/index.css'

const PostDetails = (props) => {

    const currentPosts = [postList];


    {currentPosts.map(post => {
        console.log(post);
        const { id, title,  date } = post;  
        return (<p>{title} / {date} / {id}</p>);
        
    })
    }
   
    return (
        <div className="w3-container">
            <h2>Post Cards</h2>
            {/* <CardView */}
            
        
            
        </div>

    )
}

export default PostDetails;