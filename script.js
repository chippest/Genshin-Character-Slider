class Element {
  constructor(gnosis) {
    this.gnosis = gnosis;
    this.iconUrl = `./elements/Element_${gnosis}.svg`;
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
  new Element("Pyro"),
  new Element("Hydro"),
  new Element("Anemo"),
  new Element("Electro"),
  new Element("Dendro"),
  new Element("Cryo"),
  new Element("Geo"),
];

// Function to display element icons
function displayElementIcons() {
  const container = document.getElementById("elementSelectors");
  elements.forEach((element) => {
    const img = document.createElement("img");
    img.src = element.iconUrl;
    img.alt = element.gnosis;
    container.appendChild(img);
  });
}

// Call the function to display the icons
displayElementIcons();
