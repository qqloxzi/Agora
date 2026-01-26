export interface Problem {
  id: string;
  size: number;
  turn: 'black' | 'white'; 
  title: string;
  initialState: string;
  solution: any[]; // Hem Array hem Tree yapısını destekler
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
    id: "prob-4",
    category: "Kurallar",
    size: 9,
    turn: "black",
    title: "Beyaz Oynar (Dallanmış Çözüm)",
    initialState: '[[null,null,null,{\"x\":0,\"y\":3,\"color\":\"black\"},{\"x\":0,\"y\":4,\"color\":\"white\"},null,null,null,null],[{\"x\":1,\"y\":0,\"color\":\"black\"},null,{\"x\":1,\"y\":2,\"color\":\"black\"},{\"x\":1,\"y\":3,\"color\":\"black\"},{\"x\":1,\"y\":4,\"color\":\"white\"},null,null,null,null],[null,{\"x\":2,\"y\":1,\"color\":\"black\"},{\"x\":2,\"y\":2,\"color\":\"black\"},{\"x\":2,\"y\":3,\"color\":\"black\"},{\"x\":2,\"y\":4,\"color\":\"white\"},null,null,null,null],[{\"x\":3,\"y\":0,\"color\":\"white\"},{\"x\":3,\"y\":1,\"color\":\"black\"},null,{\"x\":3,\"y\":3,\"color\":\"black\"},{\"x\":3,\"y\":4,\"color\":\"white\"},null,null,null,null],[null,{\"x\":4,\"y\":1,\"color\":\"white\"},{\"x\":4,\"y\":2,\"color\":\"white\"},{\"x\":4,\"y\":3,\"color\":\"white\"},null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]',
    // HATA DÜZELTİLDİ: Çift süslü parantez {{ }} kaldırıldı, tek { } yapıldı.
    solution: {
      "children": [
        {
          "x": 1,
          "y": 2,
          "color": "black",
          "children": [
            {
              "x": 0,
              "y": 2,
              "color": "white",
              "children": [
                {
                  "x": 1,
                  "y": 3,
                  "color": "black",
                  "children": [
                    {
                      "x": 0,
                      "y": 1,
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
              "x": 2,
              "y": 2,
              "color": "white",
              "children": [
                {
                  "x": 2,
                  "y": 1,
                  "color": "black",
                  "children": [],
                  "status": "correct"
                },
                {
                  "x": 7,
                  "y": 2,
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
      ]
    } as any // TypeScript'in Tree yapısına kızmaması için 'as any'
  },
  
];