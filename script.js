class Element {
  constructor(gnosis, color) {
    this.gnosis = gnosis;
    this.iconUrl = `./elements/Element_${gnosis}.svg`;
    this.characters = [];
    this.color = color;
  }

  addCharacter(character) {
    this.characters.push(character);
  }
}

class Character {
  constructor(name, id, element, constellation, miniUrl, refAreaUrl) {
    this.name = name;
    this.id = id;
    this.element = element;
    this.constellation = constellation;
    this.mainUrl = `./chars/${name}_Profile.webp`;
    this.miniUrl = miniUrl;
    this.refAreaUrl = refAreaUrl;
  }
}

const elements = [
  new Element("Pyro", "#FF4500"),
  new Element("Hydro", "#1E90FF"),
  new Element("Anemo", "#00FF7F"),
  new Element("Electro", "#8A2BE2"),
  new Element("Dendro", "#32CD32"),
  new Element("Cryo", "#00CED1"),
  new Element("Geo", "#DAA520"),
];

// Adding characters to elements
elements[0].addCharacter(
  new Character(
    "Diluc",
    1,
    "Pyro",
    "Noctua",
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
    "albedo_mini_url",
    "albedo_ref_area_url"
  )
);

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
const slider = document.querySelector(".range-slider");
const thumb = document.querySelector(".range-thumb");
const track = document.querySelector(".range-track");
const elementSelectors = document.querySelector("#elementSelectors");
const stripes = document.querySelectorAll(".stripe");

let isDragging = false;

const updateThumb = (offsetY, rect) => {
  thumb.style.top = `${offsetY}px`;

  const percentage = 100 - Math.round((offsetY / rect.height) * 100);

  const thumbHeight = thumb.offsetHeight;
  const gap = 5; // Adjust gap
  const topRight = ((offsetY - thumbHeight / 2 - gap) / rect.height) * 100;
  const bottomRight = ((offsetY + thumbHeight / 2 + gap) / rect.height) * 100;

  track.style.setProperty("--topRight", `${topRight}%`);
  track.style.setProperty("--bottomRight", `${bottomRight}%`);
};

const centerThumb = () => {
  const rect = slider.getBoundingClientRect();
  const offsetY = rect.height / 2;
  updateThumb(offsetY, rect);
};

const updateStripes = () => {
  const rect = elementSelectors.getBoundingClientRect();
  const top = ((rect.top - 20) / window.innerHeight) * 100;
  const bottom = ((rect.top + rect.height) / window.innerHeight) * 100;
  const gap = 2; // Adjust gap between --1up and --1down

  stripes.forEach((stripe) => {
    stripe.style.setProperty("--1up", `${top}%`);
    stripe.style.setProperty("--1down", `${bottom + gap}%`);
  });
};

thumb.addEventListener("mousedown", (e) => {
  isDragging = true;
  e.preventDefault(); // Prevent text selection
  document.body.style.userSelect = "none"; // Disable text selection
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  document.body.style.userSelect = ""; // Enable text selection
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const rect = slider.getBoundingClientRect();
    let offsetY = e.clientY - rect.top;
    offsetY = Math.max(0, Math.min(offsetY, rect.height));
    updateThumb(offsetY, rect);
  }
});

document.addEventListener("mouseleave", () => {
  if (isDragging) {
    isDragging = false;
    document.body.style.userSelect = ""; // Enable text selection
  }
});

window.addEventListener("resize", () => {
  centerThumb();
  updateStripes();
}); // Update on window resize

centerThumb(); // Center the thumb by default

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
  updateText(selectedElement.gnosis, "gnosisName", "textSelect3");
  updateLightColor(selectedElement.color);

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
  centerThumb();
  selectCharacter(middleIndex, selectedElement);
}

// Function to update character name with transition
function updateText(hold2, element, text) {
  const hold1 = document.getElementById(element);
  const charr1 = hold1.textContent.split("");
  const charr2 = hold2.split("");
  if (charr1.length > charr2.length) {
    for (let i = charr2.length; i < charr1.length; i++) {
      charr2.push("");
    }
  }
  if (charr2.length > charr1.length) {
    for (let i = charr1.length; i < charr2.length; i++) {
      charr1.push("");
    }
  }
  hold1.innerHTML = "";
  for (let i = 0; i < charr1.length; i++) {
    hold1.innerHTML += `<strong class="${text}">${charr1[i]}</strong>`;
  }
  let hold3 = document.querySelectorAll(`.${text}`);

  const textExchange1 = async () => {
    for (let i = 0; i < hold3.length; i++) {
      hold3[i].classList.add("fade1");
      await sleep(50);
      hold3[i].innerHTML = charr2[i];
    }
  };
  textExchange1();
}

// Function to select a character
function selectCharacter(index, element) {
  const selectedCharacter = element.characters[index];
  const currentCharacterName =
    document.getElementById("characterName").textContent;

  // Only update if the character is not already selected
  if (currentCharacterName !== selectedCharacter.name) {
    updateText(selectedCharacter.name, "characterName", "textSelect1");
    updateText(
      selectedCharacter.constellation,
      "constellationName",
      "textSelect2"
    );
    // document.getElementById("characterLogo").src = selectedCharacter.miniUrl;
  }
}

// Event listener for range slider
const rangeThumb = document.querySelector(".range-slider .range-thumb");
rangeThumb.addEventListener("mousedown", (event) => {
  const rangeSlider = document.querySelector(".range-slider");
  const onMouseMove = (event) => {
    const sliderRect = rangeSlider.getBoundingClientRect();
    let newTop = event.clientY - sliderRect.top;
    newTop = Math.max(0, Math.min(newTop, sliderRect.height));
    rangeThumb.style.top = `${(newTop / sliderRect.height) * 100}%`;

    const elementIndex = elements.findIndex(
      (element) =>
        element.gnosis === document.getElementById("gnosisName").textContent
    );
    const characterIndex = Math.round(
      (newTop / sliderRect.height) *
        (elements[elementIndex].characters.length - 1)
    );
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

// Function to update the --light variable in :root CSS
function updateLightColor(color) {
  document.documentElement.style.setProperty("--light", color);
}

// Call the function to display the icons
displayElementIcons();

// Select the default element and character
selectElement(3);

// TEXT TRANSITIONS
function textUpdate() {
  let hold1 = document.getElementById("ptTitle");
  let hold2 = songList[songNumber].name;
  let charr1 = hold1.innerText.split("");
  let charr2 = hold2.split("");
  if (charr1.length > charr2.length) {
    for (let i = charr2.length; i < charr1.length; i++) {
      charr2.push("");
    }
  }
  if (charr2.length > charr1.length) {
    for (let i = charr1.length; i < charr2.length; i++) {
      charr1.push("");
    }
  }
  hold1.innerHTML = "";
  for (let i = 0; i < charr1.length; i++) {
    hold1.innerHTML += `<strong class="textSelect1">${charr1[i]}</strong>`;
  }
  let hold3 = document.querySelectorAll(".textSelect1");

  const textExchange1 = async () => {
    for (let i = 0; i < hold3.length; i++) {
      hold3[i].classList.add("fade1");
      await sleep(50);
      hold3[i].innerHTML = charr2[i];
    }
  };
  textExchange1();
}
