import menu from './menu';

export default class Scenery {
  constructor(name = 'Scenery', description = 'Simple Landing page for your portfolio') {
    this.name = name;
    this.description = description;
  }

  get menu() {
    return this.menu;
  }

  set menu(value) {
    this.menu = menu;
    if (value) {
      this.menu.push(value);
    }
  }
}
