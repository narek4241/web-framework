// #note #syntax type annotation for function(no args, nothing to return) opt
type Callback = () => void;

export class Eventing {
  // #note #syntax {} having unknown string keys, storing []s of Callbacks opt
  events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    // #note #syntax #good1
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => callback());
  };
}
