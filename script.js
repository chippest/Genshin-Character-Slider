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

// Adding characters to elements
elements[0].addCharacter(
  new Character(
    "Diluc",
    1,
    "Pyro",
    "Noctua",
    "diluc_main_url",
    "diluc_mini_url",
    "diluc_ref_area_url"
  )
);
elements[0].addCharacter(
  new Character(
    "Amber",
    2,
    "Pyro",
    "Lepus",
    "amber_main_url",
    "amber_mini_url",
    "amber_ref_area_url"
  )
);

elements[1].addCharacter(
  new Character(
    "Mona",
    3,
    "Hydro",
    "Astrolabos",
    "mona_main_url",
    "mona_mini_url",
    "mona_ref_area_url"
  )
);
elements[1].addCharacter(
  new Character(
    "Tartaglia",
    4,
    "Hydro",
    "Monoceros Caeli",
    "tartaglia_main_url",
    "tartaglia_mini_url",
    "tartaglia_ref_area_url"
  )
);

elements[2].addCharacter(
  new Character(
    "Venti",
    5,
    "Anemo",
    "Carmen Dei",
    "venti_main_url",
    "venti_mini_url",
    "venti_ref_area_url"
  )
);
elements[2].addCharacter(
  new Character(
    "Jean",
    6,
    "Anemo",
    "Leo Minor",
    "jean_main_url",
    "jean_mini_url",
    "jean_ref_area_url"
  )
);

elements[3].addCharacter(
  new Character(
    "Lisa",
    7,
    "Electro",
    "Tempus Fugit",
    "lisa_main_url",
    "lisa_mini_url",
    "lisa_ref_area_url"
  )
);
elements[3].addCharacter(
  new Character(
    "Razor",
    8,
    "Electro",
    "Lupus Minor",
    "razor_main_url",
    "razor_mini_url",
    "razor_ref_area_url"
  )
);

elements[4].addCharacter(
  new Character(
    "Tighnari",
    9,
    "Dendro",
    "Vulpes Zerda",
    "tighnari_main_url",
    "tighnari_mini_url",
    "tighnari_ref_area_url"
  )
);
elements[4].addCharacter(
  new Character(
    "Collei",
    10,
    "Dendro",
    "Leptailurus",
    "collei_main_url",
    "collei_mini_url",
    "collei_ref_area_url"
  )
);

elements[5].addCharacter(
  new Character(
    "Kaeya",
    11,
    "Cryo",
    "Pavo Ocellus",
    "kaeya_main_url",
    "kaeya_mini_url",
    "kaeya_ref_area_url"
  )
);
elements[5].addCharacter(
  new Character(
    "Chongyun",
    12,
    "Cryo",
    "Nubis Caesor",
    "chongyun_main_url",
    "chongyun_mini_url",
    "chongyun_ref_area_url"
  )
);

elements[6].addCharacter(
  new Character(
    "Ningguang",
    13,
    "Geo",
    "Opus Aequilibrium",
    "ningguang_main_url",
    "ningguang_mini_url",
    "ningguang_ref_area_url"
  )
);
elements[6].addCharacter(
  new Character(
    "Zhongli",
    14,
    "Geo",
    "Lapis Dei",
    "zhongli_main_url",
    "zhongli_mini_url",
    "zhongli_ref_area_url"
  )
);

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
