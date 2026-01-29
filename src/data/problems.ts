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
  labels: string;
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
    labels:'[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,1,null,null,null,null],[null,null,null,2,null,4,null,null,null],[null,null,null,null,3,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]',
    description: "Bir taşın veya grubun yatay ve dikey düzlemde komşusu olan tüm boş kesişim noktaları, o taşın nefesidir.",
    turn: "white",
    title: "Kurallar",
    initialState: '[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,{\"color\":\"black\"},null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]',      
     solution:[],
  },
 {
    id: "2",
    category: "Kurallar",
    size: 9,
    labels:'[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]',
    description: "Eğer bir taşın veya grubun etrafındaki tüm nefes yolları rakip taşlarca kapatılırsa tahtadan kaldırılır",
    turn: "white",
    title: "Kurallar",
    initialState: '[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,{\"color\":\"white\"},null,null,null,null],[null,null,null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"white\"},null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]', 
       solution:{
    "children": [
      {
        "x": 5,
        "y": 4,
        "color": "white",
      }
    ]
  }
},
{
  id: "3",
  category: "Kurallar",
  size: 9,
  labels: "[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,1,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,2,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  description: "Beyaz, 1 numaralı noktaya oynamak istediğinde taşın nefesi olmadığı için oraya oynayamaz. Fakat 2 numaralı noktaya oynamak istediğinde siyah taşları esir alıp kendine nefes açtığı için bu hamleyi yapabilir.",
  turn: "white",
  title: "Kurallar",
  initialState: "[[null,null,null,null,null,null,null,null,null],[null,null,null,null,{\"color\":\"black\"},null,null,null,null],[null,null,null,{\"color\":\"black\"},null,{\"color\":\"black\"},null,null,null],[null,null,null,null,{\"color\":\"black\"},null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,{\"color\":\"white\"},{\"color\":\"white\"},null,null,null,null],[null,null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},null,null,null],[null,null,{\"color\":\"black\"},null,{\"color\":\"white\"},{\"color\":\"black\"},null,null,null],[null,null,null,{\"color\":\"black\"},{\"color\":\"black\"},null,null,null,null]]",
  solution: {
    "children": [
      {
        "x": 7,
        "y": 3,
        "color": "white",
        "children": [],
        "status": "correct"
      }
    ]
  }
},
{
  id: "4",
  category: "Kurallar",
  size: 9,
  labels: "[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  description: "Beyaz, 1 numaralı noktaya oynamak istediğinde taşın nefesi olmadığı için oraya oynayamaz. Fakat 2 numaralı noktaya oynamak istediğinde siyah taşları esir alıp kendine nefes açtığı için bu hamleyi yapabilir.",
  turn: "white",
  title: "Kurallar",
  initialState: "[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},null,null,null,null,null],[{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},null,null,null,null,null],[null,null,{\"color\":\"black\"},{\"color\":\"white\"},null,null,null,null,null],[{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},null,null,null,null,null],[{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  solution: {
    "children": [
      {
        "x": 4,
        "y": 0,
        "color": "white",
        "children": [
          {
            "x": 4,
            "y": 1,
            "color": "black",
            "children": [
              {
                "x": 4,
                "y": 0,
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
        "x": 4,
        "y": 1,
        "color": "white",
        "children": [
          {
            "x": 4,
            "y": 0,
            "color": "black",
            "children": [
              {
                "x": 4,
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
      }
    ]
  }
},

];