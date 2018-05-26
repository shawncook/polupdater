import React from 'react';
import Post from '../post';

import './postList.css';

/**
 * PostList  component.
 */
class PostList extends React.Component {
  render() {
    const {
      data,
    } = this.props;
    return (
      <ul className='post-list'>
        {data.map((post) => (
          <Post
            className='post-list__post'
            key={post.title}
            postUrl={post.url}
            commentsUrl={post.permalink}
            title={post.title}
          />
        ))}
      </ul>
    );
  }
}

export default PostList;
