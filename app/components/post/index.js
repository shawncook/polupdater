import React from 'react';
import './post.css';

/**
 * Post component.
 */
class Post extends React.Component {
  render() {
    const {
      post
    } = this.props;
    return (
      <li className='post-list__post'>
        <div className='post-list__post-title'>
          <a
            href={post.url}
            title={post.created}
          >
            {post.title}
            <small className='post-list__post-domain'>
              {post.domain}
            </small>
          </a>
        </div>
        <div className='post-list__comments-link'>
          <a
            href={`http://np.reddit.com` + post.permalink}
            target='_blank'
            rel='noopener'
          >
            {post.num_comments || `No`} comments
          </a>
        </div>
      </li>
    );
  }
}

export default Post;
