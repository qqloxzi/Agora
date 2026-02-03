import React, { useState, useEffect } from 'react';
import GoBoardReact from './GoBoardReact';
import '../styles/gametree-fixed.css';
import { supabase } from '../lib/supabase'; 

// ... (treeStructure AYNI KALSIN) ...
const treeStructure = [
  {
    title: "Başlangıç (20-18k)",
    levels: [
      { id: 'Kurallar', label: 'Kurallar', icon: '📖', parent: null },
      { id: 'Esir Alma 1', label: 'Esir Alma 1', icon: '🌑', parent: 'Kurallar' },
      { id: 'İki Göz Kavramı', label: 'İki Göz', icon: '👀', parent: 'Esir Alma 1' },
      { id: 'Nefes Yarışı', label: 'Nefes Yarışı', icon: '🏃', parent: 'İki Göz Kavramı' },
      { id: 'Tesuji 1', label: 'Tesuji 1', icon: '⚡', parent: 'Nefes Yarışı' },
    ]
  },
  {
    title: "Temel Taşlar (17-12k)",
    levels: [
      { id: 'Ölüm & Kalım 1', label: 'Ölüm & Kalım', icon: '💀', parent: null },
      { id: 'Açılış Prensipleri 1', label: 'Açılış 1', icon: '🌟', parent: 'Ölüm & Kalım 1' },
      { id: 'Sente', label: 'Sente', icon: '🗡️', parent: 'Açılış Prensipleri 1' },
      { id: 'Şekil', label: 'Şekil', icon: '🔺', parent: 'Sente' },
    ]
  },
  {
    title: "İleri Seviye (11-6k)",
    levels: [
      { id: 'Joseki', label: 'Joseki', icon: '📚', parent: null },
      { id: 'İstila', label: 'İstila', icon: '🏰', parent: 'Joseki' },
      { id: 'Saldırı', label: 'Saldırı', icon: '⚔️', parent: 'İstila' },
      { id: 'Sayma', label: 'Sayma', icon: '🧮', parent: 'Saldırı' },
    ]
  }
];

const GameManager = ({ allProblems }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [gameMode, setGameMode] = useState('tree');
  const [completedLevels, setCompletedLevels] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNextActive, setIsNextActive] = useState(false);
  const [levelStats, setLevelStats] = useState({ correct: 0, wrong: 0 });
  const [currentProblemHasError, setCurrentProblemHasError] = useState(false);
  
  // TAHTAYI SIFIRLAMAK İÇİN KEY
  const [resetKey, setResetKey] = useState(0);

  // ... (useEffect kısımları AYNI KALSIN) ...
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
    setResetKey(0); // Reset sayacını sıfırla
    setGameMode('playing');
  };

  const handleNextProblem = () => {
    if (activeCategory && currentIndex < activeCategory.problems.length - 1) {
      setCurrentIndex(c => c + 1);
      setCurrentProblemHasError(false);
      setResetKey(prev => prev + 1); // Yeni soruya geçerken tahtayı tazelemek için
    } else {
      handleLevelComplete(activeCategory.id);
    }
  };

  const handleRestart = () => {
    // Sadece tahtayı sıfırla (State'i resetlemeden key'i değiştir)
    setResetKey(prev => prev + 1);
    setCurrentProblemHasError(false); // Hatayı sıfırla, tekrar denesin
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
  
  // İlerleme Yüzdesi Hesapla
  const progressPercent = activeCategory ? ((currentIndex + 1) / activeCategory.problems.length) * 100 : 0;

  return (
    <div className="game-manager-container">
      {/* ... (TREE VIEW KISMI AYNI KALSIN) ... */}
      {gameMode === 'tree' && (
        <div className="tree-view">
          <header className="tree-header">
            <h1>Go Yetenek Ağacı</h1>
            <p>Usta bir oyuncu olmak için yolu takip et.</p>
            {!currentUser && <p style={{color:'#ef4444', fontSize:'0.9rem'}}>⚠️ İlerlemenizin kaydedilmesi için giriş yapmalısınız.</p>}
          </header>
          <div className="columns-wrapper">
            {treeStructure.map((col, colIndex) => (
              <div key={colIndex} className="tree-column">
                <h3 className="column-title">{col.title}</h3>
                <div className="nodes-container">
                  {col.levels.map((level) => {
                    const isLocked = level.parent && !completedLevels.includes(level.parent);
                    const isCompleted = completedLevels.includes(level.id);
                    const questionCount = allProblems.filter(p => p.category === level.id).length;
                    return (
                      <div key={level.id} className="node-wrapper">
                        {level.parent && <div className={`connector ${isLocked ? 'locked' : ''}`}></div>}
                        <div className={`level-node ${isLocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''}`} onClick={() => startLevel(level.id, isLocked)}>
                          <div className="node-icon">{level.icon}</div>
                          <span className="node-badge">{questionCount}</span>
                        </div>
                        <span className="node-label">{level.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- OYUN GÖRÜNÜMÜ (YENİ TASARIM) --- */}
      {gameMode === 'playing' && activeProblem && (
        <div className="playing-view">
            <div className="game-layout">
                
                {/* SOL TARAF: TAHTA VE KONTROLLER */}
                <div className="board-section">
                    
                    {/* 1. ÜST BİLGİ VE ÇIKIŞ */}
                    <div className="game-navbar">
                        <h3>{activeCategory.id} <span style={{opacity:0.6, fontSize:'0.8em'}}>({currentIndex + 1} / {activeCategory.problems.length})</span></h3>
                        <button className="exit-btn" onClick={() => setGameMode('tree')}>✕ Çıkış</button>
                    </div>

                    {/* 2. İLERLEME ÇUBUĞU (BAR) */}
                    <div className="progress-container">
                        <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
                    </div>
                    
                    {/* 3. GO TAHTASI */}
                    {/* Key olarak currentIndex ve resetKey veriyoruz, böylece sıfırlanabiliyor */}
                    <GoBoardReact 
                        key={`${currentIndex}-${resetKey}`} 
                        problem={activeProblem}
                        onSolve={handleProblemSolve} 
                    />

                    {/* 4. ALT KONTROLLER (HİZALI BUTONLAR) */}
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

                {/* SAĞ TARAF: SADECE BİLGİ KUTUSU */}
                <div className="info-only-section">
                    <div className="info-card-wrapper">
                        <div key={currentIndex} className="description-box pop-animation">
                            <h4>💡 İpucu</h4>
                            <p>{activeProblem.description || "Bu hamleyi dikkatli düşün."}</p>
                        </div>
                    </div>
                    {/* Butonlar buradan kaldırıldı */}
                </div>
            </div>
        </div>
      )}

      {/* ... (SONUÇ EKRANI AYNI KALSIN) ... */}
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