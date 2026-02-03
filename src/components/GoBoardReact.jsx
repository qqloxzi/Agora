import React, { useEffect, useRef, useState } from 'react';
import '../styles/goboard.css'; 

const GoBoardReact = ({ problem, isTeacher = false, onSolve = null }) => {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  
  const gameState = useRef({
    size: 9,
    stones: [], 
    labels: [],
    turn: 'black',
    history: [],            
    moveTree: { children: [] }, 
    currentNode: null,          
    lastMove: null,
    isLocked: false,
    hoverPos: { x: -1, y: -1 },
    hasSolution: false,
    mode: 'SOLVE', 
    initialStateStr: "", 
    recordingStartColor: 'black',
  });

  const [statusMsg, setStatusMsg] = useState('');
  const [statusColor, setStatusColor] = useState('#fff');
  const [turnIndicator, setTurnIndicator] = useState('black');
  const [coordinateLabels, setCoordinateLabels] = useState({ col: [], row: [] });
  const [teacherMode, setTeacherMode] = useState('SETUP'); 
  const [currentSize, setCurrentSize] = useState(9); 

  const clickSound = useRef(typeof Audio !== "undefined" ? new Audio('/sounds/stone.mp3') : null);

  useEffect(() => {
    loadProblemData();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [problem]);

  const loadProblemData = () => {
    const state = gameState.current;
    
    state.size = problem?.size || 9;
    setCurrentSize(state.size);
    resetBoardState(state.size);

    state.turn = problem?.turn || 'black';
    state.recordingStartColor = state.turn;
    state.lastMove = problem?.lastMove || null;
    state.mode = isTeacher ? 'SETUP' : 'SOLVE';
    setTeacherMode(state.mode);

    if (problem?.solution) {
      if (Array.isArray(problem.solution) && problem.solution.length > 0) {
        let ptr = { children: [] };
        state.moveTree = ptr;
        problem.solution.forEach(move => {
          const n = { ...move, children: [], status: null };
          ptr.children.push(n);
          ptr = n;
        });
        ptr.status = 'correct'; 
        state.hasSolution = true;
      } else if (problem.solution.children) {
        state.moveTree = problem.solution;
        state.hasSolution = true;
      } else {
        state.moveTree = { children: [] };
        state.hasSolution = false;
      }
    } else {
      state.moveTree = { children: [] };
      state.hasSolution = false;
    }
    state.currentNode = state.moveTree;

    if (problem?.initialState) {
        try {
            const parsed = typeof problem.initialState === 'string' ? JSON.parse(problem.initialState) : problem.initialState;
            if (Array.isArray(parsed) && parsed.length > 0) {
                state.stones = parsed;
                state.initialStateStr = typeof problem.initialState === 'string' ? problem.initialState : JSON.stringify(parsed);
            }
        } catch(e) { console.error("Parse Error", e); }
    }

    setTurnIndicator(state.turn);
    setStatusMsg(isTeacher ? "Öğretmen Modu: SETUP" : (state.hasSolution ? "" : "Analiz Modu"));
    calculateCoords(state.size);
    requestAnimationFrame(drawBoard);
  };

  const resetBoardState = (newSize) => {
      const state = gameState.current;
      state.size = newSize;
      state.stones = Array(newSize).fill(0).map(() => Array(newSize).fill(null));
      state.labels = Array(newSize).fill(0).map(() => Array(newSize).fill(null));
      state.history = [];
      state.isLocked = false;
      state.hoverPos = { x: -1, y: -1 };
  };

  const calculateCoords = (s) => {
    const cols = []; const rows = [];
    for(let i=0; i<s; i++) cols.push(String.fromCharCode(65 + (i >= 8 ? i + 1 : i)));
    for(let i=0; i<s; i++) rows.push(s - i);
    setCoordinateLabels({ col: cols, row: rows });
  };

  const handleSizeChange = (newSize) => {
      if (!isTeacher) return;
      const state = gameState.current;
      state.size = newSize;
      setCurrentSize(newSize);
      resetBoardState(newSize);
      state.moveTree = { children: [] };
      state.currentNode = state.moveTree;
      state.initialStateStr = "";
      state.history = [];
      state.lastMove = null;
      calculateCoords(newSize);
      setStatusMsg(`${newSize}x${newSize} Tahta Hazır`);
      requestAnimationFrame(drawBoard);
  };

  const toggleTeacherMode = (newMode) => {
      const state = gameState.current;
      if (newMode === 'SETUP') {
          state.mode = 'SETUP';
          showMessage("Taşları dizin.", '#fff');
      } 
      else if (newMode === 'RECORD') {
          state.initialStateStr = JSON.stringify(state.stones);
          state.recordingStartColor = state.turn;
          state.moveTree = { children: [] };
          state.currentNode = state.moveTree;
          state.history = [];
          state.mode = 'RECORD';
          showMessage("Kayıt Başladı", '#f1c40f');
      }
      setTeacherMode(newMode);
  };

  // --- YENİ FONKSİYON: ADIM GERİ AL (UNDO) ---
  const handleStepBack = () => {
      const state = gameState.current;
      // Kök düğümdeysek geri gidemeyiz
      if (!state.currentNode || state.currentNode === state.moveTree) {
          showMessage("Başlangıçtasınız, geri alınamaz.", "#e74c3c");
          return;
      }

      // 1. Taşları eski haline getir (History'den al)
      if (state.history.length > 0) {
          const prevBoard = state.history.pop(); // Son durumu çıkar
          state.stones = JSON.parse(prevBoard);  // Tahtaya uygula
      } else {
          // Eğer history boşsa ve setup durumuna dönmemiz gerekiyorsa
          if (state.initialStateStr) state.stones = JSON.parse(state.initialStateStr);
      }

      // 2. Ağaçta yukarı çık (Parent varsa)
      if (state.currentNode.parent) {
          state.currentNode = state.currentNode.parent;
      } else {
          // Parent yoksa kök düğüme dön
          state.currentNode = state.moveTree;
      }

      // 3. Sırayı geri çevir
      state.turn = state.turn === 'black' ? 'white' : 'black';
      setTurnIndicator(state.turn);

      // 4. Son hamle göstergesini güncelle
      if (state.currentNode && state.currentNode !== state.moveTree) {
          state.lastMove = { x: state.currentNode.x, y: state.currentNode.y, color: state.currentNode.color };
      } else {
          state.lastMove = null;
      }

      showMessage("Hamle geri alındı.", "#f1c40f");
      drawBoard();
  };

  const markNodeStatus = (status) => {
      const state = gameState.current;
      if (state.mode !== 'RECORD') return;
      if (!state.currentNode || state.currentNode === state.moveTree) {
          showMessage("Henüz hamle yok!", "#e74c3c"); return;
      }
      state.currentNode.status = status;
      showMessage(status === 'correct' ? "✅ İşaretlendi" : "❌ İşaretlendi", status === 'correct' ? '#2ecc71' : '#e74c3c');
  };

  // --- EXPORT SIRASINDA PARENT TEMİZLİĞİ VE KEY TIRNAKLARINI KALDIRMA ---
  const handleExport = () => {
      const state = gameState.current;
      
      // Recursive fonksiyon: Parent referanslarını siler
      const cleanTree = (node) => {
          const { parent, ...rest } = node; // Parent'ı çıkar, gerisini al
          if (rest.children && rest.children.length > 0) {
              rest.children = rest.children.map(c => cleanTree(c));
          }
          return rest;
      };

      // Temizlenmiş ağaç kopyası
      const cleanSolution = cleanTree(state.moveTree);

      const title = prompt("Soru Başlığı:") || "Yeni Soru";
      const category = prompt("Kategori:") || "Genel";
      const description = prompt("Açıklama:") || "";
      
      const exportData = {
          id: `prob-${Date.now()}`,
          size: state.size,
          labels: JSON.stringify(state.labels),
          turn: state.recordingStartColor,
          title: title,
          category: category,
          description: description,
          initialState: state.initialStateStr || JSON.stringify(state.stones),
          lastMove: state.lastMove,
          solution: cleanSolution,
          
      };
      
      // 1. Önce standart JSON stringi oluştur
      const jsonString = JSON.stringify(exportData, null, 2);

      // 2. Regex ile anahtarların (keys) etrafındaki tırnakları kaldır
      // "id": -> id:
      // "size": -> size:
      const jsObjectString = jsonString.replace(/"([a-zA-Z0-9_]+)":/g, '$1:');

      console.log("--- JS OBJE ÇIKTISI ---");
      console.log(jsObjectString); // Konsolda görmek istersen

      navigator.clipboard.writeText(jsObjectString)
          .then(() => alert("JS Objesi formatında kopyalandı!"))
          .catch(() => {
              console.error("Kopyalama başarısız, konsola yazıldı.");
              console.log(jsObjectString);
          });
  };

  const handleTeacherColorToggle = () => {
      const state = gameState.current;
      state.turn = state.turn === 'black' ? 'white' : 'black';
      setTurnIndicator(state.turn);
  };

  // --- OYUN MOTORU ---
  const isOnBoard = (x, y) => x >= 0 && x < gameState.current.size && y >= 0 && y < gameState.current.size;
  
  const getLiberties = (x, y, color, stones, checked = new Set()) => {
      const key = `${x},${y}`;
      if (checked.has(key)) return 0;
      checked.add(key);
      let lib = 0;
      [[x+1, y], [x-1, y], [x, y+1], [x, y-1]].forEach(([nx, ny]) => {
          if (isOnBoard(nx, ny)) {
              if (!stones[nx][ny]) lib++;
              else if (stones[nx][ny].color === color) lib += getLiberties(nx, ny, color, stones, checked);
          }
      });
      return lib;
  };

  const removeGroup = (x, y, color, stones) => {
      const stone = stones[x][y];
      if (!stone || stone.color !== color) return;
      stones[x][y] = null;
      [[x+1, y], [x-1, y], [x, y+1], [x, y-1]].forEach(([nx, ny]) => { if (isOnBoard(nx, ny)) removeGroup(nx, ny, color, stones); });
  };

  const playMove = (x, y, color) => {
      const state = gameState.current;
      
      const currentBoardSnapshot = JSON.stringify(state.stones);
      const newStones = JSON.parse(currentBoardSnapshot); 
      if (newStones[x][y]) return false;
      newStones[x][y] = { color };

      let captured = false;
      const opp = color === 'black' ? 'white' : 'black';
      
      [[x+1, y], [x-1, y], [x, y+1], [x, y-1]].forEach(([nx, ny]) => {
          if (isOnBoard(nx, ny) && newStones[nx][ny] && newStones[nx][ny].color === opp && getLiberties(nx, ny, opp, newStones) === 0) {
              removeGroup(nx, ny, opp, newStones); captured = true;
          }
      });

      if (!captured && getLiberties(x, y, color, newStones) === 0) { showMessage("İntihar Yasak!", "#e74c3c"); return false; }
      
      const newBoardStr = JSON.stringify(newStones);
      if (state.history.includes(newBoardStr)) {
          showMessage("Ko Kuralı!", "#e74c3c");
          return false;
      }

      state.history.push(currentBoardSnapshot); 
      // Teacher modunda history limiti kaldırdık ki geri alabilsin
      // Normal mod için limit koymak istersen buraya if(!isTeacher) ekleyebilirsin.
      
      state.stones = newStones;
      state.lastMove = { x, y, color };
      if (clickSound.current) { clickSound.current.currentTime = 0; clickSound.current.play().catch(()=>{}); }
      return true;
  };

 const drawBoard = () => {
  const canvas = canvasRef.current;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const state = gameState.current;
  const size = state.size;

  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();

  // 🔒 Canvas boyutunu TAM piksele kilitle
  const W = Math.floor(rect.width);

  canvas.style.width = `${W}px`;
  canvas.style.height = `${W}px`;

  canvas.width = W * dpr;
  canvas.height = W * dpr;

  // 🔥 DPR transform (TEK KEZ)
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.imageSmoothingEnabled = false;

  const padding = 36;
  const cellSize = (W - padding * 2) / (size - 1);

  // === ZEMİN ===
  ctx.clearRect(0, 0, W, W);
  ctx.fillStyle = "#f4b35f";
  ctx.fillRect(0, 0, W, W);

  // === GRID ÇİZGİLERİ (JİLET GİBİ) ===
  ctx.strokeStyle = "#2b1d0e";
  ctx.lineWidth = 1;

  ctx.beginPath();
for (let i = 0; i < size; i++) {
  const raw = padding + i * cellSize;
  const p = Math.round(raw) + 0.5; // 🔒 PİKSEL KİLİDİ

  ctx.moveTo(p, padding + 0.5);
  ctx.lineTo(p, W - padding + 0.5);

  ctx.moveTo(padding + 0.5, p);
  ctx.lineTo(W - padding + 0.5, p);
}
ctx.stroke();


  // === HOSHI ===
  const hoshi =
    size === 19 ? [3, 9, 15] :
    size === 13 ? [3, 6, 9] :
    [2, 4, 6];

  ctx.fillStyle = "#000";
  hoshi.forEach(x =>
    hoshi.forEach(y => {
      ctx.beginPath();
      ctx.arc(
        padding + x * cellSize,
        padding + y * cellSize,
        3,
        0,
        Math.PI * 2
      );
      ctx.fill();
    })
  );

  // === TAŞLAR ===
  state.stones.forEach((row, x) => {
    row.forEach((stone, y) => {
      if (stone) {
        drawStone(ctx, x, y, stone.color, cellSize, padding, 1);
      }
    });
  });

  // === SON HAMLE ===
  if (state.lastMove) {
    const { x, y } = state.lastMove;
    ctx.beginPath();
    ctx.arc(
      padding + x * cellSize,
      padding + y * cellSize,
      cellSize * 0.15,
      0,
      Math.PI * 2
    );
    ctx.fillStyle =
      state.stones[x][y].color === "black" ? "#fff" : "#000";
    ctx.fill();
  }
};


 

  const drawStone = (ctx, x, y, color, cellSize, padding, opacity) => {
  const cx = padding + x * cellSize;
  const cy = padding + y * cellSize;
  const r = cellSize * 0.48;

  ctx.save();
  ctx.globalAlpha = opacity;

  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);

  if (color === "black") {
    const g = ctx.createRadialGradient(
      cx - r * 0.25, cy - r * 0.25, r * 0.1,
      cx, cy, r
    );
    g.addColorStop(0, "#555");
    g.addColorStop(1, "#000");
    ctx.fillStyle = g;
  } else {
    const g = ctx.createRadialGradient(
      cx - r * 0.25, cy - r * 0.25, r * 0.1,
      cx, cy, r
    );
    g.addColorStop(0, "#fff");
    g.addColorStop(1, "#ddd");
    ctx.fillStyle = g;
  }

  ctx.fill();
  ctx.restore();
};


  const handleMouseMove = (e) => {
      const state = gameState.current;
      if (state.isLocked && state.mode === 'SOLVE') { canvasRef.current.style.cursor = 'default'; return; }
      const rect = canvasRef.current.getBoundingClientRect();
      const padding = 30;
      const cellSize = (rect.width - padding * 2) / (state.size - 1);
      const mouseX = e.clientX - rect.left - padding; const mouseY = e.clientY - rect.top - padding;
      const x = Math.round(mouseX / cellSize); const y = Math.round(mouseY / cellSize);
      if (isOnBoard(x, y)) {
          if (state.hoverPos.x !== x || state.hoverPos.y !== y) { state.hoverPos = { x, y }; canvasRef.current.style.cursor = 'pointer'; requestAnimationFrame(drawBoard); }
      } else {
          state.hoverPos = { x: -1, y: -1 }; canvasRef.current.style.cursor = 'default'; requestAnimationFrame(drawBoard);
      }
  };

  const handleClick = () => {
      const state = gameState.current;
      const { x, y } = state.hoverPos;
      
      if (!isOnBoard(x, y) || state.isLocked) return;
      if (state.stones[x][y]) return;

      // 1. SETUP MODU
      if (state.mode === 'SETUP') {
          state.stones[x][y] = { color: state.turn };
          drawBoard();
          return;
      }

      // 2. RECORD MODU
      if (state.mode === 'RECORD') {
          const moveColor = state.turn;
          if (playMove(x, y, moveColor)) {
              const newNode = { 
                  x, y, 
                  color: moveColor, 
                  children: [], 
                  status: null, 
                  parent: state.currentNode 
              };
              
              const existingChild = state.currentNode.children.find(c => c.x === x && c.y === y);
              if (existingChild) {
                  state.currentNode = existingChild;
                  showMessage("Mevcut varyasyon", "#3498db");
              } else {
                  state.currentNode.children.push(newNode);
                  state.currentNode = newNode;
              }
              state.turn = state.turn === 'black' ? 'white' : 'black';
              setTurnIndicator(state.turn);
              drawBoard();
          }
          return;
      }

      // 3. SOLVE MODU (DÜZELTİLEN KISIM)
      if (state.mode === 'SOLVE') {
          // Oyuncunun tıkladığı hamle ağaçta var mı?
          const nextNode = state.currentNode.children?.find(c => c.x === x && c.y === y);
          
          if (nextNode) {
              // 1. Oyuncunun hamlesini oynat
              playMove(x, y, nextNode.color);
              state.currentNode = nextNode;
              state.turn = state.turn === 'black' ? 'white' : 'black';
              setTurnIndicator(state.turn); // Sıra göstergesini güncelle
              drawBoard();

              // 2. KRİTİK KONTROL: Devamı var mı?
              if (nextNode.children && nextNode.children.length > 0) {
                  // Devamı varsa STATÜYE BAKMA, tahtayı kilitleme.
                  // Bilgisayarın cevap vermesini bekle.
                  
                  setTimeout(() => {
                      // Bilgisayar genelde ana varyasyonu (ilk çocuğu) oynar
                      const responseNode = nextNode.children[0]; 
                      
                      playMove(responseNode.x, responseNode.y, responseNode.color);
                      state.currentNode = responseNode;
                      
                      // Sırayı tekrar oyuncuya ver
                      state.turn = state.turn === 'black' ? 'white' : 'black';
                      setTurnIndicator(state.turn); 
                      drawBoard();
                      
                      // Bilgisayar hamlesinden sonra durumu kontrol et
                      // (Belki bilgisayar "seni öldürdüm yanlış yaptın" demiştir)
                      checkStatus(responseNode);
                  }, 500); // Yarım saniye düşünme payı

              } else {
                  // Devamı yoksa (Yaprak Düğüm), o zaman sonucu kontrol et.
                  checkStatus(nextNode);
              }

          } else {
              // Ağaçta olmayan bir yere tıkladı
              if(!state.hasSolution) { 
                 // Analiz modu (Serbest)
                 playMove(x, y, state.turn);
                 state.turn = state.turn === 'black' ? 'white' : 'black';
                 setTurnIndicator(state.turn); 
                 drawBoard();
              } else {
                 // Yanlış hamle
                 showMessage("Yanlış Hamle", "#e74c3c"); 
                 state.isLocked = true;
                 if(onSolve) onSolve(false);
              }
          }
      }
  };

  const checkStatus = (node) => {
      // Eğer node'un çocukları varsa, oyun daha bitmemiştir, "Tebrikler" deme.
      // Sadece çocuklar YOKSA (oyun sonu) durumu değerlendir.
      if (node.children && node.children.length > 0) {
          // Özel durum: Eğer "Wrong" işaretlenmişse ve devamı olsa bile bu bir cezalandırma dalıysa:
          if (node.status === 'wrong') {
             showMessage("Yanlış Yol", "#e74c3c"); 
             // Kilitlemek istemiyorsan burayı yorum satırı yapabilirsin, 
             // ama yanlış yola girince genelde kilitlenir.
             // gameState.current.isLocked = true; 
             if(onSolve) onSolve(false);
          }
          return;
      }

      if (node.status === 'correct') {
          showMessage("Tebrikler! Doğru Çözüm.", "#2ecc71"); 
          gameState.current.isLocked = true;
          if(onSolve) onSolve(true);
      } else if (node.status === 'wrong') {
          showMessage("Yanlış Yol", "#e74c3c"); 
          gameState.current.isLocked = true;
          if(onSolve) onSolve(false);
      } else {
          // Status null ise ve çocuklar yoksa, varsayılan olarak doğru kabul edilebilir
          // veya "Devam et" denebilir. Genelde yaprak düğümse bitmiştir.
          if(!node.children || node.children.length === 0) {
              showMessage("Tebrikler!", "#2ecc71");
              gameState.current.isLocked = true;
              if(onSolve) onSolve(true);
          }
      }
  };
  const showMessage = (msg, color) => { setStatusMsg(msg); setStatusColor(color); };
  const handleResize = () => requestAnimationFrame(drawBoard);
  const resetBoard = () => loadProblemData();

  return (
    <div className="go-app-react" ref={wrapperRef}>
       {/* Üst Bilgi Barı: Sıra kimde göstergesi */}
       {(!isTeacher || teacherMode === 'RECORD') && (
        <div className="top-info-bar">
          <div className="turn-badge">
            <div className={`turn-indicator ${turnIndicator}`}></div>
            <span>{turnIndicator === 'black' ? 'Siyah' : 'Beyaz'}</span>
          </div>
        </div>
      )}

      {/* Durum Mesajı (Tebrikler vs.) */}
      {/* NOT: GameManager zaten sonuç ekranı gösteriyor, istersen burayı da !isTeacher ile gizleyebilirsin ama anlık geri bildirim için kalabilir. */}
      <div className="status" style={{color: statusColor}}>{statusMsg}</div>

      <div className="go-wrapper-shadow">
          <div className="go-container">
             <div className="coords-layer">
                 {coordinateLabels.col.map((lbl, i) => (
                     <span key={`c-${i}`} className="coord-label col" style={{left: `${(i * 100) / (gameState.current.size - 1)}%`}}>{lbl}</span>
                 ))}
                 {coordinateLabels.row.map((lbl, i) => (
                     <span key={`r-${i}`} className="coord-label row" style={{top: `${(i * 100) / (gameState.current.size - 1)}%`}}>{lbl}</span>
                 ))}
             </div>
             <canvas ref={canvasRef} className="goBoard" onMouseMove={handleMouseMove} onMouseLeave={() => { gameState.current.hoverPos = {x:-1, y:-1}; drawBoard(); }} onClick={handleClick} />
          </div>
      </div>

      {/* --- DÜZELTME BURADA: ARTIK SADECE ÖĞRETMEN GÖREBİLİR --- */}
      {isTeacher && (
        <div className="bottom-controls" style={{flexWrap: 'wrap', justifyContent:'center'}}>
            <button className="control-btn resetBtn" onClick={resetBoard} title="Başa Dön">↺</button>
            
            <div className="teacher-controls" style={{display:'flex', gap:'10px', alignItems:'center', marginLeft:'10px'}}>
                <div style={{width:'1px', height:'30px', background:'#555'}}></div>
                
                {teacherMode === 'SETUP' ? (
                        <>
                        <div style={{display:'flex', gap:'5px'}}>
                            {[9, 13, 19].map(s => (
                                <button 
                                    key={s}
                                    onClick={() => handleSizeChange(s)}
                                    style={{
                                        background: currentSize === s ? '#3498db' : 'transparent',
                                        border: '1px solid #7f8c8d',
                                        color: currentSize === s ? 'white' : '#bdc3c7',
                                        borderRadius: '4px',
                                        padding: '5px 10px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                        <div style={{width:'1px', height:'30px', background:'#555'}}></div>

                        <button className="control-btn" onClick={() => handleTeacherColorToggle()} title="Renk Değiştir">
                            <div className={`turn-indicator ${turnIndicator === 'black' ? 'white' : 'black'}`}></div>
                        </button>
                        <button className="control-btn" style={{borderRadius:'5px', width:'auto', padding:'0 10px', fontSize:'0.9rem'}} onClick={() => toggleTeacherMode('RECORD')}>
                            🔴 Kayıt
                        </button>
                        </>
                ) : (
                    <>
                        <button className="control-btn" style={{background:'#2ecc71'}} onClick={() => markNodeStatus('correct')} title="Doğru">✅</button>
                        <button className="control-btn" style={{background:'#e74c3c'}} onClick={() => markNodeStatus('wrong')} title="Yanlış">❌</button>
                        
                        <button className="control-btn" style={{background:'#e67e22'}} onClick={handleStepBack} title="Bir Adım Geri Al">↩️</button>

                        <div style={{width:'1px', height:'30px', background:'#555'}}></div>
                        <button className="control-btn" style={{borderRadius:'5px', width:'auto', padding:'0 10px', fontSize:'0.9rem'}} onClick={handleExport}>💾 İndir</button>
                        <button className="control-btn" style={{fontSize:'0.8rem'}} onClick={() => toggleTeacherMode('SETUP')} title="Setup">⚙️</button>
                    </>
                )}
            </div>
        </div>
      )}
      {/* --- DÜZELTME SONU --- */}
      
    </div>
  );
};


export default GoBoardReact;