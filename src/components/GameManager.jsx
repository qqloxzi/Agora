import React, { useState, useEffect } from 'react';
import GoBoardReact from './GoBoardReact';
import '../styles/gametree-fixed.css';
import { supabase } from '../lib/supabase'; 
// Diğer importlarının altına ekle:
import { 
  BiBookOpen, BiLink, BiWind, BiShow, BiRun, BiFlag, BiBulb, 
  BiGridAlt, BiCompass, BiCrosshair, BiBarChart, BiBot, BiInfinite, 
  BiFastForward, BiShield, BiCoinStack
} from 'react-icons/bi'; // BoxIcons (Minimalist Çizgisel İkonlar)

import { 
  GiLadder, GiSpiderWeb, GiStoneBlock, GiCrossedSwords, GiCastle, 
  GiParachute, GiScales, GiBlackBelt 
} from 'react-icons/gi'; // GameIcons (Oyun odaklı semboller)
// --- 1. VERİ YAPISI (YENİ NODLAR EKLENDİ) ---
// --- 1. VERİ YAPISI (JSX İKONLU) ---
const treeStructure = [
  { 
    title: "20 Kyu - 18 Kyu Başlangıç", 
    levels: [
      // Kök
      { id: 'Kurallar', label: 'Kurallar', icon: <BiBookOpen />, parent: null },
      
      // Dal 1
      { id: 'Esir Alma 1', label: 'Esir Alma 1', icon: <GiStoneBlock />, parent: 'Kurallar' },
      { id: 'Bağlanma & Kesme', label: 'Bağlanma & Kesme', icon: <BiLink />, parent: 'Esir Alma 1' }, 
      { id: 'Nefes Yarışı 1', label: 'Nefes Yarışı 1', icon: <BiWind />, parent: 'Esir Alma 1' }, 
      
      // Dal 2
      { id: 'Yaşam & Ölüm 1', label: 'Yaşam & Ölüm 1', icon: <BiShow />, parent: 'Kurallar' },
      { id: 'Kaçış Yolu', label: 'Kaçış Yolu', icon: <BiRun />, parent: 'Yaşam & Ölüm 1' },
      { id: 'Oyunu Sona Erdirme', label: 'Oyunu Sona Erdirme', icon: <BiFlag />, parent: 'Yaşam & Ölüm 1' }, 
      
      // Dal 3
      { id: 'Tesuji 1', label: 'Tesuji 1', icon: <BiBulb />, parent: 'Kaçış Yolu' },
      { id: 'Merdiven', label: 'Merdiven ile Esir Alma', icon: <GiLadder />, parent: 'Bağlanma & Kesme' }, 
      { id: 'Ağ', label: 'Ağ ile Esir Alma', icon: <GiSpiderWeb />, parent: 'Merdiven' }, 
    ]
  },
  { 
    title: " 17 Kyu - 12 Kyu Temel Taşlar", 
    levels: [
      // Kök
      { id: 'Yaşam & Ölüm 2', label: 'Yaşam & Ölüm 2', icon: <BiShow />, parent: null },
      
      // Dal 1
      { id: 'Güçlü & Zayıf Şekiller', label: 'Şekiller', icon: <BiGridAlt />, parent: 'Yaşam & Ölüm 2' },
      { id: 'Güçlü & Zayıf Gruplar', label: 'Gruplar', icon: <GiCastle />, parent: 'Güçlü & Zayıf Şekiller' }, 
      { id: 'Büyük & Acil Hamleler', label: 'Acil Hamleler', icon: <BiCrosshair />, parent: 'Güçlü & Zayıf Şekiller' }, 

      // Dal 2
      { id: 'Açılış Safhası', label: 'Açılış', icon: <BiBarChart />, parent: 'Yaşam & Ölüm 2' }, 
      { id: 'Joseki 1', label: 'Joseki 1', icon: <BiCoinStack />, parent: 'Açılış Safhası' }, 
      { id: 'Oyun Yönü 1', label: 'Oyun Yönü 1', icon: <BiCompass />, parent: 'Açılış Safhası' },
      
      // Dal 3
      { id: 'Oyun Ortası 1', label: 'Oyun Ortası 1', icon: <GiCrossedSwords />, parent: 'Oyun Yönü 1' }, 
      { id: 'Oyun Sonu 1', label: 'Oyun Sonu 1', icon: <BiFlag />, parent: 'Oyun Yönü 1' }, 
    ]
  },
  { 
    title: "11 Kyu - 6 Kyu Gelişim", 
    levels: [
      // Kök
      { id: 'Yaşam & Ölüm 3', label: 'Yaşam & Ölüm 3', icon: <BiShow />, parent: null },
      
      // Dal 1
      { id: 'Oyun Yönü 2', label: 'Oyun Yönü 2', icon: <BiCompass />, parent: 'Yaşam & Ölüm 3' },
      { id: 'Oyun Ortası 2', label: 'Oyun Ortası 2', icon: <GiCrossedSwords />, parent: 'Oyun Yönü 2' }, 
      { id: 'Oyun Sonu 2', label: 'Oyun Sonu 2', icon: <BiFlag />, parent: 'Oyun Yönü 2' }, 

      // Dal 2
      { id: 'Tesuji 2', label: 'Tesuji 2', icon: <BiBulb />, parent: 'Yaşam & Ölüm 3' },
      { id: 'Ko', label: 'Ko', icon: <BiInfinite />, parent: 'Tesuji 2' }, 
      { id: 'Joseki 2', label: 'Joseki 2', icon: <BiCoinStack />, parent: 'Ko' },
      
      // Dal 3
      { id: 'Sente & Gote', label: 'Sente & Gote', icon: <BiFastForward />, parent: 'Tesuji 2' },
      { id: 'İstila & Küçültme', label: 'İstila', icon: <GiParachute />, parent: 'Sente & Gote' }, 
      { id: 'Saldırı & Savunma', label: 'Saldırı/Savunma', icon: <BiShield />, parent: 'Sente & Gote' }, 
    ]
  },

 { 
    title: "5 Kyu - 1 Dan Aydınlanma", 
    levels: [
      // Kök
      { id: 'Oyun Yönü 2', label: 'Oyun Yönü 2', icon: <BiCompass />, parent: null },
      
      // Dal 1
      { id: 'Tesuji 3', label: 'Tesuji 3', icon: <BiBulb />, parent: 'Oyun Yönü 2' },
      { id: 'Joseki 3', label: 'Joseki 3', icon: <BiCoinStack />, parent: 'Tesuji 3' }, 
      { id: 'Yaşam & Ölüm 4', label: 'Yaşam & Ölüm 4', icon: <BiShow />, parent: 'Joseki 3' }, 
      
      // Dal 2
      { id: 'Hamle Değerleri', label: 'Hamle Değeri', icon: <GiScales />, parent: 'Oyun Yönü 2' }, 
      { id: 'Pro Kavrayışı', label: 'Pro Kavrayışı', icon: <GiBlackBelt />, parent: 'Hamle Değerleri' },
      { id: 'Yapay Zeka', label: 'Yapay Zeka', icon: <BiBot />, parent: 'Hamle Değerleri' },
    ]
  },
];

