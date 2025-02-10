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
  constructor(name, element, constellation, emblem) {
    this.name = name;
    this.element = element;
    this.constellation = constellation;
    this.mainUrl = `./chars/${name}_Profile.webp`;
    this.miniUrl = `./chars/${name}_Portrait.png`;
    this.emblem = `./emblems/Emblem_${emblem}_White.png`;
  }
}

const elements = [
  new Element("Pyro", "#FF7F50"),
  new Element("Hydro", "#87CEFA"),
  new Element("Anemo", "#98FB98"),
  new Element("ELECTRO", "#DDA0DD"),
  new Element("Dendro", "#90EE90"),
  new Element("Cryo", "#AFEEEE"),
  new Element("Geo", "#FFD700"),
];

// Adding characters to elements
elements[0].addCharacter(new Character("Diluc", "Pyro", "Noctua", "Mondstadt"));
elements[0].addCharacter(
  new Character("Hu Tao", "Pyro", "Papilio Charontis", "Liyue")
);
elements[0].addCharacter(
  new Character("Bennett", "Pyro", "Rota Calamitas", "Mondstadt")
);

elements[1].addCharacter(
  new Character("Barbara", "Hydro", "Crater", "Mondstadt")
);
elements[1].addCharacter(
  new Character("Xingqiu", "Hydro", "Fabulae Textile", "Liyue")
);
elements[1].addCharacter(
  new Character("Ayato", "Hydro", "Cypressus Custos", "Inazuma")
);

elements[2].addCharacter(
  new Character("Venti", "Anemo", "Carmen Dei", "Mondstadt")
);
elements[2].addCharacter(
  new Character("Sucrose", "Anemo", "Ampulla", "Mondstadt")
);
elements[2].addCharacter(
  new Character("Kazuha", "Anemo", "Acer Palmatum", "Inazuma")
);

elements[3].addCharacter(
  new Character("Lisa", "Electro", "Tempus Fugit", "Mondstadt")
);
elements[3].addCharacter(new Character("", "Electro", "", ""));
elements[3].addCharacter(
  new Character("Yae Miko", "Electro", "Divina Vulpes", "Inazuma")
);

elements[4].addCharacter(
  new Character("Tighnari", "Dendro", "Vulpes Zerda", "Sumeru")
);
elements[4].addCharacter(
  new Character("Collei", "Dendro", "Leptailurus", "Sumeru")
);
elements[4].addCharacter(
  new Character("Alhaitham", "Dendro", "Vultur Volans", "Sumeru")
);

elements[5].addCharacter(
  new Character("Kaeya", "Cryo", "Pavo Ocellus", "Mondstadt")
);
elements[5].addCharacter(
  new Character("Chongyun", "Cryo", "Nubis Caesor", "Liyue")
);
elements[5].addCharacter(
  new Character("Eula", "Cryo", "Aphros Delos", "Mondstadt")
);

elements[6].addCharacter(
  new Character("Ningguang", "Geo", "Opus Aequilibrium", "Liyue")
);
elements[6].addCharacter(new Character("Zhongli", "Geo", "Lapis Dei", "Liyue"));
elements[6].addCharacter(
  new Character("Albedo", "Geo", "Princeps Cretaceus", "Dragonspine")
);

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
const slider = document.querySelector(".range-slider");
const thumb = document.querySelector(".range-thumb");
const thumbFollow = document.querySelector(".range-thumb-follow");
const track = document.querySelector(".range-track");
const elementSelectors = document.querySelector("#elementSelectors");
const stripes = document.querySelectorAll(".stripe");

let isDragging = false;

