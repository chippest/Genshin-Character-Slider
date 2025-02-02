import { Character, characters } from "./characters.js";

class Element {
  constructor(gnosis) {
    this.gnosis = gnosis;
    this.iconUrl = `./elements/Element_${gnosis}.svg`;
    this.characters = characters[gnosis] || [];
  }

  addCharacter(character) {
    this.characters.push(character);
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
      rangeThumb.style.top = `${(newTop / sliderRect.height) * 100}%`;

      const elementIndex = elements.findIndex(
        (element) =>
          element.gnosis === document.getElementById("gnosisName").textContent
      );
      const characterIndex = Math.round(
        (newTop / sliderRect.height) *
          (elements[elementIndex].characters.length - 1)
      );

      const currentCharacterName =
        document.getElementById("characterName").textContent;
      if (
        elements[elementIndex].characters[characterIndex].name !==
        currentCharacterName
      ) {
        selectCharacter(characterIndex, elements[elementIndex]);
      }
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