const buildHierarchy = (flatLevels) => {
  const nodes = flatLevels.map(n => ({...n, children: []}));
  const map = {};
  nodes.forEach(n => map[n.id] = n);
  const roots = [];
  
  nodes.forEach(n => {
    if (n.parent && map[n.parent]) {
      map[n.parent].children.push(n);
    } else {
      roots.push(n);
    }
  });
  return roots;
};

// --- 3. BİLEŞEN: Recursive Tree Node (Kendi kendini çağıran yapı) ---
const TreeNode = ({ node, completedLevels, startLevel, allProblems }) => {
    const isLocked = node.parent && !completedLevels.includes(node.parent);
    const isCompleted = completedLevels.includes(node.id);
    const questionCount = allProblems.filter(p => p.category === node.id).length;
  
    return (
      <div className="tree-node-container">
        {/* Node Görünümü */}
        <div 
          className={`level-node ${isLocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''}`}
          onClick={() => startLevel(node.id, isLocked)}
          title={node.label}
        >
          <div className="node-icon">{node.icon}</div>
          {questionCount > 0 && <span className="node-badge">{questionCount}</span>}
          <span className="node-label">{node.label}</span>
        </div>
  
        {/* Çocukları (Varsa çiz) */}
        {node.children && node.children.length > 0 && (
          <div className="node-children">
            {node.children.map(child => (
              <TreeNode 
                key={child.id} 
                node={child} 
                completedLevels={completedLevels}
                startLevel={startLevel}
                allProblems={allProblems}
              />
            ))}
          </div>
        )}
      </div>
    );
};