const updateThumb = (offsetY, rect) => {
  thumb.style.top = `${offsetY}px`;
  thumbFollow.style.top = `${offsetY + thumb.offsetHeight}px`; // Update follow element position

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

// Remove or disable the existing slider wheel listener
// slider.addEventListener("wheel", (event) => { ...existing code... });

// Remove or comment out the previous global wheel listener
// window.addEventListener("wheel", (event) => { ...existing code... });

// New wheel event listener for stepping through characters/elements
window.addEventListener("wheel", (event) => {
  event.preventDefault();
  const rect = slider.getBoundingClientRect();
  const currentElementName = document.getElementById("gnosisName").textContent;
  const currElementIndex = elements.findIndex(
    (el) => el.gnosis === currentElementName
  );
  let currentElement = elements[currElementIndex];
  let currentCharacterIndex = currentElement.characters.findIndex(
    (ch) => ch.name === currentCharacterName
  );

  let targetElement = currentElement;
  let newCharIndex = currentCharacterIndex;

  if (event.deltaY < 0) {
    // Scrolling upward: move to previous character or previous element if at first character
    newCharIndex = currentCharacterIndex - 1;
    if (newCharIndex < 0 && currElementIndex > 0) {
      selectElement(currElementIndex - 1);
      targetElement = elements[currElementIndex - 1];
      newCharIndex = targetElement.characters.length - 1;
    } else {
      newCharIndex = Math.max(0, newCharIndex);
    }
  } else if (event.deltaY > 0) {
    // Scrolling downward: move to next character or next element if at last character
    newCharIndex = currentCharacterIndex + 1;
    if (
      newCharIndex >= currentElement.characters.length &&
      currElementIndex < elements.length - 1
    ) {
      selectElement(currElementIndex + 1);
      targetElement = elements[currElementIndex + 1];
      newCharIndex = 0;
    } else {
      newCharIndex = Math.min(
        currentElement.characters.length - 1,
        newCharIndex
      );
    }
  }

  // Compute new thumb top based on target element's character count
  const newTop =
    (newCharIndex / (targetElement.characters.length - 1)) * rect.height;
  thumb.style.transition = "top 0.2s ease";
  thumbFollow.style.transition = "top 0.2s ease";
  updateThumb(newTop, rect);
  selectCharacter(newCharIndex, targetElement);
});

centerThumb(); // Center the thumb by default

// Function to display element icons
function displayElementIcons() {
  const container = document.getElementById("elementSelectors");
  elements.forEach((element, index) => {
    const elementContainer = document.createElement("div");
    elementContainer.classList.add("element-container");

    const imgGlow = document.createElement("img");
    imgGlow.src = element.iconUrl;
    imgGlow.alt = element.gnosis;
    imgGlow.classList.add("element-glow");

    const img = document.createElement("img");
    img.src = element.iconUrl;
    img.alt = element.gnosis;
    img.dataset.index = index;
    img.classList.add("eleLogo");

    elementContainer.addEventListener("click", () => selectElement(index));

    elementContainer.appendChild(imgGlow);
    elementContainer.appendChild(img);
    container.appendChild(elementContainer);
  });
}

// Function to select an element
function selectElement(index) {
  const selectedElement = elements[index];
  updateText(selectedElement.gnosis, "gnosisName", "textSelect3", true);
  updateLightColor(selectedElement.color);

  // Highlight selected element icon
  document
    .querySelectorAll("#elementSelectors .element-container")
    .forEach((container, i) => {
      container.classList.toggle("selected", i === index);
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
function updateText(hold2, element, text, span) {
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
    hold1.innerHTML += `<${span ? "span" : "strong"} class="${text}">${
      charr1[i]
    }</${span ? "span" : "strong"}>`;
  }
  let hold3 = document.querySelectorAll(`.${text}`);

  const textExchange1 = async () => {
    for (let i = 0; i < hold3.length; i++) {
      hold3[i].classList.add("fade1");
      await sleep(50);
      hold3[i].innerHTML = charr2[i];
    }
    hold1.style.textTransform = "uppercase";
  };
  textExchange1();
}

let profile = document.getElementById("profile");
let profileGlow = document.getElementById("profileGlow");
let portrait = document.getElementById("portrait");
let emblem = document.getElementById("emblem");
let currentCharacterName = document.getElementById("characterName").textContent;
let underText = document.getElementById("underText");

// Function to select a character
async function selectCharacter(index, element) {
  const selectedCharacter = element.characters[index];

  // Only update if the character is not already selected
  if (currentCharacterName !== selectedCharacter.name) {
    currentCharacterName = selectedCharacter.name;
    updateText(selectedCharacter.name, "characterName", "textSelect1");
    updateText(
      selectedCharacter.constellation,
      "constellationName",
      "textSelect2",
      true
    );
    profile.style.transform = "translateX(3rem)";
    profile.style.opacity = "0";
    profileGlow.style.transform = "translateX(3rem)";
    profileGlow.style.opacity = "0";
    setTimeout(() => {
      profile.style.transform = "translateX(-3rem)";
      profile.src = selectedCharacter.mainUrl;
      profileGlow.style.transform = "translateX(-3rem)";
      profileGlow.src = selectedCharacter.mainUrl;
    }, 200);
    setTimeout(() => {
      profile.style.opacity = "1";
      profile.style.transform = "";
      profileGlow.style.opacity = "1";
      profileGlow.style.transform = "";
    }, 300);
    portrait.style.scale = 0.9;
    portrait.style.opacity = 0;
    setTimeout(() => {
      portrait.src = selectedCharacter.miniUrl;
    }, 200);
    setTimeout(() => {
      portrait.style.scale = 1;
      portrait.style.opacity = 1;
    }, 300);
    if (!emblem.src.endsWith(selectedCharacter.emblem.slice(-20))) {
      emblem.style.opacity = "0%";
      setTimeout(() => {
        emblem.src = selectedCharacter.emblem;
      }, 200);
      setTimeout(() => {
        emblem.style.opacity = "20%";
      }, 300);
    }
    underText.style.opacity = "0";
    setTimeout(() => {
      underText.innerText = selectedCharacter.name;
      underText.style.textTransform = "uppercase";
    }, 200);
    setTimeout(() => {
      underText.style.opacity = "1";
    }, 300);
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
