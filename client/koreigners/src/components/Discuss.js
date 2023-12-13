import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/styles.css"
import axios from 'axios';

export default function Discuss() {
    const [listOfPosts, setListofPosts] = useState([]);

    useEffect(() => {
        axios.post("http://localhost:3001/discuss/getAll").then((response) => {
            setListofPosts(response.data);
        })
    }, []);

    const groupedPosts = {};

    // Group posts by type
    listOfPosts.forEach(post => {
        if (!groupedPosts[post.type]) {
            groupedPosts[post.type] = [];
        }
        groupedPosts[post.type].push(post);
    });

    return (
        <div className="container">
            {Object.keys(groupedPosts).map(type => (
                <article key={type}>
                    <h1>{type}</h1>
                    {groupedPosts[type].slice(0, 3).map(post => (
                        <div class="post">
                        <Link class="post-link" to={`/post/${post._id}`}>
                        <hgroup key={post._id}>
                            <h4>{post.title}</h4>
                            <h4>by {post.username}</h4>
                        </hgroup>
                        
                        </Link></div>
                    ))}
                    <Link role="button" to={`/posts/${type}`}>See All</Link>
                </article>
            ))}
            <Link to="/addDiscuss" role='button'>Add a Discussion</Link>
        </div>
    );
}
