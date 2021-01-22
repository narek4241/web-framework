import { User } from './models/User';

const user = new User({ name: 'test eventing user' });

user.events.on('click', () => {
  console.log('click#1');
});

user.events.trigger('click');
