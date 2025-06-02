import R1 from '../assets/images/r1.png';
import R2 from '../assets/images/r2.png';
import R3 from '../assets/images/r3.png';
import A1 from '../assets/images/taylor.png';
import A2 from '../assets/images/thrown.png';
import A3 from '../assets/images/drake.png';
import Restaurant1 from '../assets/images/restaurant1.png';
import Restaurant2 from '../assets/images/restaurant2.png';
import Restaurant3 from '../assets/images/restaurant3.png';
import E1 from '../assets/images/e1.png';
import E2 from '../assets/images/e2.png';
import E3 from '../assets/images/e3.png';
import Artist1 from '../assets/images/beyonce.png'
import Artist2 from '../assets/images/coldplay.png'
import Artist3 from '../assets/images/linkinpark.png'
import M1 from '../assets/images/m1.png';
import M2 from '../assets/images/m2.png';
import M3 from '../assets/images/m3.png';

export const experienceItems = [
  { image: Restaurant1, title: 'Indulge in a culinary journey at Osteria Francescana', link: '/experience/osteria' },
  { image: Restaurant2, title: 'Savor plant-based fine dining at Eleven Madison Park', link: '/experience/eleven-madison' },
  { image: Restaurant3, title: 'Experience the bold, nature-inspired cuisine of Noma', link: '/experience/noma' },
];

export const entertainmentItems = [
  { image: Artist1, title: 'Celestia: Starlight Harmony Tour', link: '/experience/celestia' }, // 33 chars
  { image: Artist2, title: 'NovaRise: Symphony of the Skies', link: '/experience/novarise' }, // 34 chars
  { image: Artist3, title: 'Echo Drive: Beyond the Horizon', link: '/experience/echodrive' },  // 33 chars
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


export const featuredArtist = [
  {
    image: A1,
    name: "Golden Avenue: A Tribute to Iconic Voices", 
    location: "New York, New York", 
    person: "$30 average price", 
    tags: ["Presale"],
  },
  {
    image: A2,
    name: "Stellar: Echo Chamber Global Tour", 
    location: "Chicago, Illinois", 
    person: "$30 average", 
    tags: ["Presale"],
  },
  {
    image: A3,
    name: "Aurora Sound: A Celebration of Hits", 
    location: "Toronto, Canada", 
    person: "$35 average price", 
    tags: ["Presale"],
  }
];

export const experienceEntertainment = [
  {
    image: M1,
    name: "A Night at Ballet Flamenco Andalucio",
    location: "Los Angeleus, California",
    price: "$30 average price",
    tags: ["Coming soon"],
  },
  {
  image: M2,
  name: "Jazz Under the Stars: Live at Central Park",
  location: "New York, New York",
  price: "$40 average price",
  tags: ["Presale"],
},

{
  image: M3,
  name: "An Evening with Classical Legends",
  location: "Chicago, Illinois",
  price: "$35 average price",
  tags: ["Coming soon"],
}
];

