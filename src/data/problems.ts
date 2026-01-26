export interface Problem {
  id: string;
  size: number;
  turn: 'black' | 'white'; 
  title: string;
  initialState: string;
  solution: any[]; 
  category: string;
}
export const problemSet = [
  {
    id: "prob-1",
    category: "Rules",
    size:9,
    turn: "black",
    title: "Beyaz Oynar",
    initialState: '[[null,null,null,{\"x\":0,\"y\":3,\"color\":\"black\"},{\"x\":0,\"y\":4,\"color\":\"white\"},null,null,null,null],[{\"x\":1,\"y\":0,\"color\":\"black\"},null,{\"x\":1,\"y\":2,\"color\":\"black\"},{\"x\":1,\"y\":3,\"color\":\"black\"},{\"x\":1,\"y\":4,\"color\":\"white\"},null,null,null,null],[null,{\"x\":2,\"y\":1,\"color\":\"black\"},{\"x\":2,\"y\":2,\"color\":\"black\"},{\"x\":2,\"y\":3,\"color\":\"black\"},{\"x\":2,\"y\":4,\"color\":\"white\"},null,null,null,null],[{\"x\":3,\"y\":0,\"color\":\"white\"},{\"x\":3,\"y\":1,\"color\":\"black\"},null,{\"x\":3,\"y\":3,\"color\":\"black\"},{\"x\":3,\"y\":4,\"color\":\"white\"},null,null,null,null],[null,{\"x\":4,\"y\":1,\"color\":\"white\"},{\"x\":4,\"y\":2,\"color\":\"white\"},{\"x\":4,\"y\":3,\"color\":\"white\"},null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]',
    solution: [{
      "x": 0,
      "y": 1,
      "color": "white"
    }]
  },
   {
    id: "prob-1",
    category: "Rules",
    size:9,
    turn: "black",
    title: "Beyaz Oynar",
    initialState: '[[null,null,null,{\"x\":0,\"y\":3,\"color\":\"black\"},{\"x\":0,\"y\":4,\"color\":\"white\"},null,null,null,null],[{\"x\":1,\"y\":0,\"color\":\"black\"},null,{\"x\":1,\"y\":2,\"color\":\"black\"},{\"x\":1,\"y\":3,\"color\":\"black\"},{\"x\":1,\"y\":4,\"color\":\"white\"},null,null,null,null],[null,{\"x\":2,\"y\":1,\"color\":\"black\"},{\"x\":2,\"y\":2,\"color\":\"black\"},{\"x\":2,\"y\":3,\"color\":\"black\"},{\"x\":2,\"y\":4,\"color\":\"white\"},null,null,null,null],[{\"x\":3,\"y\":0,\"color\":\"white\"},{\"x\":3,\"y\":1,\"color\":\"black\"},null,{\"x\":3,\"y\":3,\"color\":\"black\"},{\"x\":3,\"y\":4,\"color\":\"white\"},null,null,null,null],[null,{\"x\":4,\"y\":1,\"color\":\"white\"},{\"x\":4,\"y\":2,\"color\":\"white\"},{\"x\":4,\"y\":3,\"color\":\"white\"},null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]',
    solution: [{
      "x": 0,
      "y": 1,
      "color": "white"
    }]
  },
  {
    id: "Endgame",
    category: "",
    size:19,
    turn: "white",
    title: "tesuji",
    initialState: '[[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},{\"color\":\"white\"},null,null],[null,null,null,{\"color\":\"white\"},null,null,null,null,null,null,null,null,null,null,null,{\"color\":\"black\"},{\"color\":\"black\"},null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,{\"color\":\"white\"},null,null,null,null,null,null,null,null,null,null,null,null,null,{\"color\":\"black\"},null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,{\"color\":\"black\"},null,null,null,null,null,{\"color\":\"black\"},null,null,null,null,null,{\"color\":\"black\"},null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]]',
    solution: [{
      "x": 16,
      "y": 1,
      "color": "black"
    }]
  }
];