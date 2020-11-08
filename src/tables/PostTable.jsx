import React, { useState } from 'react';



const PostTable = (props) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(2);
 // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = props.posts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPosts = props.posts.length;
  // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { totalPosts > 0 ? (
                    currentPosts.map(currentPosts => {
                        const {id, title, date} = currentPosts;
                        return (
                            <tr>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{date}</td>
                                <td>
                                    <button className="button-primary" onClick={() => props.deletePost(id)}>Delete</button>
                                    <button className="button-primary" onClick = {() => props.editPost (id, currentPosts)}>Edit</button>
                                    <button className= "button-primary">Details</button> 
                                </td>
            
                            </tr>    
                        )
                    })
                    ) : (
                        <tr>
                            <td colSpan={4}>No post found</td>
                        </tr>
                    )   
                }
            </tbody>
        </table>
    )

}

export default PostTable;