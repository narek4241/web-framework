import { User } from './models/User';

const user = new User({ name: 'poghos' });

user.set({ name: 'newName', age: 25 });

user.on('click', () => {
  console.log('click1');
});
user.on('click', () => {
  console.log('click2');
});

user.trigger('click');

// console.log(user.get('name'), user.get('age'));
console.log(user);
