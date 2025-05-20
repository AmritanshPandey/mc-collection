import R1 from '../assets/images/r1.png';
import R2 from '../assets/images/r2.png';
import R3 from '../assets/images/r3.png';
import Restaurant1 from '../assets/images/restaurant1.png';
import Restaurant2 from '../assets/images/restaurant2.png';
import Restaurant3 from '../assets/images/restaurant3.png';
import E1 from '../assets/images/e1.png';
import E2 from '../assets/images/e2.png';
import E3 from '../assets/images/e3.png';

export const experienceItems = [
  { image: Restaurant1, title: 'Indulge in a culinary journey at Osteria Francescana', link: '/experience/osteria' },
  { image: Restaurant2, title: 'Savor plant-based fine dining at Eleven Madison Park', link: '/experience/eleven-madison' },
  { image: Restaurant3, title: 'Experience the bold, nature-inspired cuisine of Noma', link: '/experience/noma' },
];

export const hotspotRestaurants = [
  {
    image: R1,
    name: "Peak with Priceless",
    location: "New York, New York",
    person: "Chef Estenzel",
    tags: ["Portuguese", "Michelin"],
    link: "/peak"      
  },
  {
    image: R2,
    name: "Brasa Gaucha",
    location: "Rome, Italy",
    person: "Chef Lorenzo Bianchi",
    tags: ["Italian"],
        
  },
  {
    image: R3,
    name: "Le Meurice",
    location: "Paris, France",
    person: "Chef Amaury Bouhours",
    tags: ["French", "Michelin"],
       
  }
];

export const experienceRestaurants = [
  {
    image: E1,
    name: "The Forest Table",
    location: "Zurich, Switzerland",
    person: "Chef Lukas Baumann",
    price: "$30 average price",
    tags: ["Foraged", "Seasonal"],
 
  },
  {
    image: E2,
    name: "Oceans & Origins",
    location: "Sydney, Australia",
    person: "Chef Mia Chen",
    price: "US$91 (approximate conversion)",
    tags: ["Seafood", "Tasting"],
    
  },
  {
    image: E3,
    name: "The Ember Room",
    location: "Cape Town, South Africa",
    person: "Chef Thabo Mbeki",
    price: "$50 average price",
    tags: ["Grill", "Signature"],
    
  }
];
