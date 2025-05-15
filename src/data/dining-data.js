import R1 from '../assets/images/r1.png';
import R2 from '../assets/images/r2.png';
import R3 from '../assets/images/r3.png';
import Restaurant1 from '../assets/images/restaurant1.png';
import E1 from '../assets/images/e1.png';
import E2 from '../assets/images/e2.png';
import E3 from '../assets/images/e3.png';

export const experienceItems = [
  { image: Restaurant1, title: 'Indulge in a culinary journey at Osteria Francescana', link: '/experience/osteria' },
  { image: Restaurant1, title: 'Savor plant-based fine dining at Eleven Madison Park', link: '/experience/eleven-madison' },
  { image: Restaurant1, title: 'Experience the bold, nature-inspired cuisine of Noma', link: '/experience/noma' },
];

export const hotspotRestaurants = [
  {
    image: R1,
    name: "Peak with Priceless",
    location: "New York, New York",
    chef: "Chef Estenzel",
    tags: ["Portuguese", "Michelin"],
    link: "/peak"      
  },
  {
    image: R2,
    name: "Brasa Gaucha",
    location: "Rome, Italy",
    chef: "Chef Lorenzo Bianchi",
    tags: ["Italian"],
    link: "/peak"      
  },
  {
    image: R3,
    name: "Le Meurice",
    location: "Paris, France",
    chef: "Chef Amaury Bouhours",
    tags: ["French", "Michelin"],
    link: "/peak"      
  }
];

export const experienceRestaurants = [
  {
    image: E1,
    name: "The Forest Table",
    location: "Zurich, Switzerland",
    chef: "Chef Lukas Baumann",
    tags: ["Foraged", "Seasonal"],
    link: "/experiences/forest-table"
  },
  {
    image: E2,
    name: "Oceans & Origins",
    location: "Sydney, Australia",
    chef: "Chef Mia Chen",
    tags: ["Seafood", "Tasting"],
    link: "/peak"      
  },
  {
    image: E3,
    name: "The Ember Room",
    location: "Cape Town, South Africa",
    chef: "Chef Thabo Mbeki",
    tags: ["Grill", "Signature"],
    link: "/peak"      
  }
];
