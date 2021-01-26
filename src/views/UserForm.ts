import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.button-set-age': this.onSetAgeClick,
      'click:.button-set-name': this.onSetNameClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    // #note typeguard opt
    if (!input) {
      return;
    }
    const name = input.value;
    this.model.set({ name });
  };

  template(): string {
    return `
    <div>
      <h1>Template Here</h1>
      <p>User Name: ${this.model.get('name')}</p>
      <p>User Age: ${this.model.get('age')}</p>
      <div>
          <input value=${this.model.get('name')} />
          <button class="button-set-name">Update Name</button>
          <button class="button-set-age">Set Random Age</button>
      </div>
    </div>
  `;
  }
}
