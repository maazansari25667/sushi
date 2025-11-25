// NOTE: All visible menu items are driven from this data.
// Do not hard-code dish names in components.
// This is the single source of truth for the restaurant menu.

export type MenuCategoryId =
  | "sushi"
  | "vegetarian-sushi"
  | "nigiri"
  | "maki"
  | "hot-food"
  | "curry"
  | "stir-fried";

export interface MenuItem {
  name: string;
  description?: string;
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
        name: "10 pieces of sushi",
        description: "5 nigiri, 5 maki",
        price: "139:-",
      },
      {
        name: "12 pieces of sushi",
        description: "7 nigiri, 5 maki",
        price: "159:-",
      },
      {
        name: "15 pieces of sushi",
        description: "8 nigiri, 7 maki",
        price: "189:-",
      },
      {
        name: "20 pieces of sushi",
        description: "10 nigiri, 10 maki",
        price: "239:-",
      },
      {
        name: "Sushi special",
        description: "Chef's selection of premium sushi pieces",
        price: "299:-",
      },
      {
        name: "Sushi deluxe",
        description: "Premium assortment with seasonal fish",
        price: "349:-",
      },
    ],
  },
  {
    id: "vegetarian-sushi",
    label: "Vegetarian Sushi",
    items: [
      {
        name: "Cucumber maki",
        description: "Fresh cucumber wrapped in seasoned rice",
        price: "45:-",
      },
      {
        name: "Avocado maki",
        description: "Creamy avocado with sesame seeds",
        price: "55:-",
      },
      {
        name: "Vegetarian deluxe",
        description: "12 pieces mixed vegetarian sushi",
        price: "129:-",
      },
      {
        name: "Veggie California roll",
        description: "Avocado, cucumber, and carrot with sesame",
        price: "65:-",
      },
      {
        name: "Inari sushi",
        description: "Sweet seasoned tofu pockets with rice",
        price: "39:-",
      },
      {
        name: "Rainbow veggie roll",
        description: "Colorful vegetables with spicy mayo",
        price: "79:-",
      },
    ],
  },
  {
    id: "nigiri",
    label: "Nigiri",
    items: [
      {
        name: "Salmon nigiri",
        description: "Fresh Norwegian salmon",
        price: "18:-",
      },
      {
        name: "Tuna nigiri",
        description: "Premium yellowfin tuna",
        price: "22:-",
      },
      {
        name: "Shrimp nigiri",
        description: "Cooked tiger shrimp",
        price: "16:-",
      },
      {
        name: "Eel nigiri",
        description: "Grilled eel with sweet sauce",
        price: "24:-",
      },
      {
        name: "Sea bass nigiri",
        description: "Fresh white fish",
        price: "19:-",
      },
      {
        name: "Scallop nigiri",
        description: "Fresh sea scallop",
        price: "26:-",
      },
      {
        name: "Octopus nigiri",
        description: "Tender cooked octopus",
        price: "20:-",
      },
      {
        name: "Tamago nigiri",
        description: "Sweet Japanese omelet",
        price: "15:-",
      },
    ],
  },
  {
    id: "maki",
    label: "Maki (Rolls)",
    items: [
      {
        name: "California Roll",
        description: "Crab, avocado, cucumber, Japanese mayonnaise",
        price: "139:-",
      },
      {
        name: "Tempura Roll",
        description: "Avocado, cucumber, fried king prawn and vegetables",
        price: "159:-",
      },
      {
        name: "Fried Spicy Tuna Roll",
        description:
          "Avocado, tuna, cucumber and coriander chili sauce with roasted onion",
        price: "159:-",
        spicy: true,
      },
      {
        name: "Twister Roll",
        description:
          "Philadelphia cheese, avocado, cucumber, masago and grilled salmon",
        price: "159:-",
      },
      {
        name: "Poke Bowl",
        description: "Salmon, avocado, cucumber, chili mayonnaise and rice",
        price: "149:-",
      },
    ],
  },
  {
    id: "hot-food",
    label: "Hot Food",
    items: [
      {
        name: "Chicken Teriyaki",
        description: "Grilled chicken with teriyaki sauce, served with rice and vegetables",
        price: "149:-",
      },
      {
        name: "Beef Yakiniku",
        description: "Japanese-style grilled beef with sesame and soy sauce",
        price: "169:-",
      },
      {
        name: "Tempura Platter",
        description: "Crispy fried shrimp and mixed vegetables with dipping sauce",
        price: "139:-",
      },
      {
        name: "Chicken Katsu",
        description: "Breaded and fried chicken cutlet with tonkatsu sauce",
        price: "155:-",
      },
      {
        name: "Gyoza (6 pcs)",
        description: "Pan-fried dumplings filled with pork and vegetables",
        price: "89:-",
      },
      {
        name: "Edamame",
        description: "Steamed soybeans with sea salt",
        price: "59:-",
        vegetarian: true,
        vegan: true,
      },
      {
        name: "Spring Rolls (4 pcs)",
        description: "Crispy vegetable spring rolls with sweet chili sauce",
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
        name: "Green curry",
        description: "Coconut milk, Thai basil, bamboo shoots",
        price: "149:-",
      },
      {
        name: "Red curry",
        description: "Coconut milk, Thai eggplant, bell peppers",
        price: "149:-",
      },
      {
        name: "Yellow curry",
        description: "Mild curry with potatoes and onions",
        price: "139:-",
      },
      {
        name: "Massaman curry",
        description: "Rich curry with peanuts and potatoes",
        price: "159:-",
      },
      {
        name: "Panang curry",
        description: "Thick curry with lime leaves and basil",
        price: "155:-",
      },
      {
        name: "Jungle curry",
        description: "Spicy curry with mixed vegetables",
        price: "145:-",
      },
    ],
  },
  {
    id: "stir-fried",
    label: "Stir-fried Dishes",
    items: [
      {
        name: "Pad Thai",
        description: "Rice noodles with tamarind sauce and peanuts",
        price: "139:-",
      },
      {
        name: "Pad See Ew",
        description: "Wide noodles with dark soy sauce and vegetables",
        price: "135:-",
      },
      {
        name: "Basil stir-fry",
        description: "Thai basil with chili and garlic sauce",
        price: "129:-",
      },
      {
        name: "Cashew stir-fry",
        description: "Roasted cashews with vegetables",
        price: "145:-",
      },
      {
        name: "Sweet and sour",
        description: "Pineapple, tomatoes, and bell peppers",
        price: "139:-",
      },
      {
        name: "Ginger stir-fry",
        description: "Fresh ginger with scallions and soy sauce",
        price: "135:-",
      },
      {
        name: "Thai fried rice",
        description: "Jasmine rice with egg and mixed vegetables",
        price: "125:-",
      },
    ],
  },
];