import React, {useCallback, useEffect, useState} from 'react';
import {ApiPosts, Post} from "../../../types";
import axiosApi from "../../../axiosApi";
import {Link} from "react-router-dom";
import { format } from 'date-fns';

const Posts: React.FC = () => {

  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = useCallback(async () => {
    const response = await axiosApi.get<ApiPosts | null>('posts.json');
    const posts = response.data;
    if (posts) {
      setPosts(Object.keys(posts).map(id => ({
        ...posts[id],
        id
      })));
    } else {
      setPosts([]);
    }
  }, []);

  useEffect(() => {
    void fetchPosts();
  }, [fetchPosts]);


  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="post">
          <span className="post-date"> Created: {format(post.createdAt, 'dd.MM.yyyy HH:mm')} </span>
          <h3 className="post-title"> {post.title}</h3>
          <p className="post-date">Created:{post.description}</p>

          <Link className="button-read-more" to={'/posts/' + post.id}> Read more <strong> &gt;&gt; </strong></Link>
        </div>
      ))}
    </div>
  )


};

export default Posts;