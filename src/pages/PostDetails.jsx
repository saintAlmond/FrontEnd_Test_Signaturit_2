import React from 'react';

const PostDetails = ({currentPosts}) => {
 

    return (
        <div className="item-details">
            {currentPosts.map(currentPosts => {
                const {id, title, date} = currentPosts;
                console.log(map);
            }
            )}
        </div>

    )
}

export default PostDetails;