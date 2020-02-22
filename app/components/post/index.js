import React from 'react';

import './post.scss';

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
            target='_blank'
            rel='noopener'
          >
            {post.title}
            <small className='post-list__post-domain'>
              {post.domain}
            </small>
          </a>
        </div>
        <div className='post-list__comments-link'>
          <a
            href={`https://www.reddit.com` + post.permalink}
            target='_blank'
            rel='noopener'
          >
            {post.num_comments || `No`}
            {' '}
            <span>comments</span>
          </a>
        </div>
      </li>
    );
  }
}

export default Post;
