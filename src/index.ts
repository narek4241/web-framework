import { User } from './models/User';
import { UserEdit } from './views/UserEdit';

const user = User.buildUser({ name: 'USER', age: 30 });

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

const userEdit = new UserEdit(root, user);

userEdit.render();
