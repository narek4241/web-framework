import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.button-set-age': this.onSetAgeClick,
      'click:.button-set-name': this.onSetNameClick,
      'click:.button-save': this.onSaveClick,
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

  onSaveClick = (): void => {
    this.model.save();
  };

  template(): string {
    return `
    <div>
      <input placeholder="${this.model.get('name')}" />
      <button class="button-set-name">Update Name</button>
      <button class="button-set-age">Set Random Age</button>
      <button class="button-save">Save User</button>
    </div>
  `;
  }
}
