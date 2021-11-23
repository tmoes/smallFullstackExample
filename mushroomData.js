var mushroomData = [
  {
    mushroom_name: "Cantharellus Cibarius",
    mushroom_common_name: "Golden Chantrelle",
    region: {
      Northwest: true,
      Southwest: false,
      Northeast: false,
      Southeast: true,
      Rocky_Mountains: true,
      Midwest: false
    },
    mushroom_pic_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Chanterelle_Cantharellus_cibarius.jpg/440px-Chanterelle_Cantharellus_cibarius.jpg",
    mushroom_caveats: "None"
  },
  {
    mushroom_name: "Craterellus Tubaeformis",
    mushroom_common_name: "Funnel Chanterelle, Yellowfoot, Winter Mushroom",
    region: {
      Northwest: true,
      Southwest: false,
      Northeast: true,
      Southeast: true,
      Rocky_Mountains: true,
      Midwest: false
    },
    mushroom_pic_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Craterellus_tubaeformis_LC0374.jpg/440px-Craterellus_tubaeformis_LC0374.jpg",
    mushroom_caveats: "None"
  },
  {
    mushroom_name: "Craterellus Cornucopioides",
    mushroom_common_name: "Black Chanterelle, Black Trumpet, Horn of Plenty",
    region: {
      Northwest: true,
      Southwest: false,
      Northeast: true,
      Southeast: true,
      Rocky_Mountains: true,
      Midwest: false
    },
    mushroom_pic_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Craterellus_cornucopioides_JPG1.jpg/468px-Craterellus_cornucopioides_JPG1.jpg",
    mushroom_caveats: "None"
  },
  {
    mushroom_name: "Clitocybe Nuda",
    mushroom_common_name: "Blue Stalk Mushroom, Wood Blewit, Blewitt",
    region: {
      Northwest: true,
      Southwest: false,
      Northeast: true,
      Southeast: true,
      Rocky_Mountains: true,
      Midwest: false
    },
    mushroom_pic_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Lepista_nuda_LC0372.jpg/440px-Lepista_nuda_LC0372.jpg",
    mushroom_caveats: "Never eat raw, may cause allergic reactions"
  },
  {
    mushroom_name: "Boletus Edulis",
    mushroom_common_name: "Porcini, King Bolete, Penny Bun",
    region: {
      Northwest: true,
      Southwest: false,
      Northeast: true,
      Southeast: false,
      Rocky_Mountains: true,
      Midwest: false
    },
    mushroom_pic_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Boletus_edulis_EtgHollande_041031_091.jpg/440px-Boletus_edulis_EtgHollande_041031_091.jpg",
    mushroom_caveats: "None"
  },
  {
    mushroom_name: "Grifola Frondosa",
    mushroom_common_name: "Maitake, Hen-of-the-Wood, Ram’s Head, Sheep’s Head",
    region: {
      Northwest: false,
      Southwest: false,
      Northeast: true,
      Southeast: false,
      Rocky_Mountains: true,
      Midwest: true
    },
    mushroom_pic_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Eikhaas.JPG/468px-Eikhaas.JPG",
    mushroom_caveats: "May cause allergic reactions"
  },
  {
    mushroom_name: "Gyromitra Esculenta",
    mushroom_common_name: "False Morel",
    region: {
      Northwest: true,
      Southwest: false,
      Northeast: true,
      Southeast: false,
      Rocky_Mountains: false,
      Midwest: true
    },
    mushroom_pic_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Fr%C3%BChjahrslorchel.JPG/440px-Fr%C3%BChjahrslorchel.JPG",
    mushroom_caveats: "Never to be eaten raw, may cause allergic reactions"
  },
  {
    mushroom_name: "Hericium Erinaceus",
    mushroom_common_name: "Lion's Mane, Bearded Hedgehog Mushroom, Bearded Tooth Fungus, Bearded Tooth Mushroom, Pom Pom mushroom, Satyr’s Beard",
    region: {
      Northwest: true,
      Southwest: false,
      Northeast: true,
      Southeast: true,
      Rocky_Mountains: false,
      Midwest: true
    },
    mushroom_pic_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Igelstachelbart_Nov_06.jpg/440px-Igelstachelbart_Nov_06.jpg",
    mushroom_caveats: "None"
  },
  {
    mushroom_name: "Cortinarius Caperatus",
    mushroom_common_name: "Gypsy Mushroom",
    region: {
      Northwest: true,
      Southwest: true,
      Northeast: true,
      Southeast: true,
      Rocky_Mountains: true,
      Midwest: true
    },
    mushroom_pic_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/C.caperatus.jpg/440px-C.caperatus.jpg",
    mushroom_caveats: "None"
  },
  {
    mushroom_name: "Tricholoma Matsutake",
    mushroom_common_name: "Pine Mushroom, Matsutake",
    region: {
      Northwest: true,
      Southwest: true,
      Northeast: false,
      Southeast: false,
      Rocky_Mountains: false,
      Midwest: false
    },
    mushroom_pic_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Matsutake.jpg/440px-Matsutake.jpg",
    mushroom_caveats: "None"
  },
  {
    mushroom_name: "Agaricus Bisporus",
    mushroom_common_name: "Button Mushroom, Crimini Mushroom",
    region: {
      Northwest: false,
      Southwest: false,
      Northeast: false,
      Southeast: true,
      Rocky_Mountains: false,
      Midwest: true
    },
    mushroom_pic_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/ChampignonMushroom.jpg/440px-ChampignonMushroom.jpg",
    mushroom_caveats: "None"
  },
  {
    mushroom_name: "Ganoderma Lucidum",
    mushroom_common_name: "Reishi",
    region: {
      Northwest: false,
      Southwest: true,
      Northeast: false,
      Southeast: false,
      Rocky_Mountains: false,
      Midwest: false
    },
    mushroom_pic_url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Ganoderma.lucidum.shanofee.png/440px-Ganoderma.lucidum.shanofee.png",
    mushroom_caveats: "None"
  },
  {
    mushroom_name: "Auricularia Auricula-Judae",
    mushroom_common_name: "Jelly Ear",
    region: {
      Northwest: true,
      Southwest: true,
      Northeast: true,
      Southeast: true,
      Rocky_Mountains: true,
      Midwest: true
    },
    mushroom_pic_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Auricularia_auricula-judae_64485.JPG/470px-Auricularia_auricula-judae_64485.JPG",
    mushroom_caveats: "Wash thoroughly before use"
  },
  {
    mushroom_name: "Morchella Conica",
    mushroom_common_name: "Black Morel",
    region: {
      Northwest: true,
      Southwest: true,
      Northeast: true,
      Southeast: true,
      Rocky_Mountains: true,
      Midwest: true
    },
    mushroom_pic_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Morchella_conica_1_beentree.jpg/440px-Morchella_conica_1_beentree.jpg",
    mushroom_caveats: "May cause allergic reactions"
  },
  {
    mushroom_name: "Morchella Esculenta",
    mushroom_common_name: "Yellow Morel, True Morel, Common Morel",
    region: {
      Northwest: true,
      Southwest: true,
      Northeast: true,
      Southeast: true,
      Rocky_Mountains: true,
      Midwest: true
    },
    mushroom_pic_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Morchella_esculenta_-_DE_-_TH_-_2013-05-01_-_01.JPG/440px-Morchella_esculenta_-_DE_-_TH_-_2013-05-01_-_01.JPG",
    mushroom_caveats: "May cause allergic reactions"
  }
]

module.exports.mushroomData = mushroomData;