import React from 'react';
import './post.css';

/**
 * Post component.
 */
class Post extends React.Component {
  render() {
    const {
      commentsUrl,
      postUrl,
      title
    } = this.props;
    return (
      <li className='post-list__post'>
        <a
          className='post-list__post-title'
          href={postUrl}
        >
          {title}
        </a>
        <a
          className='post-list__comments-link'
          href={`http://np.reddit.com` + commentsUrl}
          target='_blank'
          rel='noopener'
        >
          Comments
        </a>
      </li>
    );
  }
}

export default Post;
