import React, { useState, useEffect } from "react";
import axios from "axios";


//defining const Posts
const Posts = () => {
    const [posts, setPosts] = useState();
   
    //retrieving data from posts API
    useEffect (() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            const responsePosts = res.data;
            setPosts(responsePosts);
        });
    }, []);

    //creating display for info and determining what info will be displayed
    return (
        <div>
            <h1>Posts</h1>
            {posts && 
            posts.map((post) => {
                const {id, title} = post;
                return (
                    <div key={id}>
                        <h5>{title}</h5>
                        <h6>Assigned to user: {id}</h6>
                    </div>
                )
            })}
        </div>
    );
};

export default Posts;