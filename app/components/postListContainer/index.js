import React from 'react';
import PostList from '../postList';
import fetch from 'cross-fetch'

import './postListContainer.css';

/**
 * PostListContainer component.
 */
class PostListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postList: []
    }
  }

  componentDidMount() {
    this.fetchPosts().then(result => this.setState({
      postList: result.posts
    }))
  }

  receivePosts(subreddit, json) {
    return {
      subreddit,
      posts: json.data.children.map(child => child.data),
      receivedAt: Date.now()
    }
  }

  fetchPosts() {
    const subreddit = 'politics';
    const data = fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => this.receivePosts(subreddit, json));
    return data;
  }

  render() {
    return (
      <div className='post-list__container'>
        <PostList data={this.state.postList} />
      </div>
    );
  }
}

export default PostListContainer;
