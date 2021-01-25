export class UserForm {
  constructor(public parent: Element) {}

  template(): string {
    return `
    <div>
      <h1>Template Here</h1>
      <input />
    </div>
  `;
  }

  render(): void {
    const templateELement = document.createElement('template');
    templateELement.innerHTML = this.template();

    // #task #res2 dom
    this.parent.append(templateELement.content);
  }
}
