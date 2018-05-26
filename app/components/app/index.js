import React from 'react';
import PostListContainer from '../postListContainer';

import './app.css';

/**
 * App wrapper component.
 */
class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <h1 className='app__title'>Polupdater</h1>
        <PostListContainer />
      </div>
    );
  }
}

export default App;
