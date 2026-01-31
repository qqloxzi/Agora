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
     solution: []
    
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
  description: "Beyaz içeri oynamak isterse nefesi olduğundan dolayı oynayabilir",
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

  {
  id: "5",
  size: 9,
  labels: "[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  turn: "white",
  title: "İki Göz",
  category: "Kurallar",
  description: "Siyahın soldaki grubunun 1 gözü var beyaz oraya oynayarak siyahı öldürebilir. Fakat köşedeki grubun 2 gözü var. Beyazın o grubu öldürebilmesi için aynı anda iki noktaya oynayabilmesi gerek, fakat beyaz bunu yapamaycağına göre, siyah grup yaşıyordur.",
  initialState: "[[null,{\"color\":\"white\"},{\"color\":\"black\"},null,{\"color\":\"black\"},{\"color\":\"white\"},null,null,null],[null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},null,null,null],[null,null,{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},null,null,null,null],[null,null,null,null,null,null,{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"}],[null,null,null,null,null,null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"}],[null,null,null,null,null,null,{\"color\":\"white\"},{\"color\":\"black\"},null],[null,null,null,null,null,null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"}],[null,null,null,null,null,null,{\"color\":\"white\"},{\"color\":\"black\"},null],[null,null,null,null,null,null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"}]]",
  solution: {
    children: []
  }
},

