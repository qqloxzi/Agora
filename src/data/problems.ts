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
    id: "prob-1",
    category: "Kurallar",
    size: 9,
    description: "djnsgjsndgkjdsgkdsgjb",
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
    description: "djnsgjsndgkjdsgkdsgjb",
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
    description: "açılış prensipleeri biiiiiiiiir",
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
    description: "djnsgjsndgkjdsgkdsgjb",
    turn: "black",
    title: "Beyaz Oynar",
    initialState: '[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},null,null,null,null],[{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},null,null,null],[null,null,null,null,null,null,null,null,null]]',
    solution: [{
      "x": 0,
      "y": 1,
      "color": "white"
    }]
  },{
    id: "prob-1",
    category: "Açılış Prensipleri 2",
    size: 9,
    description: "hallo ich bin hans",
    turn: "white",
    title: "Beyaz Oynar",
    initialState: '[[null,null,null,{\"x\":0,\"y\":3,\"color\":\"black\"},{\"x\":0,\"y\":4,\"color\":\"white\"},null,null,null,null],[{\"x\":1,\"y\":0,\"color\":\"black\"},null,{\"x\":1,\"y\":2,\"color\":\"black\"},{\"x\":1,\"y\":3,\"color\":\"black\"},{\"x\":1,\"y\":4,\"color\":\"white\"},null,null,null,null],[null,{\"x\":2,\"y\":1,\"color\":\"black\"},{\"x\":2,\"y\":2,\"color\":\"black\"},{\"x\":2,\"y\":3,\"color\":\"black\"},{\"x\":2,\"y\":4,\"color\":\"white\"},null,null,null,null],[{\"x\":3,\"y\":0,\"color\":\"white\"},{\"x\":3,\"y\":1,\"color\":\"black\"},null,{\"x\":3,\"y\":3,\"color\":\"black\"},{\"x\":3,\"y\":4,\"color\":\"white\"},null,null,null,null],[null,{\"x\":4,\"y\":1,\"color\":\"white\"},{\"x\":4,\"y\":2,\"color\":\"white\"},{\"x\":4,\"y\":3,\"color\":\"white\"},null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]',
    solution: {
    "children": [
      {
        "x": 8,
        "y": 4,
        "color": "white",
        "children": [
          {
            "x": 8,
            "y": 3,
            "color": "black",
            "children": [
              {
                "x": 8,
                "y": 1,
                "color": "white",
                "children": [
                  {
                    "x": 8,
                    "y": 5,
                    "color": "black",
                    "children": [
                      {
                        "x": 7,
                        "y": 6,
                        "color": "white",
                        "children": [],
                        "status": "correct"
                      }
                    ],
                    "status": null
                  }
                ],
                "status": null
              },
              {
                "x": 8,
                "y": 5,
                "color": "white",
                "children": [
                  {
                    "x": 8,
                    "y": 1,
                    "color": "black",
                    "children": [],
                    "status": "wrong"
                  }
                ],
                "status": null
              }
            ],
            "status": null
          }
        ],
        "status": null
      }
    ]
  }
}
  ,
  
  {
    id: "prob-1",
    category: "Ölüm & Kalım 1",
    size: 9,
    description: "djnsgjsndgkjdsgkdsgjb",
    turn: "white",
    title: "Beyaz Oynar",
    initialState: '[[null,null,null,null,null,null,null,null,null],[{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},null,null,null],[{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]',
    solution: {
    "children": [
      {
        "x": 0,
        "y": 4,
        "color": "white",
        "children": [
          {
            "x": 0,
            "y": 3,
            "color": "black",
            "children": [
              {
                "x": 0,
                "y": 1,
                "color": "white",
                "children": [
                  {
                    "x": 0,
                    "y": 5,
                    "color": "black",
                    "children": [
                      {
                        "x": 1,
                        "y": 6,
                        "color": "white",
                        "children": [],
                        "status": "correct"
                      }
                    ],
                    "status": null
                  }
                ],
                "status": null
              },
              {
                "x": 0,
                "y": 5,
                "color": "white",
                "children": [
                  {
                    "x": 0,
                    "y": 1,
                    "color": "black",
                    "children": [],
                    "status": "wrong"
                  }
                ],
                "status": null
              }
            ],
            "status": null
          }
        ],
        "status": null
      }
    ]
  }
}
];