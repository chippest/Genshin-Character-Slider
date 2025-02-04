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
  constructor(name, element, constellation, miniUrl, refAreaUrl) {
    this.name = name;
    this.element = element;
    this.constellation = constellation;
    this.mainUrl = `./chars/${name}_Profile.webp`;
    this.miniUrl = `./chars/${name}_Portrait.png`;
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
  new Character("Diluc", "Pyro", "Noctua", "diluc_ref_area_url")
);
elements[0].addCharacter(
  new Character("Hu Tao", "Pyro", "Papilio Charontis", "hutao_ref_area_url")
);
elements[0].addCharacter(
  new Character("Bennett", "Pyro", "Rota Calamitas", "bennett_ref_area_url")
);

elements[1].addCharacter(
  new Character("Mona", "Hydro", "Astrolabos", "mona_ref_area_url")
);
elements[1].addCharacter(
  new Character(
    "Tartaglia",
    "Hydro",
    "Monoceros Caeli",
    "tartaglia_ref_area_url"
  )
);
elements[1].addCharacter(
  new Character("Barbara", "Hydro", "Crater", "barbara_ref_area_url")
);

elements[2].addCharacter(
  new Character("Venti", "Anemo", "Carmen Dei", "venti_ref_area_url")
);
elements[2].addCharacter(
  new Character("Jean", "Anemo", "Leo Minor", "jean_ref_area_url")
);
elements[2].addCharacter(
  new Character("Sucrose", "Anemo", "Ampulla", "sucrose_ref_area_url")
);

elements[3].addCharacter(
  new Character("Lisa", "Electro", "Tempus Fugit", "lisa_ref_area_url")
);
elements[3].addCharacter(
  new Character("Razor", "Electro", "Lupus Minor", "razor_ref_area_url")
);
elements[3].addCharacter(
  new Character("Beidou", "Electro", "Victor Mare", "beidou_ref_area_url")
);

elements[4].addCharacter(
  new Character("Tighnari", "Dendro", "Vulpes Zerda", "tighnari_ref_area_url")
);
elements[4].addCharacter(
  new Character("Collei", "Dendro", "Leptailurus", "collei_ref_area_url")
);
elements[4].addCharacter(
  new Character(
    "Alhaitham",
    "Dendro",
    "Vultur Volans",
    "alhaitham_ref_area_url"
  )
);

elements[5].addCharacter(
  new Character("Kaeya", "Cryo", "Pavo Ocellus", "kaeya_ref_area_url")
);
elements[5].addCharacter(
  new Character("Chongyun", "Cryo", "Nubis Caesor", "chongyun_ref_area_url")
);
elements[5].addCharacter(
  new Character("Ganyu", "Cryo", "Sinae Unicornis", "ganyu_ref_area_url")
);

elements[6].addCharacter(
  new Character(
    "Ningguang",
    "Geo",
    "Opus Aequilibrium",
    "ningguang_ref_area_url"
  )
);
elements[6].addCharacter(
  new Character("Zhongli", "Geo", "Lapis Dei", "zhongli_ref_area_url")
);
elements[6].addCharacter(
  new Character("Albedo", "Geo", "Princeps Cretaceus", "albedo_ref_area_url")
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

let profile = document.getElementById("profile");
let portrait = document.getElementById("portrait");

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
    profile.style.transform = "translateX(3rem)";
    profile.style.opacity = "0";
    setTimeout(() => {
      profile.style.transform = "translateX(-3rem)";
      profile.src = selectedCharacter.mainUrl;
    }, 200);
    setTimeout(() => {
      profile.style.opacity = "1";
      profile.style.transform = "";
    }, 200);
    portrait.src = selectedCharacter.miniUrl;
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
