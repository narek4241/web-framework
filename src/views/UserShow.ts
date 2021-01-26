import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
      <div>
        <h1>User Detail</h1>
        <p>User Name: ${this.model.get('name')}</p>
        <p>User Age: ${this.model.get('age')}</p>
      </div>
    `;
  }
}
