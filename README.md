
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>JavaBeauty-Suite</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=Poppins:wght@300;400;600&display=swap');

    :root { --neon1:#00f5ff; --neon2:#9d4edd; --neon3:#00ffcc; }

    body {
      font-family: 'Poppins', sans-serif;
      background: #000;
      color: #e5e7eb;
      overflow-x: hidden;
    }
    h1,h2 { font-family: 'Orbitron', sans-serif; }

    /* Neon gradient text */
    .neon-text{
      background: linear-gradient(90deg,var(--neon1),var(--neon2),var(--neon3));
      -webkit-background-clip:text; -webkit-text-fill-color:transparent;
      background-size:200% 200%; animation: shimmer 6s linear infinite;
    }
    @keyframes shimmer{0%{background-position:0% 50%}100%{background-position:200% 50%}}

    /* Glass cards (wide, low height) */
    .glass{
      background: rgba(255,255,255,.06);
      border: 1px solid rgba(255,255,255,.12);
      backdrop-filter: blur(12px);
      border-radius: 14px;
      transition: transform .25s ease, box-shadow .25s ease;
    }
    .glass:hover{ transform: translateY(-3px); box-shadow: 0 0 24px rgba(0,255,204,.25); }

    /* Buttons */
    .fx-btn{
      background: linear-gradient(90deg,var(--neon1),var(--neon2),var(--neon3));
      background-size:300% 300%; animation: shimmer 8s linear infinite;
      border-radius: 9999px; padding: .6rem 1.1rem; font-weight:600; color:#fff;
      transition: transform .2s, box-shadow .2s;
    }
    .fx-btn:hover{ transform: scale(1.04); box-shadow: 0 0 18px var(--neon1); }

    /* Space canvas */
    #space{ position: fixed; inset: 0; width:100%; height:100%; z-index:-1;
      background: radial-gradient(ellipse at 50% 60%, #0a0120 0%, #000 60%); }

    /* Layout tweaks: wide, shallow */
    .wrap{ max-width: 1200px; margin: 0 auto; }
    .row{ display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: 16px; }
    @media (max-width: 980px){ .row{ grid-template-columns: 1fr; } }

    /* Compiler area */
    .compiler { height: 520px; border: 0; width: 100%; border-radius: 12px; }
    .compiler-wrap{ position:relative; }
    .fallback { display:none; }
    .compiler-wrap.error .fallback{ display:block; }
    .compiler-wrap.error iframe{ display:none; }
  </style>
</head>
<body>
  <!-- Space background -->
  <canvas id="space"></canvas>

  <!-- Top: short hero, wide row -->
  <header class="wrap px-4 pt-8 pb-2">
    <div class="row items-stretch">
      <div class="glass p-5 flex flex-col justify-center">
        <h1 class="text-4xl md:text-5xl neon-text leading-tight">JavaBeauty-Suite</h1>
        <p class="mt-2 text-sm md:text-base text-gray-300">
          Futuristic, Java-centric projects — short page, wide layout.
        </p>
        <div class="mt-4 flex flex-wrap gap-2">
          <a class="fx-btn" target="_blank" href="https://github.com/anshumanjadiya1102">GitHub</a>
          <a class="fx-btn" target="_blank" href="https://gitlab.com/anshumanjadiya1102">GitLab</a>
          <a class="fx-btn" target="_blank" href="https://bitbucket.org/anshumanjadiya1102/">Bitbucket</a>
        </div>
      </div>

      <div class="glass p-5">
        <h2 class="text-2xl neon-text mb-2">About</h2>
        <ul class="text-sm space-y-1">
          <li>Stack:☕Java  
 📕HTML ( with CSS)<img src="https://img.shields.io/badge/-HTML5-DE5934?logo=HTML5&logoColor=white&style=flat">&nbsp;
<img src="https://img.shields.io/badge/-CSS3-2275B2?logo=CSS3&logoColor=white&style=flat"> &nbsp;
 🗽Python <img src="https://img.shields.io/badge/-python-437CAC?logo=python&logoColor=white&style=flat">
 🛠 Gitlab 
 🚀 Git and Github desktop support  
 🏞 Bitbucket 
⚓Visual Studio Code <img src="https://img.shields.io/badge/-Visual%20Studio%20Code-25AEF4?logo=visualstudio&logoColor=white&style=flat">
🎨Passion & Determination</li>
          <li>Projects: Football_Game, Number-Guessing-Game</li>
          <li>Upcoming: Beauty_Java_Suite</li>
        </ul>
      </div>

      <div class="glass p-5">
        <h2 class="text-2xl neon-text mb-2">Why Java</h2>
        <ul class="text-sm space-y-1">
          <li>Portable (JVM, “write once run anywhere”)</li>
          <li>Massive ecosystem & tooling</li>
          <li>Great for Android, backend, cloud</li>
        </ul>
      </div>
    </div>
  </header>

  <!-- Java Compiler (short block, wide) -->
  <section class="wrap px-4 py-4">
    <div class="glass p-4">
      <div class="flex items-center justify-between mb-3">
        <h2 class="text-2xl neon-text">Java Compiler</h2>
        <button class="fx-btn" onclick="openFallbackIDE()">Open Full IDE</button>
      </div>

      <!-- Embed (with graceful fallback if blocked by X-Frame-Options) -->
      <div id="compilerBox" class="compiler-wrap">
        <!-- JDoodle public Java IDE (may block embedding on some networks; fallback provided) -->
        <iframe id="javaIframe" class="compiler"
          src="https://www.jdoodle.com/online-java-compiler/"></iframe>

        <!-- Fallback panel -->
        <div class="fallback text-center">
          <p class="text-gray-300 mb-3">Embedded compiler is blocked by the browser. Use the button below:</p>
          <a class="fx-btn" target="_blank" href="https://www.jdoodle.com/online-java-compiler/">
            Open Java Compiler
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer (single line, compact) -->
  <footer class="wrap px-4 py-4 text-xs text-gray-400 flex justify-between items-center">
    <span>© <span id="yr"></span> JavaBeauty-Suite • Anshuman Jadiya</span>
    <a class="underline decoration-dotted" target="_blank" href="https://anshumanjadiya1102.github.io">Portfolio</a>
  </footer>

  <!-- Space FX + compiler fallback -->
  <script>
    // Year
    document.getElementById('yr').textContent = new Date().getFullYear();

    // --- Space background (twinkling stars + nebulas + shooting stars) ---
    const c = document.getElementById('space'), x = c.getContext('2d');
    function fit(){ c.width = innerWidth; c.height = innerHeight; }
    addEventListener('resize', fit); fit();

    const rand=(a,b)=>Math.random()*(b-a)+a;
    const stars = Array.from({length:260},()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*1.4,o:Math.random()}));
    const nebulas=[]; const palette=['hsla(280,70%,60%,0.14)','hsla(200,80%,60%,0.12)','hsla(320,70%,60%,0.12)'];
    for(let i=0;i<4;i++) nebulas.push({x:rand(0,c.width),y:rand(0,c.height),r:rand(240,420),dx:rand(-0.15,0.15),dy:rand(-0.15,0.15),color:palette[i%palette.length]});
    const trails=[];

    function spawnTrail(){ trails.push({x:Math.random()*c.width,y:0,len:rand(80,140),v:rand(8,13),a:1}); }
    setInterval(spawnTrail, 4200);

    function draw(){
      x.clearRect(0,0,c.width,c.height);

      // Nebulas
      nebulas.forEach(n=>{
        const g=x.createRadialGradient(n.x,n.y,0,n.x,n.y,n.r);
        g.addColorStop(0,n.color); g.addColorStop(1,'transparent');
        x.fillStyle=g; x.beginPath(); x.arc(n.x,n.y,n.r,0,Math.PI*2); x.fill();
        n.x+=n.dx; n.y+=n.dy;
        if(n.x<-n.r) n.x=c.width+n.r; if(n.y<-n.r) n.y=c.height+n.r;
        if(n.x>c.width+n.r) n.x=-n.r; if(n.y>c.height+n.r) n.y=-n.r;
      });

      // Stars (twinkle)
      x.fillStyle='#fff';
      const t=Date.now()/1000;
      stars.forEach(s=>{ x.globalAlpha=s.o + Math.sin(t + s.x*0.01)*0.25; x.beginPath(); x.arc(s.x,s.y,s.r,0,6.283); x.fill(); });

      // Shooting stars
      x.globalAlpha=1;
      for(let i=trails.length-1;i>=0;i--){
        const s=trails[i];
        x.strokeStyle=`rgba(255,255,255,${s.a})`; x.lineWidth=2;
        x.beginPath(); x.moveTo(s.x,s.y); x.lineTo(s.x-s.len, s.y+s.len); x.stroke();
        s.x-=s.v; s.y+=s.v; s.a-=0.01; if(s.a<=0) trails.splice(i,1);
      }

      requestAnimationFrame(draw);
    }
    draw();

    // --- Compiler fallback detection ---
    // If the iframe can't load (blocked), swap to fallback UI.
    const iframe = document.getElementById('javaIframe');
    const box = document.getElementById('compilerBox');
    let loaded = false;
    iframe.addEventListener('load', ()=>{ loaded = true; });
    setTimeout(()=>{ if(!loaded) box.classList.add('error'); }, 4000);

    function openFallbackIDE(){
      window.open('https://www.jdoodle.com/online-java-compiler/', '_blank');
    }
  </script>
</body>
</html>
