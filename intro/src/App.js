import React from 'react';
import './App.css';
import UserProfile from './components/UserProfile.jsx'
import User from './models/User';
import UserProfileClassBased from './components/UserProfileClassBased';
// import logo from './logo.svg';

export default function App() {
  const user = new User({
    name: 'Natasha',
    status: 'React Developer',
    online: true,
    // avatar: logo,
    interests: ['JavaScript', 'React', 'Frontend'],
  });
  return (
    <div className="App">
      <UserProfile user={user} />
      <hr />
      <UserProfileClassBased user={user} />
    </div>
  );
}

// export default App;