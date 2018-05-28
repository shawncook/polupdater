import React from 'react';
import Header from '../header';
import PostList from '../postList';
import Tools from '../tools';

import './app.scss';

/**
 * App wrapper component.
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    const toggleSort = this.toggleSort.bind(this);
    this.state = {
      activeSort: 'rising',
      postList: [],
      receivedAt: '',
      subreddit: 'politics',
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    this.populatePostList();
    this.interval = setInterval(() => this.populatePostList(), 60000);
  }

  populatePostList() {
    this.fetchPosts(this.state.subreddit, this.state.activeSort)
      .then((result) => {
        this.setState({
          receivedAt: result.receivedAt,
          postList: result.posts
        });
      });
  }

  receivePosts(subreddit, json) {
    return {
      subreddit,
      posts: json.data.children.map(child => child.data),
      receivedAt: Date.now()
    }
  }

  fetchPosts(subreddit, activeSort) {
    const data = fetch(`https://www.reddit.com/r/${subreddit}/${activeSort}/.json`)
      .then(response => response.json())
      .then(json => this.receivePosts(subreddit, json));
    return data;
  }

  toggleSort(activeSort) {
    const newSort = ('rising' === activeSort ? 'new' : 'rising');
    this.setState({
      activeSort: newSort
    }, () => this.populatePostList());
  }

  refreshPosts() {
    this.populatePostList();
  }

  render() {
    return (
      <div className='app'>
        <div className='app__header'>
          <Header
            activeSort={this.state.activeSort}
            subreddit={this.state.subreddit}
            receivedAt={this.state.receivedAt}
          />
          <Tools
            activeSort={this.state.activeSort}
            toggleSort={this.toggleSort.bind(this)}
            refreshPosts={this.refreshPosts.bind(this)}
          />
        </div>
        <PostList postList={this.state.postList} />
      </div>
    );
  }
}

export default App;
