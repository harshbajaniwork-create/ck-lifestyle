export const NAV_LINKS = [
  { name: "Home", to: "hero" },
  { name: "About Us", to: "about" },
  { name: "Facilities", to: "facilities" },
  { name: "Brands", to: "brands" },
  { name: "Gallery", to: "gallery" },
  { name: "Location", to: "location" },
  { name: "Contact", to: "contact" },
];

export const HERO_CONTENT = {
  title: "CK Lifestyle",
  subtitle: "South Gujarat's Largest Shopping & Entertainment Destination",
  description:
    "Experience the grandeur of South Gujarat's largest mall. Discover world-class shopping, dining, and entertainment all under one magnificent roof in Valsad.",
  cta: "Explore More",
  image: "/freepik__adjust__13028.jpeg.webp", // High quality mall image
};

export const FACILITIES = [
  {
    id: 1,
    title: "Premium Cinema",
    description:
      "Experience movies like never before in our state-of-the-art theaters.",
    image:
      "/freepik__a-promotional-image-for-a-movie-theater-experience__26517.webp",
  },
  {
    id: 2,
    title: "Gaming Zone",
    description:
      "Unleash your inner gamer with our cutting-edge arcade and gaming arena.",
    image:
      "/empty-gaming-chairs-illuminated-arcade-game-zone-shopping-center.webp",
  },
  {
    id: 3,
    title: "Luxury Hotel",
    description: "Stay in comfort and style at our premium hotel suites.",
    image: "/high-end-clean-atmospheric-hotel-rooms.webp",
  },
  {
    id: 4,
    title: "Fine Dining",
    description:
      "Savor exquisite cuisines at our multi-cuisine restaurants and banquet hall.",
    image: "/luxurious-dinner-hall-with-large-crystal-chandelier.webp",
  },
  {
    id: 5,
    title: "Arcade",
    description:
      "Fun for all ages with our extensive collection of arcade games.",
    image: "/boy-girl-are-piloting-blue-spacecrafts-playing-arcade.webp",
  },
  {
    id: 6,
    title: "Shopping",
    description: "Shop from the best brands in fashion, lifestyle, and more.",
    image: "/beautiful-couple-walking-shopping-mall.webp",
  },
  {
    id: 7,
    title: "Banquet Hall",
    description:
      "Host your special events in our elegant banquet hall with world-class amenities.",
    image: "/banquet.jpg",
  },
];

export const GALLERY_IMAGES = [
  "/freepik__enhance__39196.jpeg.webp",
  "/just-look-there-there-is-exactly-what-we-were-looking.webp",
  "/freepik__a-medium-shot-captures-a-caucasian-man-and-woman-e__50793.webp",
  "/luxurious-dinner-hall-with-large-crystal-chandelier.webp",
  "/high-end-clean-atmospheric-hotel-rooms.webp",
  "/empty-gaming-chairs-illuminated-arcade-game-zone-shopping-center.webp",
];

export const LOCATION_DETAILS = {
  address:
    "CK Lifestyle, Near Hanuman Temple, Near Red Lotus Lake, Udwada Railway Station Daman Road, Kikarla District, Dist-Valsad. 396185",
  coordinates: {
    lat: 20.465951255269974,
    lng: 72.90836826963603,
  },
  mapUrl: `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1213.1404941517696!2d72.90836826963603!3d20.465951255269974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDI3JzU3LjQiTiA3MsKwNTQnMzIuNCJF!5e1!3m2!1sen!2sin!4v1764586309853!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`, // Placeholder, would need real coords if available or use the address text
};

export const CONTACT_INFO = {
  phones: ["9537997711", "9537997722"],
  email: "cklifestyle.in@gmail.com",
  socials: {
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },
};

export const ABOUT_CONTENT = {
  title: "About CK Lifestyle",
  subtitle: "South Gujarat's Largest Mall",
  description:
    "CK Lifestyle stands as a landmark destination in Valsad, proudly serving as South Gujarat's largest and most prestigious shopping and entertainment complex. Spanning across a magnificent space, we bring together the finest brands, world-class entertainment, and exquisite dining experiences under one roof.",
  highlights: [
    {
      title: "Premium Shopping",
      description:
        "Home to the most sought-after national and international brands, offering an unparalleled shopping experience.",
    },
    {
      title: "Entertainment Hub",
      description:
        "State-of-the-art cinema, gaming zones, and arcade facilities that set new standards in entertainment.",
    },
    {
      title: "Culinary Excellence",
      description:
        "A diverse range of dining options featuring renowned food chains and fine dining restaurants.",
    },
    {
      title: "Luxury Hospitality",
      description:
        "Premium hotel suites and banquet facilities for your special occasions and comfortable stays.",
    },
  ],
};

export const BRANDS = {
  cinema: [{ name: "PVR Cinemas", logo: "/brands/pvr.png" }],
  gaming: [{ name: "Timezone", logo: "/brands/timezonegames.png" }],
  shopping: [
    { name: "Snitch", logo: "/brands/snitch.png" },
    { name: "Bonkers", logo: "/brands/bonkerscorner.png" },
    { name: "Arvind", logo: "/brands/arvind.png" },
    { name: "Jade Blue", logo: "/brands/jadeblue.png" },
    { name: "Mango", logo: "/brands/mango.png" },
    { name: "Nykaa", logo: "/brands/nykaa.png" },
    { name: "Nike", logo: "/brands/nike.png" },
  ],
  dining: [
    { name: "McDonald's", logo: "/brands/mcdonalds.png" },
    { name: "Burger King", logo: "/brands/burgerking.png" },
    { name: "Taco Bell", logo: "/brands/tacobell.png" },
    { name: "Domino's", logo: "/brands/dominos.png" },
  ],
};
