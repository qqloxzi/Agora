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
  description: string;
}

export const problemSet: Problem[] = [
  {
    id: "1",
    category: "Kurallar",
    size: 9,
    description: "Go'da her taşın nefesi vardır, 4 tarafındaki noktalar tek bir taşın nefesleridir. Eğer o taşın nefeslerini kapatırsak esir olarak tahtanın dışına çıkarılır.",
    turn: "white",
    title: "Kurallar",
    initialState: '[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,{\"color\":\"white\"},null,null,null,null],[null,null,null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"white\"},null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]',
    solution: {
    "children": [
      {
        "x": 5,
        "y": 4,
        "color": "white",
        "children": [],
        "status": "correct"
      }
    ]
  }
},

  {
    id: "2",
    category: "Kurallar",
    size: 9,
    description: "Nefes Sayımı",
    turn: "black",
    title: "Kurallar",
    initialState: '[[null,null,null,null,{\"color\":\"black\"},null,null,null,{\"color\":\"black\"}],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,{\"color\":\"black\"},null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]',
       solution: {
    "children": []
  }
}
];