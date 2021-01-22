import { User } from './models/User';

const user = new User({ name: 'poghos' });

user.set({ name: 'newName', age: 25 });

console.log(user.get('name'), user.get('age'));
