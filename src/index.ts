import { User } from './models/User';

const user = new User({ name: 'test user name' });

console.log(user.attributes.get('name'));
