import { User } from './models/User';

const user = new User({ name: 'test user name' });

console.log(user.get('name'));

user.on('click', () => {
  console.log('change#1');
});

user.trigger('click');