{
  id: "6",
  size: 9,
  labels: "[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  turn: "white",
  title: "İki Göz",
  category: "Kurallar",
  description: "Beyazın yaşayabilmesi için iki göze ihtiyacı var.",
  initialState: "[[null,null,null,null,{\"color\":\"black\"},{\"color\":\"white\"},null,null,null],[null,null,null,null,{\"color\":\"black\"},{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"}],[null,null,null,null,{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"}],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  solution: {
    children: [
      {
        x: 0,
        y: 7,
        color: "white",
        children: [],
        status: null
      }
    ]
  }
},
{
  id: "7",
  size: 9,
  labels: "[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  turn: "black",
  title: "İki Göz",
  category: "Kurallar",
  description: "Eğer sıra siyahta olsaydı beyazın iki gözünü bozmaya çalışırdı.",
  initialState: "[[null,null,null,null,{\"color\":\"black\"},{\"color\":\"white\"},null,null,null],[null,null,null,null,{\"color\":\"black\"},{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"}],[null,null,null,null,{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"}],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  solution: {
    children: [
      {
        x: 0,
        y: 7,
        color: "black",
        children: [],
        status: "correct"
      }
    ]
  }
},
{
  id: "8",
  size: 9,
  labels: "[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  turn: "white",
  title: "Yalancı Göz",
  category: "Kurallar",
  description: "Siyah grubun iki gözü var gibi gözükse de aslında sağdaki boşluk göz değil: Çünkü beyaz orayı bozabiliyor.",
  initialState: "[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,{\"color\":\"white\"},{\"color\":\"white\"}],[null,null,null,null,null,null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"}],[null,null,null,null,null,null,{\"color\":\"white\"},{\"color\":\"black\"},null],[null,null,null,null,null,null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"}],[null,null,null,null,null,null,{\"color\":\"white\"},{\"color\":\"black\"},null],[null,null,null,null,null,null,null,{\"color\":\"white\"},{\"color\":\"black\"}],[null,null,null,null,null,null,null,{\"color\":\"white\"},{\"color\":\"white\"}],[null,null,null,null,null,null,null,null,null]]",
  solution: {
    children: [
      {
        x: 5,
        y: 8,
        color: "white",
        children: [],
        status: "correct"
      }
    ]
  }
},{
  id: "9",
  size: 9,
  labels: "[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  turn: "white",
  title: "ko",
  category: "Kurallar",
  description: "ko",
  initialState: "[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,{\"color\":\"black\"},null,null,null,null],[null,null,null,{\"color\":\"black\"},null,{\"color\":\"black\"},null,null,null],[null,null,null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"white\"},null,null,null],[null,null,null,null,{\"color\":\"white\"},null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  solution:  [],
  
},
{
  id: "10",
  size: 9,
  labels: "[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  turn: "white",
  title: "Ko",
  category: "Kurallar",
  description: "Beyaz siyah taşı esir ettiğinde,siyah ko kuralından dolayı en az 1 hamle beklemek zorunda. Bu sayede beyaz diğer taşı yiyerek gruplarını bağlayabilir ve siyah grubu parçalayabilir.",
  initialState: "[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,{\"color\":\"black\"},null,null],[null,null,null,null,null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"white\"},null],[null,null,null,null,{\"color\":\"white\"},{\"color\":\"black\"},null,{\"color\":\"black\"},null],[null,null,null,null,null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"white\"},null],[null,null,null,null,null,null,{\"color\":\"black\"},null,null],[null,null,null,null,null,null,{\"color\":\"black\"},null,null],[null,null,null,null,null,null,null,null,null]]",
  solution: {
    children: [
      {
        x: 4,
        y: 6,
        color: "white",
        children: [
          {
            x: 2,
            y: 7,
            color: "black",
            children: [
              {
                x: 4,
                y: 8,
                color: "white",
                children: [],
                status: "correct"
              }
            ],
            status: null
          },
          {
            x: 6,
            y: 7,
            color: "black",
            children: [
              {
                x: 4,
                y: 8,
                color: "white",
                children: [],
                status: "correct"
              }
            ],
            status: null
          }
        ],
        status: null
      },
      {
        x: 4,
        y: 8,
        color: "white",
        children: [
          {
            x: 4,
            y: 6,
            color: "black",
            children: [],
            status: "wrong"
          }
        ],
        status: null
      }
    ]
  }
},
{
  id: "11",
  size: 9,
  labels: "[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  turn: "black",
  title: "Oyun Sonu",
  category: "Kurallar",
  description: "Kendi alanımıza oynarsak: Kendi puanımızı (boşluğumuzu) doldurur, 1 puan kaybederiz. Rakibin alanına oynarsak: Taşımız orada yaşayamaz, rakibe bedavadan esir (puan) veririz.Yapacak kârlı hamlemiz kalmadığında: İkimiz de sırayla Pas deriz ve oyun biter, sayıma geçeriz.",
  initialState: "[[null,null,{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"black\"},null,null,null],[null,{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},null,null,null],[null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"}],[null,null,{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},{\"color\":\"black\"}],[null,null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"}],[{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},null],[{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},null,null,{\"color\":\"black\"},{\"color\":\"white\"},{\"color\":\"white\"},null],[{\"color\":\"black\"},{\"color\":\"black\"},null,{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},{\"color\":\"white\"},null,null],[null,null,null,{\"color\":\"black\"},{\"color\":\"white\"},{\"color\":\"white\"},null,null,null]]",
  solution: {
    children: []
  }
},
{
  id: "12",
  size: 9,
  labels: "[[null,null,null,null,null,null,1,3,5],[null,null,null,null,null,null,2,4,6],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,8,7,null,null,null,null],[null,null,9,null,null,null,null,null,null],[12,11,10,null,null,null,null,null,null]]",
  turn: "white",
  title: "Oyun Sonu Alan",
  category: "Kurallar",
  description: " Oyun sonunda buna benzer tahtalar göreceğiz. Taşlarınla etrafını tamamen çevirdiğin her boş nokta sana 1 puan kazandırır. Amaç en çok taşı yemek değil, en geniş boş alanı kuşatmaktır ",
  initialState: "[[null,null,{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"black\"},null,null,null],[null,{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},null,null,null],[null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"}],[null,{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},{\"color\":\"black\"}],[null,null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"}],[{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},null],[{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},null,null,{\"color\":\"black\"},{\"color\":\"white\"},{\"color\":\"white\"},null],[{\"color\":\"black\"},{\"color\":\"black\"},null,{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},{\"color\":\"white\"},null,null],[null,null,null,{\"color\":\"black\"},{\"color\":\"white\"},{\"color\":\"white\"},null,null,null]]",
  solution: {
    children: []
  }
},
{
  id: "13",
  size: 9,
  labels: "[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  turn: "white",
  title: "Teşekkürler",
  category: "Kurallar",
  description: "Go'yu öğrenmenin en doğal yolu oyun onamaktan geçiyor, isterseniz kütüphaneden oyun oynayabileceğiniz web sitelere, mobil uygulamalara bakabilirsiniz. ",
  initialState: "[[null,null,null,{\"color\":\"white\"},{\"color\":\"white\"},null,null,null,null],[null,null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},null,null,null],[null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},null,null],[null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},null],[null,null,{\"color\":\"white\"},{\"color\":\"black\"},null,{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"}],[null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},null],[null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},null,null],[null,null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},null,null,null],[null,null,null,{\"color\":\"white\"},{\"color\":\"white\"},null,null,null,null]]",
  solution: {
    children: [
      {
        x: 4,
        y: 4,
        color: "white",
        children: [],
        status: "correct"
      }
    ]
  }
},
{
  id: "14",
  size: 9,
  labels: "[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  turn: "white",
  title: "Atari",
  category: "Esir Alma 1",
  description: "Siyahın iki taşını esir almaya çalışıyoruz",
  initialState: "[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,{\"color\":\"white\"},{\"color\":\"white\"},null,{\"color\":\"white\"},null],[null,null,null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},null,null],[null,null,null,{\"color\":\"white\"},null,null,{\"color\":\"black\"},{\"color\":\"white\"},null],[null,null,null,null,null,null,{\"color\":\"black\"},null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  solution: {
    children: [
      {
        x: 4,
        y: 5,
        color: "white",
        children: [
          {
            x: 4,
            y: 4,
            color: "black",
            children: [
              {
                x: 5,
                y: 4,
                color: "white",
                children: [],
                status: null
              }
            ],
            status: null
          }
        ],
        status: null
      }
    ]
  }
},{
  id: "15",
  size: 9,
  labels: "[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  turn: "white",
  title: "Atari",
  category: "Esir Alma 1",
  description: "Köşedeki siyah grubu esir almaya çalışıyoruz",
  initialState: "[[null,null,null,null,null,null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"}],[null,null,null,null,null,null,{\"color\":\"white\"},{\"color\":\"black\"},null],[null,null,null,null,null,{\"color\":\"black\"},{\"color\":\"white\"},null,null],[null,null,null,null,null,null,{\"color\":\"black\"},null,{\"color\":\"black\"}],[null,null,null,null,null,null,null,{\"color\":\"black\"},null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  solution: {
    children: [
      {
        x: 2,
        y: 7,
        color: "white",
        children: [
          {
            x: 1,
            y: 8,
            color: "black",
            children: [
              {
                x: 2,
                y: 8,
                color: "white",
                children: [],
                status: "correct"
              }
            ],
            status: null
          }
        ],
        status: null
      },
      {
        x: 1,
        y: 8,
        color: "white",
        children: [
          {
            x: 2,
            y: 7,
            color: "black",
            children: [],
            status: "wrong"
          }
        ],
        status: null
      }
    ]
  }
}

];