const faker = require("faker");

exports.GENERATE_COLLECTIONS_AND_ITEMS = () => [
  {
    featured: true,
    id: faker.datatype.uuid(),
    imagePreviewURL: "https://i.ibb.co/cvpntL1/hats.png",
    items: [
      {
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        name: "Brown Brim",
        price: 25,
      },
      {
        imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
        name: "Blue Beanie",
        price: 18,
      },
      {
        imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
        name: "Brown Cowboy",
        price: 35,
      },
      {
        imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
        name: "Grey Brim",
        price: 25,
      },
      {
        imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
        name: "Green Beanie",
        price: 18,
      },
      {
        imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
        name: "Palm Tree Cap",
        price: 14,
      },
      {
        id: faker.datatype.uuid(),
        imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
        name: "Red Beanie",
        price: 18,
      },
      {
        id: faker.datatype.uuid(),
        imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
        name: "Wolf Cap",
        price: 14,
      },
      {
        id: faker.datatype.uuid(),
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        name: "Blue Snapback",
        price: 16,
      },
    ],
    name: "hats",
    title: "Hats",
  },
  {
    featured: true,
    id: faker.datatype.uuid(),
    imagePreviewURL: "https://i.ibb.co/0jqHpnp/sneakers.png",
    items: [
      {
        imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
        name: "Adidas NMD",
        price: 220,
      },
      {
        imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
        name: "Adidas Yeezy",
        price: 280,
      },
      {
        imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
        name: "Black Converse",
        price: 110,
      },
      {
        imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
        name: "Nike White AirForce",
        price: 160,
      },
      {
        imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
        name: "Nike Red High Tops",
        price: 160,
      },
      {
        imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
        name: "Nike Brown High Tops",
        price: 160,
      },
      {
        id: faker.datatype.uuid(),
        imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
        name: "Air Jordan Limited",
        price: 190,
      },
      {
        id: faker.datatype.uuid(),
        imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
        name: "Timberlands",
        price: 200,
      },
    ],
    name: "sneakers",
    title: "Sneakers",
  },
  {
    featured: true,
    id: faker.datatype.uuid(),
    imagePreviewURL: "https://i.ibb.co/px2tCc3/jackets.png",
    items: [
      {
        imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
        name: "Black Jean Shearling",
        price: 125,
      },
      {
        imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
        name: "Blue Jean Jacket",
        price: 90,
      },
      {
        imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
        name: "Grey Jean Jacket",
        price: 90,
      },
      {
        imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
        name: "Brown Shearling",
        price: 165,
      },
      {
        imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
        name: "Tan Trench",
        price: 185,
      },
    ],
    name: "jackets",
    title: "Jackets",
  },
  {
    featured: true,
    id: faker.datatype.uuid(),
    imagePreviewURL: "https://i.ibb.co/GCCdy8t/womens.png",
    items: [
      {
        imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
        name: "Blue Tanktop",
        price: 25,
      },
      {
        imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
        name: "Floral Blouse",
        price: 20,
      },
      {
        imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
        name: "Floral Dress",
        price: 80,
      },
      {
        imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
        name: "Red Dots Dress",
        price: 80,
      },
      {
        imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
        name: "Striped Sweater",
        price: 45,
      },
      {
        imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
        name: "Yellow Track Suit",
        price: 135,
      },
      {
        id: faker.datatype.uuid(),
        imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
        name: "White Blouse",
        price: 20,
      },
    ],
    name: "women",
    size: "large",
    title: "Women",
  },
  {
    featured: true,
    id: faker.datatype.uuid(),
    imagePreviewURL: "https://i.ibb.co/R70vBrQ/men.png",
    items: [
      {
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        name: "Camo Down Vest",
        price: 325,
      },
      {
        imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        name: "Floral T-shirt",
        price: 20,
      },
      {
        imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
        name: "Black & White Longsleeve",
        price: 25,
      },
      {
        imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
        name: "Pink T-shirt",
        price: 25,
      },
      {
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        name: "Jean Long Sleeve",
        price: 40,
      },
      {
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        name: "Burgundy T-shirt",
        price: 25,
      },
    ],
    name: "men",
    size: "large",
    title: "Men",
  },
];
