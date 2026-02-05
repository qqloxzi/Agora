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
  size: 19,
  labels: "[[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]]",
  turn: "black",
  title: "Go",
  category: "Kurallar",
  description: "Go, basit kuralları ile düşünce ve duygusal derinliği arasındaki karşıtlıkla öğrenmesi basit, ustalaşması zor bir oyun, üstelik bir sanattır. Fakat tahmin edeceğiniz üzere keyif almak için usta olmaktan ziyade Go'yu sevmek gerekiyor. Lafı daha fazla uzatmadan sizi kurallar setini öğrenmeye davet ediyoruz. İyi eğlenceler! ",
  initialState: "[[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]]",
  solution: []
},

  {
    id: "2",
    category: "Kurallar",
    size: 9,
    labels:'[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,1,null,null,null,null],[null,null,null,2,null,4,null,null,null],[null,null,null,null,3,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]',
    description: "Oyun boş bir tahta ve siyahın hamlesi ile başlar. Sırayla dizilen taşlar neticesinde iki tarafın 'pas' demesi oyunu sonlandırır. Taşlar, çizgilerin kesişim noktalarına yerleştirilir. Bir taşın yatay ve dikey düzlemde komşusu olan tüm boş kesişim noktaları o taşın nefeslerini oluşturur.",
    turn: "white",
    title: "Kurallar",
    initialState: '[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,{\"color\":\"black\"},null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]',      
     solution: []
    
},
  
 {
    id: "3",
    category: "Kurallar",
    size: 9,
    labels:'[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]',
    description: "Eğer bir taşın etrafındaki tüm nefes yolları diğer renk taşlarla kapatılırsa tahtadan kaldırılır",
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
},{
  id: "4",
  size: 9,
  labels: "[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  turn: "white",
  title: "Atari",
  category: "Kurallar",
  description: "Bir taş için geçerli olan durum taş grupları için de geçerlidir. Beyaz, siyah grubun toplam 7 nefesinden 6 tanesini kapatmış durumda, son nefesini de kapatması durumunda siyah grubu esir ederek tahtadan kaldırabilir.",
  initialState: "[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,{\"color\":\"white\"},{\"color\":\"white\"},null,null,null,null],[null,null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},null,null,null],[null,null,null,null,{\"color\":\"black\"},{\"color\":\"white\"},null,null,null],[null,null,null,null,{\"color\":\"white\"},null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  solution: {
    children: [
      {
        x: 4,
        y: 3,
        color: "white",
        children: [],
        status: "correct"
      }
    ]
  }},
  {
  id: "5",
  size: 9,
  labels: "[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  turn: "white",
  title: "Tanımsız Hamle",
  category: "Kurallar",
  description: "Tahtada yalnızca nefesimiz olduğu noktalara oynayabiliriz. Siyah grubun ortasında beyazın tüm nefeslerinin kapalı olmasından dolayı oraya hamle yapılamaz.",
  initialState: "[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,{\"color\":\"black\"},null,null,null,null,null],[null,null,{\"color\":\"black\"},null,{\"color\":\"black\"},null,null,null,null],[null,null,null,{\"color\":\"black\"},null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  solution: []
},
{
  id: "6",
  size: 9,
  labels: "[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  turn: "white",
  title: "Nefes Tutma",
  category: "Kurallar",
  description: "Taşlarımızın nefesi olmayan bir noktaya oynayabilmesinin bir şartı vardır: o noktaya oynadığımızda karşı renkteki taşları esir edip tahtanın dışına çıkarabiliyor ve dolayısı ile kendimize nefes açabiliyorsak o noktaya oynayabiliriz.",
  initialState: "[[null,null,null,null,null,null,null,null,null],[null,null,{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},null,null,null,null],[null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},null,null,null],[null,{\"color\":\"white\"},{\"color\":\"black\"},null,{\"color\":\"black\"},{\"color\":\"white\"},null,null,null],[null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},null,null,null],[null,null,{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  solution: {
    children: [
      {
        x: 3,
        y: 3,
        color: "white",
        children: [],
        status: "correct"
      }
    ]
  }
},
{
  id: "7",
  size: 9,
  labels: "[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  turn: "white",
  title: "Ko",
  category: "Kurallar",
  description: "コウ or 劫 (kō), taşların sürekli birbirini yiyerek tahtanın aynı duruma dönmesini ve oyunun sonsuz bir döngüye girmesini engelleyen bir kuraldır.Beyaz F5 taşını yerse, siyah hemen E5 taşını esir olarak alamaz. Bu kuraldan dolayı tahtanın başka bir noktasına oynamak zorunda veya pas diyebilir. Böylece beyaz isterse F5 Oynayarak Ko'yu bitirebilir veya başka bir noktaya oynayarak siyahın E5'teki taşı almasına izin verebilir. Merak etmeyin ileride bununla ilgili çok daha açıklayıcı pozisyonlar göreceğiz. ",
  initialState: "[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,{\"color\":\"black\"},null,null,null,null],[null,null,null,{\"color\":\"black\"},null,{\"color\":\"black\"},null,null,null],[null,null,null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"white\"},null,null,null],[null,null,null,null,{\"color\":\"white\"},null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  solution:  [],
  
},
{
  id: "8",
  size: 9,
  labels: "[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  turn: "white",
  title: "Ko",
  category: "Kurallar",
  description: "Ko kuralına bir örnek. Ko sayesinde ayrı kalmış iki grubumuzu bağlayabiliriz.",
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
},{
  id: "9",
  size: 9,
  labels: "[[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null]]",
  turn: "white",
  title: "Oyunun Sonlandırılması",
  category: "Kurallar",
  description: "Sınırları belirlenmemiş alan kalmadığında ve oyuncular hamle yapmanın kendilerine fayda sağlamayacağı konusunda hemfikir olduğunda ardarda pas dediklerinde, oyun sonlanır. İki etrafını çevirdiği kesişim noktaları kadar puan kazanır. Ölü taşlar tahtadan kaldırılır ve karşı tarafa esir olarak verilir. Bu hesaplamaların nasıl yapıldığını 'Oyun Sonlandırma' setinde öğrenebilirsiniz. ",
  initialState: "[[null,null,null,null,{\"color\":\"black\"},{\"color\":\"white\"},null,null,null],[null,{\"color\":\"black\"},null,{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},null,null,null],[null,null,{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},null,{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"}],[{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"},{\"color\":\"white\"},null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"white\"}],[{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"}],[null,null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},null],[null,{\"color\":\"white\"},null,{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},null,{\"color\":\"black\"}],[null,null,null,{\"color\":\"white\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"black\"},{\"color\":\"white\"}],[null,null,null,{\"color\":\"white\"},{\"color\":\"black\"},null,{\"color\":\"white\"},{\"color\":\"white\"},{\"color\":\"white\"}]]",
  solution:[]
}
]