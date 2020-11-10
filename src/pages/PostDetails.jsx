import React from 'react';
import {useParams} from 'react-router-dom'
//import { CardView } from 'react-card-with-image'
import postList from '../data';
//import 'react-card-with-image/dist/index.css'

const PostDetails = (props) => {

    const PostId = () => {
        const { id  } = useParams();
        return <p>{id}</p>;
      }

   
    return (
        <>
            {postList.map(post => {
                const { id, title,  date } = post; 
                console.log(post); 
                return (<p>{title} / {date} / {id}</p>); 
            })
            }
        </>
    )
}

export default PostDetails;