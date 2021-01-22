interface UserProps {
  name?: string;
  age?: number;
}

// #note #syntax type annotation for function(no args, nothing to return) opt
type Callback = () => void;

export class User {
  // #note #syntax {} having unknown string keys, storing []s of Callbacks opt
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    // #note #syntax #good1
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => callback());
  }
}
