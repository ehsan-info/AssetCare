import { randomIntFromInterval } from "./common";

export const namesData = [
  {
    id: 1,
    first_name: "Ingelbert",
    last_name: "Foster",
  },
  {
    id: 2,
    first_name: "Halsy",
    last_name: "Haylett",
  },
  {
    id: 3,
    first_name: "Boone",
    last_name: "Bashford",
  },
  {
    id: 4,
    first_name: "Izzy",
    last_name: "Woodrough",
  },
  {
    id: 5,
    first_name: "Svend",
    last_name: "Cleaton",
  },
  {
    id: 6,
    first_name: "Patty",
    last_name: "Sket",
  },
  {
    id: 7,
    first_name: "Susanetta",
    last_name: "Haggith",
  },
  {
    id: 8,
    first_name: "Ker",
    last_name: "Schneidar",
  },
  {
    id: 9,
    first_name: "Reinold",
    last_name: "Rapport",
  },
  {
    id: 10,
    first_name: "Dagny",
    last_name: "Ruhben",
  },
  {
    id: 11,
    first_name: "Vincenz",
    last_name: "Thwaites",
  },
  {
    id: 12,
    first_name: "Nannette",
    last_name: "Bruckent",
  },
  {
    id: 13,
    first_name: "Brok",
    last_name: "Leyband",
  },
  {
    id: 14,
    first_name: "Osbert",
    last_name: "Callingham",
  },
  {
    id: 15,
    first_name: "Reamonn",
    last_name: "Boswell",
  },
  {
    id: 16,
    first_name: "Dewitt",
    last_name: "Filan",
  },
  {
    id: 17,
    first_name: "Jacquenette",
    last_name: "Mallett",
  },
  {
    id: 18,
    first_name: "Devin",
    last_name: "Foltin",
  },
  {
    id: 19,
    first_name: "Gaspar",
    last_name: "Fludgate",
  },
  {
    id: 20,
    first_name: "Juline",
    last_name: "Kettle",
  },
  {
    id: 21,
    first_name: "Alair",
    last_name: "Routley",
  },
  {
    id: 22,
    first_name: "Constantia",
    last_name: "Kneal",
  },
  {
    id: 23,
    first_name: "Lammond",
    last_name: "Conquest",
  },
  {
    id: 24,
    first_name: "Mata",
    last_name: "Spritt",
  },
  {
    id: 25,
    first_name: "Fran",
    last_name: "Oehme",
  },
  {
    id: 26,
    first_name: "Daloris",
    last_name: "Ussher",
  },
  {
    id: 27,
    first_name: "Berti",
    last_name: "Dougherty",
  },
  {
    id: 28,
    first_name: "Kerry",
    last_name: "Thurborn",
  },
  {
    id: 29,
    first_name: "Benji",
    last_name: "Heinrici",
  },
  {
    id: 30,
    first_name: "Saunderson",
    last_name: "Haughan",
  },
  {
    id: 31,
    first_name: "Inge",
    last_name: "Annatt",
  },
  {
    id: 32,
    first_name: "Elizabeth",
    last_name: "Pepall",
  },
  {
    id: 33,
    first_name: "Katrina",
    last_name: "Sealy",
  },
  {
    id: 34,
    first_name: "Renelle",
    last_name: "Leijs",
  },
  {
    id: 35,
    first_name: "Maryellen",
    last_name: "Cliffe",
  },
  {
    id: 36,
    first_name: "Kathie",
    last_name: "Oulner",
  },
  {
    id: 37,
    first_name: "Karoly",
    last_name: "Buten",
  },
  {
    id: 38,
    first_name: "Riordan",
    last_name: "Gavahan",
  },
  {
    id: 39,
    first_name: "Darya",
    last_name: "Fryman",
  },
  {
    id: 40,
    first_name: "Bartolomeo",
    last_name: "Esler",
  },
  {
    id: 41,
    first_name: "Karlens",
    last_name: "Dudman",
  },
  {
    id: 42,
    first_name: "Karee",
    last_name: "Janczewski",
  },
  {
    id: 43,
    first_name: "Dante",
    last_name: "Trayte",
  },
  {
    id: 44,
    first_name: "Ogden",
    last_name: "Prothero",
  },
  {
    id: 45,
    first_name: "Raviv",
    last_name: "Foale",
  },
  {
    id: 46,
    first_name: "Luciano",
    last_name: "Lowden",
  },
  {
    id: 47,
    first_name: "Adrianne",
    last_name: "Brackenbury",
  },
  {
    id: 48,
    first_name: "Vikky",
    last_name: "Beckerleg",
  },
  {
    id: 49,
    first_name: "Trumann",
    last_name: "Blades",
  },
  {
    id: 50,
    first_name: "Urbanus",
    last_name: "Quick",
  },
];
export const randomName = () => {
  return namesData[randomIntFromInterval(0, 50)];
};
