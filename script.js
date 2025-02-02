class Element {
  constructor(gnosis, iconUrl) {
    this.gnosis = gnosis;
    this.iconUrl = iconUrl;
    this.characters = [];
  }

  addCharacter(character) {
    this.characters.push(character);
  }
}

class Character {
  constructor(name, id, element, constellation, mainUrl, miniUrl, refAreaUrl) {
    this.name = name;
    this.id = id;
    this.element = element;
    this.constellation = constellation;
    this.mainUrl = mainUrl;
    this.miniUrl = miniUrl;
    this.refAreaUrl = refAreaUrl;
  }
}
