// #note Testing Area
import { User } from './models/User';

const user = new User({ id: 3, name: 'newer name', age: 100 });

// user.on('change', () => {
//   console.log('change detected');
// });

// user.on('save', () => {
//   console.log(user);
// });

// user.set({ name: 'name to save ' });
// user.fetch();
// user.save();
