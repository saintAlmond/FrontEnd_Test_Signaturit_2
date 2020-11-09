import React from 'react';

const PostDetails = ({currentPosts}) => {
 

    return (
        <div className="item-details">
            {currentPosts.map(post => {
                const { id, title,  date } = post;  
                return (<p>{title} / {date} / {id}</p>);
            })
            };
        </div>

    )
}

export default PostDetails;