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
elements[0].addCharacter(
  new Character(
    "Bennett",
    15,
    "Pyro",
    "Rota Calamitas",
    "bennett_main_url",
    "bennett_mini_url",
    "bennett_ref_area_url"
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
elements[1].addCharacter(
  new Character(
    "Barbara",
    16,
    "Hydro",
    "Crater",
    "barbara_main_url",
    "barbara_mini_url",
    "barbara_ref_area_url"
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
elements[2].addCharacter(
  new Character(
    "Sucrose",
    17,
    "Anemo",
    "Ampulla",
    "sucrose_main_url",
    "sucrose_mini_url",
    "sucrose_ref_area_url"
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
elements[3].addCharacter(
  new Character(
    "Beidou",
    18,
    "Electro",
    "Victor Mare",
    "beidou_main_url",
    "beidou_mini_url",
    "beidou_ref_area_url"
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
elements[4].addCharacter(
  new Character(
    "Alhaitham",
    19,
    "Dendro",
    "Vultur Volans",
    "alhaitham_main_url",
    "alhaitham_mini_url",
    "alhaitham_ref_area_url"
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
elements[5].addCharacter(
  new Character(
    "Ganyu",
    20,
    "Cryo",
    "Sinae Unicornis",
    "ganyu_main_url",
    "ganyu_mini_url",
    "ganyu_ref_area_url"
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
elements[6].addCharacter(
  new Character(
    "Albedo",
    21,
    "Geo",
    "Princeps Cretaceus",
    "albedo_main_url",
    "albedo_mini_url",
    "albedo_ref_area_url"
  )
);

document.addEventListener("DOMContentLoaded", () => {
  // Function to display element icons
  function displayElementIcons() {
    const container = document.getElementById("elementSelectors");
    elements.forEach((element, index) => {
      const img = document.createElement("img");
      img.src = element.iconUrl;
      img.alt = element.gnosis;
      img.dataset.index = index;
      img.addEventListener("click", () => selectElement(index));
      container.appendChild(img);
    });
  }

  // Function to select an element
  function selectElement(index) {
    const selectedElement = elements[index];
    document.getElementById("gnosisName").textContent = selectedElement.gnosis;

    // Highlight selected element icon
    document.querySelectorAll("#elementSelectors img").forEach((img, i) => {
      img.style.filter = i === index ? "none" : "grayscale(100%)";
    });

    // Update range slider
    const rangeSlider = document.querySelector(".range-slider .range-thumb");
    const middleIndex = Math.floor(selectedElement.characters.length / 2);
    rangeSlider.style.top = `${
      (middleIndex / (selectedElement.characters.length - 1)) * 100
    }%`;
    selectCharacter(middleIndex, selectedElement);
  }

  // Function to select a character
  function selectCharacter(index, element) {
    const selectedCharacter = element.characters[index];
    document.getElementById("characterName").textContent =
      selectedCharacter.name;
    document.getElementById("constellationName").textContent =
      selectedCharacter.constellation;
    document.getElementById("characterLogo").src = selectedCharacter.miniUrl;
  }

  // Event listener for range slider
  const rangeThumb = document.querySelector(".range-slider .range-thumb");
  rangeThumb.addEventListener("mousedown", (event) => {
    const rangeSlider = document.querySelector(".range-slider");
    const onMouseMove = (event) => {
      const sliderRect = rangeSlider.getBoundingClientRect();
      let newTop = event.clientY - sliderRect.top;
      newTop = Math.max(0, Math.min(newTop, sliderRect.height));
      const elementIndex = elements.findIndex(
        (element) =>
          element.gnosis === document.getElementById("gnosisName").textContent
      );
      const characterCount = elements[elementIndex].characters.length;
      const stepHeight = sliderRect.height / (characterCount - 1);
      const characterIndex = Math.round(newTop / stepHeight);
      rangeThumb.style.top = `${
        (characterIndex / (characterCount - 1)) * 100
      }%`;
      selectCharacter(characterIndex, elements[elementIndex]);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener(
      "mouseup",
      () => {
        document.removeEventListener("mousemove", onMouseMove);
      },
      { once: true }
    );
  });

  // Call the function to display the icons
  displayElementIcons();

  // Select the default element and character
  selectElement(3);
});
