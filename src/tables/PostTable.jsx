import React from 'react';


const PostTable = (props) => {
    
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
                { props.posts.length > 0 ? (
                    props.posts.map(post => {
                        const {id, title, date} = post;
                        return (
                            <tr>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{date}</td>
                                <td>
                                    <button className="button-primary" onClick={() => props.deletePost(id)}>Delete</button>
                                    <button className="button-primary" onClick = {() => props.editPost (id, post)}>Edit</button>
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