import React from 'react';
import Moment from 'react-moment';

import './header.scss';

/**
 * Header component.
 */
class Header extends React.Component {
  render() {
    const {
      activeSort,
      subreddit,
      receivedAt
    } = this.props;
    return (
     <header className='post-list__header'>
        <h1 className='post-list__title'>
          {`/r/` + subreddit} &ndash; {activeSort}
        </h1>
        <small className='post-list__updated'>
          Updated <Moment format="h:mm a">{receivedAt || Date.now()}</Moment>
        </small>
      </header>
    );
  }
}

export default Header;
