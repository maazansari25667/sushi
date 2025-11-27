// NOTE: All visible menu items are driven from this data.
// Do not hard-code dish names in components.
// This is the single source of truth for the restaurant menu.
// Names and descriptions use translation keys that must be resolved using useLanguage hook

export type MenuCategoryId =
  | "sushi"
  | "vegetarian-sushi"
  | "nigiri"
  | "maki"
  | "hot-food"
  | "curry"
  | "stir-fried";

export interface MenuItem {
  nameKey?: string; // Translation key for menu item name
  descriptionKey?: string; // Translation key for description
  name?: string; // Fallback if no translation key
  description?: string; // Fallback if no translation key
  price: string;
  // Optional flags for dietary requirements:
  spicy?: boolean;
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
}

export interface MenuCategory {
  id: MenuCategoryId;
  label: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "sushi",
    label: "Sushi",
    items: [
      {
        nameKey: "menuItems.sushi.10pieces",
        descriptionKey: "menuItems.sushi.10piecesDesc",
        price: "139:-",
      },
      {
        nameKey: "menuItems.sushi.12pieces",
        descriptionKey: "menuItems.sushi.12piecesDesc",
        price: "159:-",
      },
      {
        nameKey: "menuItems.sushi.15pieces",
        descriptionKey: "menuItems.sushi.15piecesDesc",
        price: "189:-",
      },
      {
        nameKey: "menuItems.sushi.20pieces",
        descriptionKey: "menuItems.sushi.20piecesDesc",
        price: "239:-",
      },
      {
        nameKey: "menuItems.sushi.special",
        descriptionKey: "menuItems.sushi.specialDesc",
        price: "299:-",
      },
      {
        nameKey: "menuItems.sushi.deluxe",
        descriptionKey: "menuItems.sushi.deluxeDesc",
        price: "349:-",
      },
    ],
  },
  {
    id: "vegetarian-sushi",
    label: "Vegetarian Sushi",
    items: [
      {
        nameKey: "menuItems.vegetarianSushi.cucumberMaki",
        descriptionKey: "menuItems.vegetarianSushi.cucumberMakiDesc",
        price: "45:-",
      },
      {
        nameKey: "menuItems.vegetarianSushi.avocadoMaki",
        descriptionKey: "menuItems.vegetarianSushi.avocadoMakiDesc",
        price: "55:-",
      },
      {
        nameKey: "menuItems.vegetarianSushi.vegetarianDeluxe",
        descriptionKey: "menuItems.vegetarianSushi.vegetarianDeluxeDesc",
        price: "129:-",
      },
      {
        nameKey: "menuItems.vegetarianSushi.veggieCalifornia",
        descriptionKey: "menuItems.vegetarianSushi.veggieCaliforniaDesc",
        price: "65:-",
      },
      {
        nameKey: "menuItems.vegetarianSushi.inari",
        descriptionKey: "menuItems.vegetarianSushi.inariDesc",
        price: "39:-",
      },
      {
        nameKey: "menuItems.vegetarianSushi.rainbowVeggie",
        descriptionKey: "menuItems.vegetarianSushi.rainbowVeggieDesc",
        price: "79:-",
      },
    ],
  },
  {
    id: "nigiri",
    label: "Nigiri",
    items: [
      {
        nameKey: "menuItems.nigiri.salmon",
        descriptionKey: "menuItems.nigiri.salmonDesc",
        price: "18:-",
      },
      {
        nameKey: "menuItems.nigiri.tuna",
        descriptionKey: "menuItems.nigiri.tunaDesc",
        price: "22:-",
      },
      {
        nameKey: "menuItems.nigiri.shrimp",
        descriptionKey: "menuItems.nigiri.shrimpDesc",
        price: "16:-",
      },
      {
        nameKey: "menuItems.nigiri.eel",
        descriptionKey: "menuItems.nigiri.eelDesc",
        price: "24:-",
      },
      {
        nameKey: "menuItems.nigiri.seaBass",
        descriptionKey: "menuItems.nigiri.seaBassDesc",
        price: "19:-",
      },
      {
        nameKey: "menuItems.nigiri.scallop",
        descriptionKey: "menuItems.nigiri.scallopDesc",
        price: "26:-",
      },
      {
        nameKey: "menuItems.nigiri.octopus",
        descriptionKey: "menuItems.nigiri.octopusDesc",
        price: "20:-",
      },
      {
        nameKey: "menuItems.nigiri.tamago",
        descriptionKey: "menuItems.nigiri.tamagoDesc",
        price: "15:-",
      },
    ],
  },
  {
    id: "maki",
    label: "Maki (Rolls)",
    items: [
      {
        nameKey: "menuItems.maki.californiaRoll",
        descriptionKey: "menuItems.maki.californiaRollDesc",
        price: "139:-",
      },
      {
        nameKey: "menuItems.maki.tempuraRoll",
        descriptionKey: "menuItems.maki.tempuraRollDesc",
        price: "159:-",
      },
      {
        nameKey: "menuItems.maki.friedSpicyTuna",
        descriptionKey: "menuItems.maki.friedSpicyTunaDesc",
        price: "159:-",
        spicy: true,
      },
      {
        nameKey: "menuItems.maki.twisterRoll",
        descriptionKey: "menuItems.maki.twisterRollDesc",
        price: "159:-",
      },
      {
        nameKey: "menuItems.maki.pokeBowl",
        descriptionKey: "menuItems.maki.pokeBowlDesc",
        price: "149:-",
      },
    ],
  },
  {
    id: "hot-food",
    label: "Hot Food",
    items: [
      {
        nameKey: "menuItems.hotFood.chickenTeriyaki",
        descriptionKey: "menuItems.hotFood.chickenTeriyakiDesc",
        price: "149:-",
      },
      {
        nameKey: "menuItems.hotFood.beefYakiniku",
        descriptionKey: "menuItems.hotFood.beefYakinikuDesc",
        price: "169:-",
      },
      {
        nameKey: "menuItems.hotFood.tempuraPlatter",
        descriptionKey: "menuItems.hotFood.tempuraPlatterDesc",
        price: "139:-",
      },
      {
        nameKey: "menuItems.hotFood.chickenKatsu",
        descriptionKey: "menuItems.hotFood.chickenKatsuDesc",
        price: "155:-",
      },
      {
        nameKey: "menuItems.hotFood.gyoza",
        descriptionKey: "menuItems.hotFood.gyozaDesc",
        price: "89:-",
      },
      {
        nameKey: "menuItems.hotFood.edamame",
        descriptionKey: "menuItems.hotFood.edamameDesc",
        price: "59:-",
        vegetarian: true,
        vegan: true,
      },
      {
        nameKey: "menuItems.hotFood.springRolls",
        descriptionKey: "menuItems.hotFood.springRollsDesc",
        price: "75:-",
        vegetarian: true,
      },
    ],
  },
  {
    id: "curry",
    label: "Curry Dishes",
    items: [
      {
        nameKey: "menuItems.curry.green",
        descriptionKey: "menuItems.curry.greenDesc",
        price: "149:-",
      },
      {
        nameKey: "menuItems.curry.red",
        descriptionKey: "menuItems.curry.redDesc",
        price: "149:-",
      },
      {
        nameKey: "menuItems.curry.yellow",
        descriptionKey: "menuItems.curry.yellowDesc",
        price: "139:-",
      },
      {
        nameKey: "menuItems.curry.massaman",
        descriptionKey: "menuItems.curry.massamanDesc",
        price: "159:-",
      },
      {
        nameKey: "menuItems.curry.panang",
        descriptionKey: "menuItems.curry.panangDesc",
        price: "155:-",
      },
      {
        nameKey: "menuItems.curry.jungle",
        descriptionKey: "menuItems.curry.jungleDesc",
        price: "145:-",
      },
    ],
  },
  {
    id: "stir-fried",
    label: "Stir-fried Dishes",
    items: [
      {
        nameKey: "menuItems.stirFried.padThai",
        descriptionKey: "menuItems.stirFried.padThaiDesc",
        price: "139:-",
      },
      {
        nameKey: "menuItems.stirFried.padSeeEw",
        descriptionKey: "menuItems.stirFried.padSeeEwDesc",
        price: "135:-",
      },
      {
        nameKey: "menuItems.stirFried.basil",
        descriptionKey: "menuItems.stirFried.basilDesc",
        price: "129:-",
      },
      {
        nameKey: "menuItems.stirFried.cashew",
        descriptionKey: "menuItems.stirFried.cashewDesc",
        price: "145:-",
      },
      {
        nameKey: "menuItems.stirFried.sweetSour",
        descriptionKey: "menuItems.stirFried.sweetSourDesc",
        price: "139:-",
      },
      {
        nameKey: "menuItems.stirFried.ginger",
        descriptionKey: "menuItems.stirFried.gingerDesc",
        price: "135:-",
      },
      {
        nameKey: "menuItems.stirFried.thaiFriedRice",
        descriptionKey: "menuItems.stirFried.thaiFriedRiceDesc",
        price: "125:-",
      },
    ],
  },
];