import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function SinglePost() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.post(`http://localhost:3001/discuss/getById`, {postId});
        setPost(response.data);
      } catch (error) {
        console.error(error);
        // Handle errors as needed
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>; // You might want to display a loading spinner or message
  }

  return (
    <div className="container">
      <div class="post">
        <hgroup>
          <h4>{post.title}</h4>
          <h4>by {post.username}</h4>
          
        </hgroup>
        <p>{post.content}</p>
      </div>
    </div>
  );
}
