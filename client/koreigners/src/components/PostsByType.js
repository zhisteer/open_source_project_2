import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function PostsByType() {
  const { type } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPostsByType = async () => {
      try {
        const response = await axios.post(`http://localhost:3001/discuss/getByType`, { type });
        setPosts(response.data);
      } catch (error) {
        console.error(error);
        // Handle errors as needed
      }
    };

    fetchPostsByType();
  }, [type]);

  
  return (
    <div className="container">
      <h1>All Posts - {type}</h1>
      {posts.map(post => (
        <div class="post" key={post.id}>
          <hgroup>
            <h4>{post.title}</h4>
            <h4>by {post.username}</h4>
          </hgroup>
        </div>
      ))}
    </div>
  );
}
