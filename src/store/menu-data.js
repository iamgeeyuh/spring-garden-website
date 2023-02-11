import { Fried, SmallLarge, PintQuart, Soda } from "./menu-class.js";

export const menu = [
  {
    section: "SPECIALTIES",
    id: Math.floor(Math.random() * 1000000000),
    items: [
      new Fried("Fried Half Chicken", 6.25, 0, 7.5, 7.75, 8.5),
      new Fried("Fried Chicken Wings", 6.25, 0, 7.5, 7.75, 8.5, 4),
      new Fried("Fried Fish", 6.25, 0, 7.5, 7.75, 8.5),
      new Fried("Fried Jumbo Shrimp", 6.5, 0, 7.25, 7.5, 8.75, 5),
      new Fried("Fried Rib Tips", 5.75, 9.25, 7.25, 7.5, 8.25),
      new Fried("Fried Baby Shrimp", 6.25, 0, 7.5, 7.75, 8.5),
      new Fried("Boneless Spare Ribs", 8, 0, 8.75, 9, 9.5),
      new Fried("Chicken Nugget", 6.25, 0, 7.5, 7.75, 8.5),
      new Fried("Fried Crabmeat Sticks", 5.5, 0, 6.95, 7.25, 7.95, 4),
      new Fried("Fried Scallops", 5.5, 0, 6.95, 7.25, 7.95, 10),
      //prettier-ignore
      new Fried("Chicken Wings w. Garlic or Honey Sauce", 6.75, 0, 8.25, 8.5, 9.25),
      //prettier-ignore
      new Fried("Spare Rib Tips w. Garlic or Honey Sauce", 6.25, 0, 7.5, 8.25, 9),
      new Fried("Boneless Chicken", 5.95, 0, 7.95, 8.95, 9.45),
      new Fried("French Fries", 2.75, 4.5),
      new Fried("Fried Green Plantain", 3.95, 5.75),
      new Fried("Fried Yellow Plantain", 3.95, 5.95),
      new Fried("Chicken Gizzard", 5.25, 0, 6.75, 7.5, 7.95),
      new Fried("Buffalo Wings", 6.75, 0, 8.25, 8.75, 9.25),
    ],
  },
  {
    section: "APPETIZER",
    id: Math.floor(Math.random() * 1000000000),
    items: [
      new SmallLarge("Roast Pork or Vegetable Roll", 1.95),
      new SmallLarge("Pork or Vegetable Spring Roll", 3.95, 0, 2),
      new SmallLarge("Shrimp Roll", 2.25),
      new SmallLarge("Cheese Wonton", 4.95, 0, 5),
      new SmallLarge("Fried Wonton", 5.95, 0, 12),
      new SmallLarge("Fantail Shrimp", 2.25, 0, 1),
      new SmallLarge("Shrimp Toast", 4.5, 0, 2),
      new SmallLarge("Boneless Spare Ribs", 8.5, 15.25),
      new SmallLarge("Steamed or Fried Dumpling", 7.25),
      new SmallLarge("Shrimp Dumpling", 7.5),
      new SmallLarge("Assorted Dumpling", 7.25),
      new SmallLarge("Soupy Pork Bun", 7.25),
      new SmallLarge("Barbecued Spare Ribs", 8.95, 16.25),
      new SmallLarge("Pu Pu Platter", 14.5),
      new SmallLarge("Beef on Stick", 7.95),
      new SmallLarge("Dim Sum", 7.25, 0, 5),
      new SmallLarge("Roast Pork", 7.5, 13.5),
      new SmallLarge("Szechuan Wonton", 5.75),
      new SmallLarge("Cold or Warm Noodles w. Sesame Sauce", 5.95),
      new SmallLarge("Chicken Stick", 6.95, 0, 4),
      new SmallLarge("Boneless Chicken w. Honey Sauce", 7.5),
      new SmallLarge("Scallion Pancake", 5.5),
      new SmallLarge("Wonton w, Sesame Sauce", 5.75),
    ],
  },
  {
    section: "SOUP",
    id: Math.floor(Math.random() * 1000000000),
    items: [],
  },
  {
    section: "FRIED RICE",
    id: Math.floor(Math.random() * 1000000000),
    items: [],
  },
  {
    section: "LO MEIN, HO FUN, MEI FUN",
    id: Math.floor(Math.random() * 1000000000),
    items: [],
  },
  {
    section: "CHOW MEIN, CHOP SUEY",
    id: Math.floor(Math.random() * 1000000000),
    items: [],
  },
  {
    section: "SWEET AND SOUR",
    id: Math.floor(Math.random() * 1000000000),
    items: [],
  },
  {
    section: "PORK",
    id: Math.floor(Math.random() * 1000000000),
    items: [],
  },
  {
    section: "CHICKEN",
    id: Math.floor(Math.random() * 1000000000),
    items: [],
  },
  {
    section: "SEAFOOD",
    id: Math.floor(Math.random() * 1000000000),
    items: [],
  },
  {
    section: "BEEF",
    id: Math.floor(Math.random() * 1000000000),
    items: [],
  },
  {
    section: "DUCK",
    id: Math.floor(Math.random() * 1000000000),
    items: [],
  },
  {
    section: "VEGETABLE",
    id: Math.floor(Math.random() * 1000000000),
    items: [],
  },
  {
    section: "HOUSE SPECIALTIES",
    id: Math.floor(Math.random() * 1000000000),
    items: [],
  },
  {
    section: "SidE ORDER",
    id: Math.floor(Math.random() * 1000000000),
    items: [],
  },
  {
    section: "EGG FOO YOUNG",
    id: Math.floor(Math.random() * 1000000000),
    items: [],
  },
  {
    section: "MOO SHU",
    id: Math.floor(Math.random() * 1000000000),
    items: [],
  },
  {
    section: "PAN FRIED NOODLES",
    id: Math.floor(Math.random() * 1000000000),
    items: [],
  },
  {
    section: "SPECIAL DIET MENU",
    id: Math.floor(Math.random() * 1000000000),
    items: [],
  },
  {
    section: "SPRING GARDEN SPECIAL",
    id: Math.floor(Math.random() * 1000000000),
    items: [],
  },
  {
    section: "LUNCH AND DINNER SPECIAL",
    id: Math.floor(Math.random() * 1000000000),
    items: [],
  },
];