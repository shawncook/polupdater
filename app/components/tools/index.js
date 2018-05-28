import React from 'react';
import './tools.css';

/**
 * Tools component.
 */
class Tools extends React.Component {
  render() {
    const {
      activeSort,
      refreshPosts,
      toggleSort
    } = this.props;
    return (
      <div className='post-list__tools'>
        <button
          className='post-list__sort-toggle'
          onClick={() => toggleSort(activeSort)}
        >
          Switch
        </button>
        <button
          className='post-list__refresh'
          onClick={() => refreshPosts()}
        >
          Refresh
        </button>
      </div>
    );
  }
}

export default Tools;
