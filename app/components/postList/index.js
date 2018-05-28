import React from 'react';
import Post from '../post';

import './postList.css';

/**
 * PostList  component.
 */
class PostList extends React.Component {
  render() {
    const {
      postList
    } = this.props;
    return (
      <ul className='post-list'>
        {postList.map((post) => (
          <Post
            className='post-list__post'
            key={post.id}
            post={post}
          />
        ))}
      </ul>
    );
  }
}

export default PostList;
