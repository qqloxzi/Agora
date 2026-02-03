import React, { useState, useEffect } from 'react';
import GoBoardReact from './GoBoardReact';
import '../styles/gametree-fixed.css';
import { supabase } from '../lib/supabase'; 

// --- 1. VERİ YAPISI (YENİ NODLAR EKLENDİ) ---
const treeStructure = [
  { 
    title: "(20 kyu-18 kyu)Başlangıç", 
    levels: [
      // Kök
      { id: 'Kurallar', label: 'Kurallar', icon: '📖', parent: null },
      
      // Dal 1
      { id: 'Esir Alma 1', label: 'Esir Alma 1', icon: '🌑', parent: 'Kurallar' },
      { id: 'Bağlanma & Kesme', label: 'Bağlanma & Kesme', icon: '🎯', parent: 'Esir Alma 1' }, // Yeni
      { id: 'Nefes Yarışı', label: 'Nefes Yarışı', icon: '🚫', parent: 'Bağlanma & Kesme' }, // Yeni
      
      // Dal 2
      { id: 'Yaşam & Ölüm 1', label: 'Yaşam & Ölüm 1', icon: '👀', parent: 'Kurallar' },
      { id: 'Nefes Yarışı', label: 'Nefes Yarışı', icon: '🏃', parent: 'Yaşam & Ölüm 1' },
      { id: 'Ko Kuralı', label: 'Ko Kuralı', icon: '🔄', parent: 'Yaşam & Ölüm 1' }, // Yeni
      
      // Dal 3 (Nefes Yarışından devam)
      { id: 'Tesuji 1', label: 'Tesuji 1', icon: '⚡', parent: 'Nefes Yarışı' },
      { id: 'Merdiven', label: 'Merdiven', icon: '🪜', parent: 'Tesuji 1' }, // Yeni
      { id: 'File (Net)', label: 'File (Net)', icon: '🕸️', parent: 'Tesuji 1' }, // Yeni
    ]
  },
  { 
    title: "🧱 Usta Adayı (Temel Taşlar)", 
    levels: [
      // Kök
      { id: 'Ölüm & Kalım 1', label: 'Ölüm & Kalım', icon: '💀', parent: null },
      
      // Dal 1
      { id: 'Açılış Prensipleri 1', label: 'Açılış 1', icon: '🌟', parent: 'Ölüm & Kalım 1' },
      { id: 'Köşe Kapmaca', label: 'Köşe Kapmaca', icon: '📐', parent: 'Açılış Prensipleri 1' }, // Yeni
      { id: 'Kenar Açılışı', label: 'Kenar Açılışı', icon: '📏', parent: 'Açılış Prensipleri 1' }, // Yeni

      // Dal 2
      { id: 'Sente', label: 'Sente', icon: '🗡️', parent: 'Ölüm & Kalım 1' },
      { id: 'Gote', label: 'Gote', icon: '🛡️', parent: 'Sente' }, // Yeni
      { id: 'Şekil', label: 'Şekil', icon: '🔺', parent: 'Sente' },
      
      // Dal 3 (Şekil altı)
      { id: 'Kesme & Bağlama', label: 'Kesme', icon: '✂️', parent: 'Şekil' }, // Yeni
      { id: 'Bambu Bağı', label: 'Bambu Bağı', icon: '🎋', parent: 'Şekil' }, // Yeni
    ]
  },
  { 
    title: "🐉 Usta Seviyesi (İleri)", 
    levels: [
      // Kök
      { id: 'Joseki', label: 'Joseki', icon: '📚', parent: null },
      
      // Dal 1
      { id: 'İstila', label: 'İstila', icon: '🏰', parent: 'Joseki' },
      { id: 'Sabaki', label: 'Sabaki', icon: '🦋', parent: 'İstila' }, // Yeni
      { id: 'Miai', label: 'Miai', icon: '⚖️', parent: 'İstila' }, // Yeni

      // Dal 2
      { id: 'Saldırı', label: 'Saldırı', icon: '⚔️', parent: 'Joseki' },
      { id: 'Ağır Taşlar', label: 'Ağır Taşlar', icon: '🪨', parent: 'Saldırı' }, // Yeni
      
      // Dal 3
      { id: 'Sayma', label: 'Sayma', icon: '🧮', parent: 'Saldırı' },
      { id: 'Yose (Son Oyun)', label: 'Yose', icon: '🏁', parent: 'Sayma' }, // Yeni
      { id: 'Ko Tehdidi', label: 'Ko Tehdidi', icon: '💣', parent: 'Sayma' }, // Yeni
    ]
  }
];

// --- 2. LOGIC: Düz listeyi hiyerarşik (iç içe) yapıya çevirir ---
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
    if (isLocked) return alert("Önce bir önceki seviyeyi tamamlamalısın!");
    const problems = allProblems.filter(p => p.category === categoryId);
    if (problems.length === 0) return alert("Bu kategoride soru yok.");
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
      {/* --- AĞAÇ GÖRÜNÜMÜ --- */}
      {gameMode === 'tree' && (
        <div className="tree-view">
          <header className="tree-header">
            <h1>🌳 Go Yetenek Ağacı</h1>
            <p>Yukarıdan başla, kökleri salarak ilerle.</p>
            {!currentUser && <p style={{color:'#ef4444', fontSize:'0.9rem'}}>⚠️ İlerlemenizin kaydedilmesi için giriş yapmalısınız.</p>}
          </header>
          
          <div className="tree-scroll-container">
            {/* 3 Farklı Set İçin Döngü */}
            {treeStructure.map((categoryGroup, index) => {
                // Her kategori grubu için veriyi o an hiyerarşik hale getiriyoruz
                const hierarchy = buildHierarchy(categoryGroup.levels);

                return (
                    <div key={index} className="tree-section">
                        <h2 className="section-title" style={{textAlign:'center', marginTop:'40px', color:'#2c3e50'}}>{categoryGroup.title}</h2>
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
                  <div style={{fontSize:'4rem', marginBottom:'10px'}}>🎉</div>
                  <h2 className="result-title">Tebrikler!</h2>
                  <p className="result-subtitle">"{activeCategory?.id}" seviyesini tamamladın.</p>
                  <div className="stats-row">
                      <div className="stat-box correct"><span className="stat-number">{levelStats.correct}</span><span className="stat-label">Doğru</span></div>
                      <div className="stat-box wrong"><span className="stat-number">{levelStats.wrong}</span><span className="stat-label">Yanlış</span></div>
                  </div>
                  <button className="nav-btn" style={{background:'var(--tree-accent)', color:'white', width:'100%', padding:'15px', fontSize:'1.1rem'}} onClick={() => setGameMode('tree')}>Ağaca Dön ve Devam Et →</button>
              </div>
          </div>
      )}
    </div>
  );
};

export default GameManager;