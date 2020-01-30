import React from 'react';
import PropTypes from 'prop-types';
import './user-profile.css';
import User from '../models/User';
// import logo from '../logo.svg';

// const hobbyStyle = {
//   backgroundColor: 'black',
//   color: 'white',
//   borderRadius: 5,
//   padding: 5,
//   marginRight: 5,
// }

export default function UserProfile(props) {
  const {user} = props; // деструктуризация - создался новый объект
  // const user = {
  //   name: 'Natasha',
  //   status: 'React Developer',
  //   online: true,
  //   avatar: logo,
  //   interests: ['JavaScript', 'React', 'Frontend']
  // };
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

UserProfile.propTypes = {
  // user: PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  //   status: PropTypes.string,
  //   online: PropTypes.bool,
  //   avatar: PropTypes.string,
  //   interests: PropTypes.arrayOf(PropTypes.string),
  // }),
  user: PropTypes.instanceOf(User).isRequired,
};