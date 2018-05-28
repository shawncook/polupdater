import React from 'react';
import './tools.scss';

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
          className='post-list__button post-list__button--type-sort-toggle'
          onClick={() => toggleSort(activeSort)}
        >
          Switch
        </button>
        <button
          className='post-list__button post-list__button--type-refresh'
          onClick={() => refreshPosts()}
        >
          Refresh
        </button>
      </div>
    );
  }
}

export default Tools;
