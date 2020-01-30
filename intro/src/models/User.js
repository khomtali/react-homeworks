import logo from '../logo.svg';

export default class User {
  constructor(entity) {
    Object.assign(this, {
      name: 'Guest',
      status: '',
      online: false,
      avatar: logo,
      interests: []
    }, entity)
  }
}

new User({name: 'Natasha'});