import {
  Component,
  lazy,
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Download,
  Flame,
  Heart,
  Maximize2,
  Music2,
  Pause,
  Play,
  RotateCcw,
  Sparkles,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";

const PortalFieldCollection = lazy(() => import("./PortalFieldCollection"));
const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

const letterPages = [
  "有妈妈，便有了爱、自由与幸福，也有了属于我们的码头。遇到什么事，你总笑着和我说，没关系，家永远是我们的避风港。你默默扛起许多，却总把安心与温暖留给我们。",
  "我喜欢森林、大海与天空，着迷于它们无边的广阔。可比起世间所有辽阔景致，我更庆幸拥有我的妈妈。",
  "树叶是浓得要凝固的深绿，而妈妈，是浓得要漫出来的温暖。坚韧、明亮，像生命里哗然到来的春，又似缓缓淌入心间的河，照亮着、滋养着。",
  "自信、阳光，这些闪闪发光的特质，也是你言传身教赠予我最珍贵的礼物。那些曾经的对抗与不理解，如今都化作每次提起时忍不住的感激。",
  "越长大，越明白抚养孩子的不易；越长大，越懂得你给予我的力量有多珍贵。能做你的女儿，我何其幸运。我想。化用那句话，如果世界上只有一种英雄主义，那就是看透生活的残酷之后，依然选择热爱生活，尽力过灿烂的明天。你就是我身边最近、也最闪耀的英雄。",
  "今天，祝我的妈妈生日快乐。愿在新的爱与新的喧嚣中，你依旧笑靥如花，自由明亮。",
];

const letterText = letterPages.join("\n\n");

const memories = [
  {
    src: assetPath("assets/photos/photo-01-airport.jpg"),
    alt: "妈妈在机场大厅靠着行李箱站立",
    kicker: "启程",
    story: "哪里来的大长腿！美爆了，古早港风味！",
  },
  {
    src: assetPath("assets/photos/photo-02-freedom.jpg"),
    alt: "妈妈戴着帽子在高处迎风张开双臂",
    kicker: "自由",
    story: "自由的风，比不上自由的你。",
  },
  {
    src: assetPath("assets/photos/photo-03-learning.jpg"),
    alt: "妈妈与朋友一起展示学习证书",
    kicker: "成长",
    story: "捕捉一只好学的妈妈！无论什么时候，都保持学习的心态。别问我学习方法，诀窍其实是基因！",
  },
  {
    src: assetPath("assets/photos/photo-04-eyes.jpg"),
    alt: "妈妈穿红色毛衣在阳光下微笑",
    kicker: "明亮",
    story: "水灵灵的大眼睛，眼波盈盈，顾盼生辉。一顾眼波轻漾，风月尽落眼底。",
  },
  {
    src: assetPath("assets/photos/photo-05-family.jpg"),
    alt: "家人小时候在瀑布前合影",
    kicker: "我们",
    story: "一家高颜值的秘诀是：基因好！",
  },
];

const blessings = [
  "希望你一切都好，希望所有俗套的祝福，都在你身上灵验。",
  "愿这世间的风霜，都绕道而行。",
  "春辉永驻，淑景常新，岁岁安康。",
];

const scenes = ["序章", "家书", "许愿", "回忆", "祝福", "星光"];

class BackgroundBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function CloudBackground() {
  return (
    <div className="cloud-shell" aria-hidden="true">
      <BackgroundBoundary>
        <Suspense fallback={null}>
          <PortalFieldCollection
            variant="cloud-field"
            hue={0}
            saturation={1}
            brightness={1}
          />
        </Suspense>
      </BackgroundBoundary>
      <div className="cloud-grade" />
    </div>
  );
}

function TypedLetter({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= letterText.length) {
      onComplete();
      return;
    }
    const character = letterText[visible];
    const pause = /[。！？]/.test(character) ? 180 : /[，；]/.test(character) ? 90 : 34;
    const timer = window.setTimeout(() => setVisible((count) => count + 1), pause);
    return () => window.clearTimeout(timer);
  }, [visible, onComplete]);

  const finish = () => {
    setVisible(letterText.length);
    onComplete();
  };

  return (
    <>
      <div className="letter-body" aria-live="polite">
        {letterText.slice(0, visible)}
        {visible < letterText.length && <span className="type-caret" aria-hidden="true" />}
      </div>
      {visible < letterText.length && <button className="letter-skip" onClick={finish}>直接读完整封信</button>}
    </>
  );
}

function useStarlightMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const begin = async () => {
    if (!audioRef.current) {
      const audio = new Audio(assetPath("assets/audio/white-cherry-melancholy.mp3"));
      audio.loop = true;
      audio.volume = .46;
      audio.preload = "auto";
      audioRef.current = audio;
    }
    try {
      await audioRef.current.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  const pause = () => {
    audioRef.current?.pause();
    setPlaying(false);
  };

  const toggle = () => (playing ? pause() : begin());

  useEffect(() => () => {
    audioRef.current?.pause();
    audioRef.current = null;
  }, []);

  return { playing, begin, toggle };
}

function App() {
  const [entered, setEntered] = useState(false);
  const [entryReady, setEntryReady] = useState(false);
  const [entryVideoEnabled, setEntryVideoEnabled] = useState(false);
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState(false);
  const [scene, setScene] = useState(0);
  const [letterComplete, setLetterComplete] = useState(false);
  const [wishMade, setWishMade] = useState(false);
  const [activeMemory, setActiveMemory] = useState<number | null>(null);
  const [memoryIndex, setMemoryIndex] = useState(0);
  const [memoryRotation, setMemoryRotation] = useState(0);
  const [litBlessings, setLitBlessings] = useState(0);
  const [gestureOn, setGestureOn] = useState(false);
  const [gestureMessage, setGestureMessage] = useState("");
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const nebulaDrag = useRef<{ x: number; rotation: number; moved: boolean } | null>(null);
  const { playing, begin, toggle } = useStarlightMusic();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktopVideo = window.matchMedia("(min-width: 860px)").matches;
    setEntryVideoEnabled(!reducedMotion && desktopVideo);
    const timer = window.setTimeout(() => setEntryReady(true), reducedMotion ? 30 : 4600);
    return () => window.clearTimeout(timer);
  }, []);

  const enter = async () => {
    if (code.trim() !== "2026.10") {
      setCodeError(true);
      return;
    }
    setCodeError(false);
    setEntered(true);
    await begin();
  };

  const go = (next: number) => {
    setScene(Math.max(0, Math.min(scenes.length - 1, next)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const moveMemory = (direction: number) => {
    setMemoryIndex((current) => {
      const next = (current + direction + memories.length) % memories.length;
      setMemoryRotation(-next * 72);
      return next;
    });
  };

  const selectMemory = (index: number) => {
    setMemoryIndex(index);
    setMemoryRotation(-index * 72);
  };

  const settleNebula = () => {
    const index = ((Math.round(-memoryRotation / 72) % memories.length) + memories.length) % memories.length;
    selectMemory(index);
    nebulaDrag.current = null;
  };

  const toggleGesture = async () => {
    if (gestureOn) {
      streamRef.current?.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
      setGestureOn(false);
      setGestureMessage("");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user", width: 320 }, audio: false });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setGestureOn(true);
      setGestureMessage("镜头已开启。左右挥手可切换回忆，也可继续使用屏幕按钮。");
    } catch {
      setGestureMessage("没有获得摄像头权限，屏幕滑动和按钮仍可正常使用。");
    }
  };

  useEffect(() => {
    if (!gestureOn || !videoRef.current) return;
    const video = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 48;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    let previous: Uint8ClampedArray | null = null;
    let previousX: number | null = null;
    let lastMove = 0;
    const interval = window.setInterval(() => {
      if (!context || video.readyState < 2) return;
      context.drawImage(video, 0, 0, 64, 48);
      const current = context.getImageData(0, 0, 64, 48).data;
      if (previous) {
        let weightedX = 0;
        let changed = 0;
        for (let i = 0; i < current.length; i += 16) {
          const delta = Math.abs(current[i] - previous[i]) + Math.abs(current[i + 1] - previous[i + 1]);
          if (delta > 55) {
            weightedX += ((i / 4) % 64);
            changed += 1;
          }
        }
        if (changed > 28) {
          const x = weightedX / changed;
          if (previousX !== null && Date.now() - lastMove > 1200) {
            if (x - previousX > 11) { moveMemory(-1); lastMove = Date.now(); }
            if (previousX - x > 11) { moveMemory(1); lastMove = Date.now(); }
          }
          previousX = x;
        }
      }
      previous = new Uint8ClampedArray(current);
    }, 260);
    return () => window.clearInterval(interval);
  }, [gestureOn]);

  useEffect(() => () => streamRef.current?.getTracks().forEach((track) => track.stop()), []);

  const downloadPoster = async () => {
    const image = new Image();
    image.src = assetPath("assets/poster/poster-main.png");
    await image.decode();
    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1920;
    const ctx = canvas.getContext("2d")!;
    const scale = Math.max(canvas.width / image.width, canvas.height / image.height);
    const width = image.width * scale;
    const height = image.height * scale;
    ctx.drawImage(image, (canvas.width - width) / 2, (canvas.height - height) / 2, width, height);
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "rgba(8,11,29,.12)");
    gradient.addColorStop(0.55, "rgba(8,11,29,.08)");
    gradient.addColorStop(1, "rgba(8,11,29,.88)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.textAlign = "center";
    ctx.fillStyle = "#f7c873";
    ctx.font = "600 72px serif";
    ctx.fillText("妈妈，生日快乐", 540, 1590);
    ctx.fillStyle = "rgba(255,255,255,.92)";
    ctx.font = "36px sans-serif";
    ctx.fillText("愿岁岁安康，永远自由明亮", 540, 1665);
    ctx.font = "28px sans-serif";
    ctx.fillStyle = "rgba(255,255,255,.72)";
    ctx.fillText("爱你的女儿 · LYX", 540, 1740);
    const link = document.createElement("a");
    link.download = "妈妈生日祝福海报.png";
    link.href = canvas.toDataURL("image/png", 0.94);
    link.click();
  };

  const sceneContent = useMemo(() => {
    if (scene === 0) return (
      <section className="scene intro-scene" aria-labelledby="intro-title">
        <div className="meteor" />
        <p className="eyebrow">A LIGHT BORROWED FROM THE UNIVERSE</p>
        <h1 id="intro-title">妈妈，今天是宇宙<br />把光都借给我们的日子。</h1>
        <p className="scene-note">请慢一点，让星光把这封信送到你身边。</p>
        <button className="primary-button" onClick={() => go(1)}>打开这封信 <Sparkles size={17} /></button>
      </section>
    );

    if (scene === 1) return (
      <section className="scene letter-scene" aria-labelledby="letter-title">
        <div className="letter-wrap">
          <div className="envelope-mark"><Heart size={22} fill="currentColor" /></div>
          <article className="letter-paper">
            <p className="letter-kicker">致亲爱的妈妈</p>
            <h2 id="letter-title">一封星光家书</h2>
            <TypedLetter onComplete={() => setLetterComplete(true)} />
            <p className="letter-signature">爱你的女儿 · LYX</p>
          </article>
        </div>
        {letterComplete && <button className="primary-button" onClick={() => go(2)}>收下这份祝福 <Heart size={17} /></button>}
      </section>
    );

    if (scene === 2) return (
      <section className="scene cake-scene" aria-labelledby="cake-title">
        <div className={`cake-halo ${wishMade ? "wish-made" : ""}`}>
          <img src={assetPath("assets/cake/galaxy-cake.png")} alt="一只深蓝紫色星空蛋糕，金色行星环围绕着烛光" />
          {!wishMade && <button className="flame-button" onClick={() => setWishMade(true)} aria-label="吹灭生日蜡烛"><Flame /></button>}
        </div>
        <p className="eyebrow">MAKE A WISH</p>
        <h2 id="cake-title">{wishMade ? "愿望已被星星收到" : "闭上眼，许一个愿吧"}</h2>
        <p className="scene-note">{wishMade ? "这一次，愿所有美好都向你奔来。" : "轻触烛光，让愿望出发。"}</p>
        {wishMade && <button className="primary-button" onClick={() => go(3)}>去看我们的回忆 <ArrowRight size={17} /></button>}
      </section>
    );

    if (scene === 3) {
      return (
        <section className="scene memory-scene" aria-labelledby="memory-title">
          <div className="scene-heading">
            <p className="eyebrow">MEMORY CONSTELLATION</p>
            <h2 id="memory-title">记忆不是过去，是一直亮着的星</h2>
          </div>
          <div
            className="memory-nebula-stage"
            onWheel={(event) => { event.preventDefault(); moveMemory(event.deltaY > 0 ? 1 : -1); }}
            onPointerDown={(event) => { nebulaDrag.current = { x: event.clientX, rotation: memoryRotation, moved: false }; event.currentTarget.setPointerCapture(event.pointerId); }}
            onPointerMove={(event) => {
              if (!nebulaDrag.current) return;
              const delta = event.clientX - nebulaDrag.current.x;
              if (Math.abs(delta) > 5) nebulaDrag.current.moved = true;
              setMemoryRotation(nebulaDrag.current.rotation + delta * .34);
            }}
            onPointerUp={settleNebula}
            onPointerCancel={settleNebula}
          >
            <div className="nebula-core" aria-hidden="true"><span /><i /><i /></div>
            <div className="nebula-orbit" aria-hidden="true" />
            {memories.map((item, index) => {
              const angle = index * 72 + memoryRotation;
              return (
                <button
                  key={item.src}
                  className={`nebula-polaroid ${index === memoryIndex ? "active" : ""}`}
                  style={{ transform: `rotateY(${angle}deg) translateZ(var(--orbit-radius)) rotateY(${-angle}deg)` }}
                  onClick={() => {
                    if (nebulaDrag.current?.moved) return;
                    selectMemory(index);
                    if (index === memoryIndex) setActiveMemory(index);
                  }}
                  aria-label={`${index === memoryIndex ? "放大查看" : "转到"}：${item.story}`}
                >
                  <span className="memory-index">0{index + 1}</span>
                  <img src={item.src} alt={item.alt} draggable="false" />
                  <span className="memory-copy"><small>{item.kicker}</small><strong>{item.story}</strong></span>
                  {index === memoryIndex && <Maximize2 className="expand-icon" size={17} />}
                </button>
              );
            })}
          </div>
          <div className="memory-controls">
            <button className="round-button memory-prev" onClick={() => moveMemory(-1)} aria-label="上一张照片"><ChevronLeft /></button>
            <p><strong>{memories[memoryIndex].kicker}</strong><span>拖动星云 · 滚轮 / 按钮切换 · 再点当前照片放大</span></p>
            <button className="round-button memory-next" onClick={() => moveMemory(1)} aria-label="下一张照片"><ChevronRight /></button>
          </div>
          <div className="memory-dots" aria-label="照片位置">{memories.map((_, index) => <button key={index} className={index === memoryIndex ? "active" : ""} onClick={() => selectMemory(index)} aria-label={`第 ${index + 1} 张照片`} />)}</div>
          <div className="gesture-panel">
            <video ref={videoRef} muted playsInline className={gestureOn ? "gesture-preview active" : "gesture-preview"} aria-hidden="true" />
            <button className="text-button" onClick={toggleGesture}><Camera size={16} /> {gestureOn ? "关闭手势漫游" : "开启手势漫游（实验）"}</button>
            {gestureMessage && <p>{gestureMessage}</p>}
          </div>
          <button className="primary-button" onClick={() => go(4)}>点亮祝福 <Sparkles size={17} /></button>
        </section>
      );
    }

    if (scene === 4) return (
      <section className="scene blessing-scene" aria-labelledby="blessing-title">
        <p className="eyebrow">THREE WISHES FOR YOU</p>
        <h2 id="blessing-title">把三颗星，一颗一颗点亮</h2>
        <div className="blessing-orbit">
          {blessings.map((blessing, index) => {
            const lit = index < litBlessings;
            return <button key={blessing} className={`wish-orb ${lit ? "lit" : ""}`} disabled={index > litBlessings} onClick={() => setLitBlessings(Math.max(litBlessings, index + 1))}><span>{index + 1}</span><p>{lit ? blessing : "轻触点亮"}</p></button>;
          })}
        </div>
        {litBlessings === blessings.length && <button className="primary-button" onClick={() => go(5)}>去看最后一束光 <ArrowRight size={17} /></button>}
      </section>
    );

    return (
      <section className="scene finale-scene" aria-labelledby="finale-title">
        <div className="fireworks" aria-hidden="true"><i /><i /><i /></div>
        <div className="poster-preview">
          <img src={assetPath("assets/poster/poster-main.png")} alt="妈妈手捧红色花束微笑" />
          <div className="poster-copy"><small>TO MY DEAREST MOM</small><h2 id="finale-title">妈妈，生日快乐</h2><p>愿岁岁安康，永远自由明亮</p><span>爱你的女儿 · LYX</span></div>
        </div>
        <div className="final-actions">
          <button className="primary-button" onClick={downloadPoster}><Download size={17} /> 保存祝福海报</button>
          <button className="secondary-button" onClick={() => { setScene(0); setLetterComplete(false); setWishMade(false); setLitBlessings(0); selectMemory(0); }}><RotateCcw size={17} /> 重温旅程</button>
          <button className="text-button" onClick={() => go(3)}>查看照片</button>
        </div>
      </section>
    );
  }, [scene, letterComplete, wishMade, memoryIndex, memoryRotation, litBlessings, gestureOn, gestureMessage]);

  if (!entered) return (
    <main className="app entry-app">
      <CloudBackground />
      <div className="star-noise" aria-hidden="true" />
      <div className={`entry-cinematic ${entryReady ? "is-settled" : ""}`} aria-hidden="true">
        {entryVideoEnabled && <video className="entry-space-video" src={assetPath("assets/video/space-stars-4k.mp4")} autoPlay muted playsInline loop preload="metadata" />}
        <div className="entry-cinematic-shade" />
        <span className="entry-first-meteor" />
        <div className="entry-meteor-rain">{Array.from({ length: 10 }, (_, index) => <i key={index} />)}</div>
        <div className="entry-star-bloom"><span>✦</span><i /><i /></div>
      </div>
      <section className={`entry-card ${entryReady ? "is-visible" : ""}`} aria-labelledby="entry-title">
        <div className="entry-gem"><Sparkles /></div>
        <p className="eyebrow">A PRIVATE CONSTELLATION</p>
        <h1 id="entry-title">妈妈，今天宇宙借来了满片星光。<br />请和我一起开启旅程。</h1>
        <p>有些话，想借星光慢慢说给你听。</p>
        <div className="code-field">
          <label htmlFor="birthday-code">我们的纪念日口令</label>
          <input id="birthday-code" inputMode="decimal" autoComplete="off" value={code} onChange={(event) => { setCode(event.target.value); setCodeError(false); }} onKeyDown={(event) => { if (event.key === "Enter") enter(); }} placeholder="••••.••" aria-describedby={codeError ? "code-error" : undefined} />
          {codeError && <span id="code-error" role="alert">再想想那个特别的日期。</span>}
        </div>
        <button className="primary-button entry-button" onClick={enter}><Play size={17} fill="currentColor" /> 开启旅程</button>
        <small className="privacy-note">只是一道充满仪式感的小门，不会记录你的输入。</small>
      </section>
    </main>
  );

  return (
    <main className={`app scene-${scene}`}>
      <CloudBackground />
      <div className="star-noise" aria-hidden="true" />
      <header className="topbar">
        <div className="brand"><span className="brand-star">✦</span><span>给妈妈的星光家书</span></div>
        <div className="top-actions">
          <button className="audio-button" onClick={toggle} aria-label={playing ? "暂停背景音乐" : "播放背景音乐"}>{playing ? <Volume2 /> : <VolumeX />}<span>{playing ? "MELANCHOLY · White Cherry" : "音乐已暂停"}</span></button>
          <button className="skip-button" onClick={() => go(3)}>直接看回忆</button>
        </div>
      </header>
      <nav className="scene-nav" aria-label="生日旅程进度">
        {scenes.map((label, index) => <button key={label} className={index === scene ? "active" : index < scene ? "passed" : ""} onClick={() => go(index)} aria-label={`前往${label}`}><span>{String(index + 1).padStart(2, "0")}</span><small>{label}</small></button>)}
      </nav>
      <div className="scene-transition" key={scene}>{sceneContent}</div>
      <div className="bottom-controls">
        <button onClick={() => go(scene - 1)} disabled={scene === 0} aria-label="上一幕"><ArrowLeft /></button>
        <span>{scene + 1} / {scenes.length}</span>
        <button onClick={() => go(scene + 1)} disabled={scene === scenes.length - 1} aria-label="下一幕"><ArrowRight /></button>
      </div>
      {activeMemory !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="回忆照片">
          <button className="lightbox-close" onClick={() => setActiveMemory(null)} aria-label="关闭照片"><X /></button>
          <button className="lightbox-arrow left" onClick={() => setActiveMemory((activeMemory - 1 + memories.length) % memories.length)} aria-label="上一张"><ChevronLeft /></button>
          <figure>
            <img src={memories[activeMemory].src} alt={memories[activeMemory].alt} />
            <figcaption><small>{memories[activeMemory].kicker}</small><p>{memories[activeMemory].story}</p></figcaption>
          </figure>
          <button className="lightbox-arrow right" onClick={() => setActiveMemory((activeMemory + 1) % memories.length)} aria-label="下一张"><ChevronRight /></button>
        </div>
      )}
    </main>
  );
}

export default App;
