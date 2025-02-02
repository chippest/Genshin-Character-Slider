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

const elements = [
  new Element(
    "Pyro",
    "https://static.wikia.nocookie.net/gensin-impact/images/2/2c/Element_Pyro.svg/revision/latest?cb=20240401115510"
  ),
  new Element(
    "Hydro",
    "https://static.wikia.nocookie.net/gensin-impact/images/8/80/Element_Hydro.svg/revision/latest?cb=20240401115449"
  ),
  new Element(
    "Anemo",
    "https://static.wikia.nocookie.net/gensin-impact/images/1/10/Element_Anemo.svg/revision/latest?cb=20240401115016"
  ),
  new Element(
    "Electro",
    "https://static.wikia.nocookie.net/gensin-impact/images/f/ff/Element_Electro.svg/revision/latest?cb=20240401115329"
  ),
  new Element(
    "Dendro",
    "https://static.wikia.nocookie.net/gensin-impact/images/7/73/Element_Dendro.svg/revision/latest?cb=20240401115226"
  ),
  new Element(
    "Cyro",
    "https://static.wikia.nocookie.net/gensin-impact/images/7/72/Element_Cryo.svg/revision/latest?cb=20240401115157"
  ),
  new Element(
    "Geo",
    "https://static.wikia.nocookie.net/gensin-impact/images/9/9b/Element_Geo.svg/revision/latest?cb=20240401115352"
  ),
];
