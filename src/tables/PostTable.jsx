import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
//import Pagination from '../components/Pagination';


const PostTable = (props) => {

    const history = useHistory();
    console.log(useHistory);

    const redirect = () => {
        history.push("/details");
    } 

    console.log(props);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);
 // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = props.posts.slice(indexOfFirstPost, indexOfLastPost);
    console.log(currentPage);
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
                        console.log(currentPosts);
                        return (
                            <tr>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{date}</td>
                                <td>
                                    <button className="button-primary" onClick={() => props.deletePost(id)}>Delete</button>
                                    <button className="button-primary" onClick = {() => props.editPost (id, currentPosts)}>Edit</button>
                                    <button className= "button-primary" onClick = {redirect}>Details</button> 
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