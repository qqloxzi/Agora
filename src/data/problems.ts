export interface SolutionNode {
  x: number;
  y: number;
  color: string;
  children?: SolutionNode[]; // Kendi tipinden çocukları olabilir
  status?: 'correct' | 'wrong' | null;
}
export interface Problem {
  id: string;
  size: number;
  turn: 'black' | 'white'; 
  title: string;
  initialState: string;
  solution: SolutionNode[] | { children: SolutionNode[] };
  category: string;
}

export const problemSet: Problem[] = [
  {
    id: "prob-1",
    category: "Kurallar",
    size: 9,
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
    category: "Açılış Prensipleri 1",
    size: 9,
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
    category: "Açılış Prensipleri 1",
    size: 9,
    turn: "black",
    title: "Beyaz Oynar",
    initialState: '[[null,null,null,{\"x\":0,\"y\":3,\"color\":\"black\"},{\"x\":0,\"y\":4,\"color\":\"white\"},null,null,null,null],[{\"x\":1,\"y\":0,\"color\":\"black\"},null,{\"x\":1,\"y\":2,\"color\":\"black\"},{\"x\":1,\"y\":3,\"color\":\"black\"},{\"x\":1,\"y\":4,\"color\":\"white\"},null,null,null,null],[null,{\"x\":2,\"y\":1,\"color\":\"black\"},{\"x\":2,\"y\":2,\"color\":\"black\"},{\"x\":2,\"y\":3,\"color\":\"black\"},{\"x\":2,\"y\":4,\"color\":\"white\"},null,null,null,null],[{\"x\":3,\"y\":0,\"color\":\"white\"},{\"x\":3,\"y\":1,\"color\":\"black\"},null,{\"x\":3,\"y\":3,\"color\":\"black\"},{\"x\":3,\"y\":4,\"color\":\"white\"},null,null,null,null],[null,{\"x\":4,\"y\":1,\"color\":\"white\"},{\"x\":4,\"y\":2,\"color\":\"white\"},{\"x\":4,\"y\":3,\"color\":\"white\"},null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]',
    solution: [{
      "x": 0,
      "y": 1,
      "color": "white"
    }]
  },{
    id: "prob-1",
    category: "Açılış Prensipleri 2",
    size: 9,
    turn: "black",
    title: "Beyaz Oynar",
    initialState: '[[null,null,null,{\"x\":0,\"y\":3,\"color\":\"black\"},{\"x\":0,\"y\":4,\"color\":\"white\"},null,null,null,null],[{\"x\":1,\"y\":0,\"color\":\"black\"},null,{\"x\":1,\"y\":2,\"color\":\"black\"},{\"x\":1,\"y\":3,\"color\":\"black\"},{\"x\":1,\"y\":4,\"color\":\"white\"},null,null,null,null],[null,{\"x\":2,\"y\":1,\"color\":\"black\"},{\"x\":2,\"y\":2,\"color\":\"black\"},{\"x\":2,\"y\":3,\"color\":\"black\"},{\"x\":2,\"y\":4,\"color\":\"white\"},null,null,null,null],[{\"x\":3,\"y\":0,\"color\":\"white\"},{\"x\":3,\"y\":1,\"color\":\"black\"},null,{\"x\":3,\"y\":3,\"color\":\"black\"},{\"x\":3,\"y\":4,\"color\":\"white\"},null,null,null,null],[null,{\"x\":4,\"y\":1,\"color\":\"white\"},{\"x\":4,\"y\":2,\"color\":\"white\"},{\"x\":4,\"y\":3,\"color\":\"white\"},null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]',
    solution: [{
      "x": 0,
      "y": 1,
      "color": "white"
    }]
  },{
    id: "prob-1",
    category: "Açılış Prensipleri 2",
    size: 9,
    turn: "black",
    title: "Beyaz Oynar",
    initialState: '[[null,null,null,{\"x\":0,\"y\":3,\"color\":\"black\"},{\"x\":0,\"y\":4,\"color\":\"white\"},null,null,null,null],[{\"x\":1,\"y\":0,\"color\":\"black\"},null,{\"x\":1,\"y\":2,\"color\":\"black\"},{\"x\":1,\"y\":3,\"color\":\"black\"},{\"x\":1,\"y\":4,\"color\":\"white\"},null,null,null,null],[null,{\"x\":2,\"y\":1,\"color\":\"black\"},{\"x\":2,\"y\":2,\"color\":\"black\"},{\"x\":2,\"y\":3,\"color\":\"black\"},{\"x\":2,\"y\":4,\"color\":\"white\"},null,null,null,null],[{\"x\":3,\"y\":0,\"color\":\"white\"},{\"x\":3,\"y\":1,\"color\":\"black\"},null,{\"x\":3,\"y\":3,\"color\":\"black\"},{\"x\":3,\"y\":4,\"color\":\"white\"},null,null,null,null],[null,{\"x\":4,\"y\":1,\"color\":\"white\"},{\"x\":4,\"y\":2,\"color\":\"white\"},{\"x\":4,\"y\":3,\"color\":\"white\"},null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]',
    solution: [{
      "x": 0,
      "y": 1,
      "color": "white"
    }]
  },{
    id: "prob-1",
    category: "Ölüm & Kalım 1",
    size: 9,
    turn: "black",
    title: "Beyaz Oynar",
    initialState: '[[null,null,null,{\"x\":0,\"y\":3,\"color\":\"black\"},{\"x\":0,\"y\":4,\"color\":\"white\"},null,null,null,null],[{\"x\":1,\"y\":0,\"color\":\"black\"},null,{\"x\":1,\"y\":2,\"color\":\"black\"},{\"x\":1,\"y\":3,\"color\":\"black\"},{\"x\":1,\"y\":4,\"color\":\"white\"},null,null,null,null],[null,{\"x\":2,\"y\":1,\"color\":\"black\"},{\"x\":2,\"y\":2,\"color\":\"black\"},{\"x\":2,\"y\":3,\"color\":\"black\"},{\"x\":2,\"y\":4,\"color\":\"white\"},null,null,null,null],[{\"x\":3,\"y\":0,\"color\":\"white\"},{\"x\":3,\"y\":1,\"color\":\"black\"},null,{\"x\":3,\"y\":3,\"color\":\"black\"},{\"x\":3,\"y\":4,\"color\":\"white\"},null,null,null,null],[null,{\"x\":4,\"y\":1,\"color\":\"white\"},{\"x\":4,\"y\":2,\"color\":\"white\"},{\"x\":4,\"y\":3,\"color\":\"white\"},null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]',
    solution: [{
      "x": 0,
      "y": 1,
      "color": "white"
    }]
  },
];