import { User } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'USER', age: 30 });

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

const userForm = new UserForm(root, user);
userForm.render();
