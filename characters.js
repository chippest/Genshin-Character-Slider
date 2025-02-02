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

const characters = {
  Pyro: [
    new Character(
      "Diluc",
      1,
      "Pyro",
      "Noctua",
      "diluc_main_url",
      "diluc_mini_url",
      "diluc_ref_area_url"
    ),
    new Character(
      "Amber",
      2,
      "Pyro",
      "Lepus",
      "amber_main_url",
      "amber_mini_url",
      "amber_ref_area_url"
    ),
    new Character(
      "Bennett",
      15,
      "Pyro",
      "Rota Calamitas",
      "bennett_main_url",
      "bennett_mini_url",
      "bennett_ref_area_url"
    ),
  ],
  Hydro: [
    new Character(
      "Mona",
      3,
      "Hydro",
      "Astrolabos",
      "mona_main_url",
      "mona_mini_url",
      "mona_ref_area_url"
    ),
    new Character(
      "Tartaglia",
      4,
      "Hydro",
      "Monoceros Caeli",
      "tartaglia_main_url",
      "tartaglia_mini_url",
      "tartaglia_ref_area_url"
    ),
    new Character(
      "Barbara",
      16,
      "Hydro",
      "Crater",
      "barbara_main_url",
      "barbara_mini_url",
      "barbara_ref_area_url"
    ),
  ],
  Anemo: [
    new Character(
      "Venti",
      5,
      "Anemo",
      "Carmen Dei",
      "venti_main_url",
      "venti_mini_url",
      "venti_ref_area_url"
    ),
    new Character(
      "Jean",
      6,
      "Anemo",
      "Leo Minor",
      "jean_main_url",
      "jean_mini_url",
      "jean_ref_area_url"
    ),
    new Character(
      "Sucrose",
      17,
      "Anemo",
      "Ampulla",
      "sucrose_main_url",
      "sucrose_mini_url",
      "sucrose_ref_area_url"
    ),
  ],
  Electro: [
    new Character(
      "Lisa",
      7,
      "Electro",
      "Tempus Fugit",
      "lisa_main_url",
      "lisa_mini_url",
      "lisa_ref_area_url"
    ),
    new Character(
      "Razor",
      8,
      "Electro",
      "Lupus Minor",
      "razor_main_url",
      "razor_mini_url",
      "razor_ref_area_url"
    ),
    new Character(
      "Beidou",
      18,
      "Electro",
      "Victor Mare",
      "beidou_main_url",
      "beidou_mini_url",
      "beidou_ref_area_url"
    ),
  ],
  Dendro: [
    new Character(
      "Tighnari",
      9,
      "Dendro",
      "Vulpes Zerda",
      "tighnari_main_url",
      "tighnari_mini_url",
      "tighnari_ref_area_url"
    ),
    new Character(
      "Collei",
      10,
      "Dendro",
      "Leptailurus",
      "collei_main_url",
      "collei_mini_url",
      "collei_ref_area_url"
    ),
    new Character(
      "Alhaitham",
      19,
      "Dendro",
      "Vultur Volans",
      "alhaitham_main_url",
      "alhaitham_mini_url",
      "alhaitham_ref_area_url"
    ),
  ],
  Cryo: [
    new Character(
      "Kaeya",
      11,
      "Cryo",
      "Pavo Ocellus",
      "kaeya_main_url",
      "kaeya_mini_url",
      "kaeya_ref_area_url"
    ),
    new Character(
      "Chongyun",
      12,
      "Cryo",
      "Nubis Caesor",
      "chongyun_main_url",
      "chongyun_mini_url",
      "chongyun_ref_area_url"
    ),
    new Character(
      "Ganyu",
      20,
      "Cryo",
      "Sinae Unicornis",
      "ganyu_main_url",
      "ganyu_mini_url",
      "ganyu_ref_area_url"
    ),
  ],
  Geo: [
    new Character(
      "Ningguang",
      13,
      "Geo",
      "Opus Aequilibrium",
      "ningguang_main_url",
      "ningguang_mini_url",
      "ningguang_ref_area_url"
    ),
    new Character(
      "Zhongli",
      14,
      "Geo",
      "Lapis Dei",
      "zhongli_main_url",
      "zhongli_mini_url",
      "zhongli_ref_area_url"
    ),
    new Character(
      "Albedo",
      21,
      "Geo",
      "Princeps Cretaceus",
      "albedo_main_url",
      "albedo_mini_url",
      "albedo_ref_area_url"
    ),
  ],
};

export { Character, characters };
