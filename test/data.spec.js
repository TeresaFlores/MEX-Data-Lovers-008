require('../src/data.js');

const summaryData = [
  {
    "id": 1,
    "num": "001",
    "name": "Bulbasaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ]
  }, {
    "id": 2,
    "num": "002",
    "name": "Ivysaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ]
  }, {
    "id": 3,
    "num": "003",
    "name": "Venusaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
    "type": [
      "Grass",
      "Poison"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ]
  },{
    "id": 4,
    "num": "004",
    "name": "Charmander",
    "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
    "type": [
      "Fire"
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ]
  }, {
    "id": 5,
    "num": "005",
    "name": "Charmeleon",
    "img": "http://www.serebii.net/pokemongo/pokemon/005.png",
    "type": [
      "Fire"
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ]
  }
];

describe('showPokemon', () => {
  it('is a function', () => {
    expect(typeof window.data.showPokemon).toBe('function');
  });

  it('Debería retornar 5 cualidades de 3 pokemones', () => {
    expect(window.data.showPokemon(summaryData, 'type')).toEqual([
      {
        "number": "001",
        "name": "Bulbasaur",
        "image": "http://www.serebii.net/pokemongo/pokemon/001.png",
        "type": [
          "Grass",
          "Poison"
        ],
        "debility": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
        ]
      }, {
        "number": "002",
        "name": "Ivysaur",
        "image": "http://www.serebii.net/pokemongo/pokemon/002.png",
        "type": [
          "Grass",
          "Poison"
        ],
        "debility": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
        ]
      }, {
        "number": "003",
        "name": "Venusaur",
        "image": "http://www.serebii.net/pokemongo/pokemon/003.png",
        "type": [
          "Grass",
          "Poison"
        ],
        "debility": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
        ]
      }, {
        "number": "004",
        "name": "Charmander",
        "image": "http://www.serebii.net/pokemongo/pokemon/004.png",
        "type": [
          "Fire"
        ],
        "debility": [
          "Water",
          "Ground",
          "Rock"
        ]
      }, {
        "number": "005",
        "name": "Charmeleon",
        "image": "http://www.serebii.net/pokemongo/pokemon/005.png",
        "type": [
          "Fire"
        ],
        "debility": [
          "Water",
          "Ground",
          "Rock"
        ]
      }

    ]);
  });
});
describe('filterData', () => {
  it('is a function', () => {
    expect(typeof window.data.filterData).toBe('function');
  });

  it('Debería retornar pokemones tipo fuego', () => {
    expect(window.data.filterData(summaryData, 'Fire')).toEqual([
      {
        "id": 4,
        "num": "004",
        "name": "Charmander",
        "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
        "type": [
          "Fire"
        ],
        "weaknesses": [
          "Water",
          "Ground",
          "Rock"
        ]
      }, {
        "id": 5,
        "num": "005",
        "name": "Charmeleon",
        "img": "http://www.serebii.net/pokemongo/pokemon/005.png",
        "type": [
          "Fire"
        ],
        "weaknesses": [
          "Water",
          "Ground",
          "Rock"
        ]
      }
    ]);
  });
});
describe('sortData', () => {
  it('is a function', () => {
    expect(typeof window.data.sortData).toBe('function');
  });

  it('Debería retornar pokemones de la Z a la A', () => {
    expect(window.data.sortData(summaryData, 'Z')).toEqual([
      {
        "id": 3,
        "num": "003",
        "name": "Venusaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
        "type": [
          "Grass",
          "Poison"
        ],
        "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
        ]
      }, {
        "id": 2,
        "num": "002",
        "name": "Ivysaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
        "type": [
          "Grass",
          "Poison"
        ],
        "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
        ]
      }, {
        "id": 5,
        "num": "005",
        "name": "Charmeleon",
        "img": "http://www.serebii.net/pokemongo/pokemon/005.png",
        "type": [
          "Fire"
        ],
        "weaknesses": [
          "Water",
          "Ground",
          "Rock"
        ]
      }, {
        "id": 4,
        "num": "004",
        "name": "Charmander",
        "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
        "type": [
          "Fire"
        ],
        "weaknesses": [
          "Water",
          "Ground",
          "Rock"
        ]
      }, {
        "id": 1,
        "num": "001",
        "name": "Bulbasaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
        "type": [
          "Grass",
          "Poison"
        ],
        "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
        ]
      } 
    ]);
  });
  // it('Debería retornar pokemones de mayor a menor', () => {
  //   expect(window.data.sortData(summaryData, 'superior')).toEqual([
  //     {
  //       "id": 5,
  //       "num": "005",
  //       "name": "Charmeleon",
  //       "img": "http://www.serebii.net/pokemongo/pokemon/005.png",
  //       "type": [
  //         "Fire"
  //       ],
  //       "weaknesses": [
  //         "Water",
  //         "Ground",
  //         "Rock"
  //       ]
  //     }, {
  //       "id": 4,
  //       "num": "004",
  //       "name": "Charmander",
  //       "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
  //       "type": [
  //         "Fire"
  //       ],
  //       "weaknesses": [
  //         "Water",
  //         "Ground",
  //         "Rock"
  //       ]
  //     }, {
  //       "id": 3,
  //       "num": "003",
  //       "name": "Venusaur",
  //       "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
  //       "type": [
  //         "Grass",
  //         "Poison"
  //       ],
  //       "weaknesses": [
  //         "Fire",
  //         "Ice",
  //         "Flying",
  //         "Psychic"
  //       ]
  //     }, {
  //       "id": 2,
  //       "num": "002",
  //       "name": "Ivysaur",
  //       "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
  //       "type": [
  //         "Grass",
  //         "Poison"
  //       ],
  //       "weaknesses": [
  //         "Fire",
  //         "Ice",
  //         "Flying",
  //         "Psychic"
  //       ]
  //     }, {
  //       "id": 1,
  //       "num": "001",
  //       "name": "Bulbasaur",
  //       "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
  //       "type": [
  //         "Grass",
  //         "Poison"
  //       ],
  //       "weaknesses": [
  //         "Fire",
  //         "Ice",
  //         "Flying",
  //         "Psychic"
  //       ]
  //     }
  //   ]);
  // });
});