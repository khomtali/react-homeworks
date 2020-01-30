import React from 'react';
import PropTypes from 'prop-types';
import User from '../models/User';

export default class UserProfileClassBased extends React.Component {
  static propTypes = {
    user: PropTypes.instanceOf(User).isRequired,
  };

  render() {
    const {user} = this.props;

    return (
      <>
        <h1>{user.name}</h1>
        <p>{user.status}</p>
        <p>{user.online && 'online'}</p>
        <p>
          <img
            src={user.avatar}
            alt={user.name + ' avatar'}
            width="50"
            height={50}
          />
        </p>
        <p>
          {user.interests.map(hobby => (
            <span className="user-profile__hobby" key={hobby}>{hobby}</span>
          ))}
        </p>
      </>
    );
  }
}

// UserProfileClassBased.propTypes = {
//   user: PropTypes.instanceOf(User).isRequired,
// };