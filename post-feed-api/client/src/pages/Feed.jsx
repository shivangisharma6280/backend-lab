
import React, { useState } from 'react';

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: "1",
      image: "https://img.magnific.com/free-photo/cosmos-flowers_1373-83.jpg?semt=ais_hybrid&w=740&q=80",
      caption: "Beautiful flower"
    }
  ]);

  return (
    <section className="feed-section">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <h1>No posts available</h1>
      )}
    </section>
  );
};

export default Feed;
