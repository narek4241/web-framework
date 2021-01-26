import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  // #note default ('empty') implementation opt
  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  regionsMap(): { [key: string]: string } {
    return {};
  }

  abstract template(): string;

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
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

  mapRegions(fragment: DocumentFragment): void {
    const regions = this.regionsMap();

    for (const key in regions) {
      const region = regions[key];
      const element = fragment.querySelector(region);

      if (!element) {
        return;
      }
      this.regions[key] = element;
    }
  }

  onRender(): void {}

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    this.onRender();

    // #task #res2 dom
    this.parent.append(templateElement.content);
  }
}