const GameManager = ({ allProblems }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [gameMode, setGameMode] = useState('tree');
  const [completedLevels, setCompletedLevels] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNextActive, setIsNextActive] = useState(false);
  const [levelStats, setLevelStats] = useState({ correct: 0, wrong: 0 });
  const [currentProblemHasError, setCurrentProblemHasError] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    const initProgress = async () => {
        const localSaved = localStorage.getItem('goProgress');
        let localData = localSaved ? JSON.parse(localSaved) : [];
        setCompletedLevels(localData);
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
            setCurrentUser(user);
            const { data } = await supabase.from('user_progress').select('category_id').eq('user_id', user.id);
            if (data) {
                const dbLevels = data.map(item => item.category_id);
                const mergedLevels = [...new Set([...localData, ...dbLevels])];
                setCompletedLevels(mergedLevels);
                localStorage.setItem('goProgress', JSON.stringify(mergedLevels));
            }
        }
    };
    initProgress();
  }, []);

  useEffect(() => {
    if (gameMode === 'playing') document.body.classList.add('fullscreen-mode');
    else document.body.classList.remove('fullscreen-mode');
    return () => document.body.classList.remove('fullscreen-mode');
  }, [gameMode]);

  useEffect(() => {
    if (gameMode === 'playing') {
       const currentProb = activeCategory?.problems[currentIndex];
       const hasSolution = currentProb?.solution && (currentProb.solution.length > 0 || currentProb.solution.children?.length > 0);
       setIsNextActive(!hasSolution); 
    }
  }, [currentIndex, gameMode, activeCategory]);

  const handleLevelComplete = async (category) => {
    if (!completedLevels.includes(category)) {
      const newProgress = [...completedLevels, category];
      setCompletedLevels(newProgress);
      localStorage.setItem('goProgress', JSON.stringify(newProgress));
      if (currentUser) {
          try { await supabase.from('user_progress').insert({ user_id: currentUser.id, category_id: category, completed_at: new Date() }); } catch (err) { console.error(err); }
      }
    }
    setGameMode('result');
  };

  const startLevel = (categoryId, isLocked) => {
    if (isLocked) return;
    const problems = allProblems.filter(p => p.category === categoryId);
    if (problems.length === 0) return;
    setActiveCategory({ id: categoryId, problems: problems });
    setCurrentIndex(0);
    setLevelStats({ correct: 0, wrong: 0 }); 
    setCurrentProblemHasError(false);
    setResetKey(0); 
    setGameMode('playing');
  };

  const handleNextProblem = () => {
    if (activeCategory && currentIndex < activeCategory.problems.length - 1) {
      setCurrentIndex(c => c + 1);
      setCurrentProblemHasError(false);
      setResetKey(prev => prev + 1); 
    } else {
      handleLevelComplete(activeCategory.id);
    }
  };

  const handleRestart = () => {
    setResetKey(prev => prev + 1);
    setCurrentProblemHasError(false); 
  };

  const handleProblemSolve = (success) => {
      if (success) {
          setIsNextActive(true);
          if (!isNextActive) {
              if (currentProblemHasError) setLevelStats(prev => ({ ...prev, wrong: prev.wrong + 1 }));
              else setLevelStats(prev => ({ ...prev, correct: prev.correct + 1 }));
          }
      } else {
          setCurrentProblemHasError(true);
      }
  };

  const activeProblem = activeCategory ? activeCategory.problems[currentIndex] : null;
  const progressPercent = activeCategory ? ((currentIndex + 1) / activeCategory.problems.length) * 100 : 0;

  return (
    <div className="game-manager-container">
      {gameMode === 'tree' && (
        <div className="tree-view flex flex-col items-center w-full">

          <div className="tree-scroll-container">
            {/* 3 Farklı Set İçin Döngü */}
            {treeStructure.map((categoryGroup, index) => {
                // Her kategori grubu için veriyi o an hiyerarşik hale getiriyoruz
                const hierarchy = buildHierarchy(categoryGroup.levels);

                return (
                    <div key={index} className="tree-section">

                      {/* --- ANTİK ROMA / AGORA TEMALI SEVİYE KARTI (SÜTUNLU) --- */}
                        <div className="w-full max-w-sm mx-auto mt-14 mb-8 px-4">
                            {/* Ana Kart */}
                            <div className="relative bg-stone-50 border-2 border-stone-300 py-6 px-12 text-center shadow-[6px_6px_0px_rgba(120,113,108,0.4)] transform transition-all ">
                                
                                {/* --- SOL MİNİMALİST KOLON --- */}
                                <div className="absolute top-3 bottom-3 left-3 w-5 flex flex-col items-center">
                                    {/* Kolon Başlığı (Capital) */}
                                    <div className="w-full h-2.5 bg-stone-300 border border-stone-400 rounded-sm shadow-sm z-10"></div>
                                    <div className="w-[80%] h-1.5 bg-stone-200 border-x border-stone-300"></div>
                                    
                                    {/* Kolon Gövdesi (Shaft - Yivli Görünüm) */}
                                    <div className="w-[70%] flex-grow border-x border-stone-300 bg-[#f5f5f4]" 
                                         style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 3px)'}}>
                                    </div>
                                    
                                    {/* Kolon Tabanı (Base) */}
                                    <div className="w-[90%] h-1.5 bg-stone-200 border-x border-stone-300"></div>
                                    <div className="w-[120%] h-3 bg-stone-300 border border-stone-400 rounded-sm shadow-sm z-10"></div>
                                </div>

                                {/* --- SAĞ MİNİMALİST KOLON --- */}
                                <div className="absolute top-3 bottom-3 right-3 w-5 flex flex-col items-center">
                                    {/* Kolon Başlığı (Capital) */}
                                    <div className="w-full h-2.5 bg-stone-300 border border-stone-400 rounded-sm shadow-sm z-10"></div>
                                    <div className="w-[80%] h-1.5 bg-stone-200 border-x border-stone-300"></div>
                                    
                                    {/* Kolon Gövdesi (Shaft - Yivli Görünüm) */}
                                    <div className="w-[70%] flex-grow border-x border-stone-300 bg-[#f5f5f4]" 
                                         style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 3px)'}}>
                                    </div>
                                    
                                    {/* Kolon Tabanı (Base) */}
                                    <div className="w-[90%] h-1.5 bg-stone-200 border-x border-stone-300"></div>
                                    <div className="w-[120%] h-3 bg-stone-300 border border-stone-400 rounded-sm shadow-sm z-10"></div>
                                </div>

                                <div className="w-16 h-1 bg-amber-700 mx-auto mb-3 opacity-60 rounded-full"></div>
                                <h2 className="text-lg md:text-xl font-serif font-bold text-stone-800 tracking-[0.25em] uppercase border-b border-stone-200 pb-2 inline-block">
                                    {categoryGroup.title}
                                </h2>
                                
                          </div>
                        </div>
                        {/* ------------------------------------------------ */}
                       
                        <div className="org-tree">
                            {hierarchy.map((rootNode) => (
                                <TreeNode 
                                    key={rootNode.id} 
                                    node={rootNode}
                                    completedLevels={completedLevels}
                                    startLevel={startLevel}
                                    allProblems={allProblems}
                                />
                            ))}
                        </div>
                        {/* Bölümler arasına ayırıcı çizgi (sonuncusu hariç) */}
                        {index !== treeStructure.length - 1 && <hr style={{margin:'40px auto', width:'50%', opacity:0.3}}/>}
                    </div>
                );
            })}
          </div>
        </div>
      )}

      {/* --- OYUN GÖRÜNÜMÜ --- */}
      {gameMode === 'playing' && activeProblem && (
        <div className="playing-view">
            <div className="game-layout">
                <div className="board-section board-section-full">
                    <div className="game-navbar">
                        <h3>{activeCategory.id} <span style={{opacity:0.6, fontSize:'0.8em'}}>({currentIndex + 1} / {activeCategory.problems.length})</span></h3>
                        <button className="exit-btn" onClick={() => setGameMode('tree')}>✕ Çıkış</button>
                    </div>

                    <div className="progress-container">
                        <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
                    </div>
                    
                    <GoBoardReact 
                        key={`${currentIndex}-${resetKey}`} 
                        problem={activeProblem}
                        onSolve={handleProblemSolve}
                        description={activeProblem.description || "Bu hamleyi dikkatli düşün."}
                    />

                    <div className="game-controls-bottom">
                        <button 
                            className="control-pill-btn btn-prev"
                            disabled={currentIndex === 0} 
                            onClick={() => {
                                setCurrentIndex(c => c - 1);
                                setIsNextActive(true);
                            }}
                        >
                            ← Geri
                        </button>

                        <button 
                            className="control-pill-btn btn-restart"
                            onClick={handleRestart}
                            title="Yeniden Başlat"
                        >
                            ↺
                        </button>

                        <button 
                            className="control-pill-btn btn-next"
                            disabled={!isNextActive} 
                            onClick={handleNextProblem}
                        >
                            {currentIndex === activeCategory.problems.length - 1 ? "Bitir" : "Sonraki →"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* --- SONUÇ EKRANI --- */}
      {gameMode === 'result' && (
          <div className="result-overlay">
              <div className="result-card">
                  <div style={{fontSize:'4rem', marginBottom:'10px'}}>🍵</div>
                  <h2 className="result-title">Tebrikler!</h2>
                  <p className="result-subtitle">"{activeCategory?.id}" seviyesini tamamladınız. Diğer konu başlığına hazır olduğunuzu düşünüyorsanız devam edebilirsiniz.</p>
                  <button className="nav-btn" style={{background:'var(--tree-accent)', color:'white', width:'100%', padding:'15px', fontSize:'1.1rem'}} onClick={() => setGameMode('tree')}>Ağaca Dön ve Devam Et →</button>
              </div>
          </div>
      )}
    </div>
  );
};

export default GameManager;