export class UserForm {
  constructor(public parent: Element) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
      'mouseenter:h1': this.onHeaderHover,
    };
  }

  onButtonClick(): void {
    console.log('button clicked');
  }

  onHeaderHover(): void {
    console.log('header hovered');
  }

  template(): string {
    return `
    <div>
      <h1>Template Here</h1>
      <input />
      <button>Click Me</button>
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
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);

    // #task #res2 dom
    this.parent.append(templateElement.content);
  }
}
