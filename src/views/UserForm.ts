import { User } from '../models/User';

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

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

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (const eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');
      const callback = eventsMap[eventKey];

      fragment.querySelectorAll(selector).forEach((element: Element) => {
        element.addEventListener(eventName, callback);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    // #task #res2 dom
    this.parent.append(templateElement.content);
  }
}
