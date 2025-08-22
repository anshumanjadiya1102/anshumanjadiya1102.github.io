<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaBeauty-Suite</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    body { font-family: 'Inter', sans-serif; overflow-x: hidden; }

    /* Cosmic Galaxy Background */
    body::before {
      content: '';
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background: #0f172a;
      z-index: -3;
    }

    canvas#stars {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      z-index: -2;
    }

    canvas#nebulas {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      z-index: -1;
    }

    .glass-card {
      backdrop-filter: blur(12px);
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 1rem;
      box-shadow: 0 0 20px rgba(255,255,255,0.1);
    }

    .pulse-glow {
      animation: pulse-glow 2s infinite;
    }
    @keyframes pulse-glow {
      0%,100% { text-shadow: 0 0 20px #a855f7, 0 0 40px #9333ea; }
      50% { text-shadow: 0 0 40px #ec4899, 0 0 80px #f472b6; }
    }

    /* Cookie Modal */
    .modal {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 50;
      transition: opacity 0.3s ease;
    }
    .modal.hidden { display: none; }
  </style>
</head>
<body class="text-white min-h-screen flex flex-col items-center justify-center p-6">
  <canvas id="stars"></canvas>
  <canvas id="nebulas"></canvas>

  <!-- Hero Section -->
  <section class="w-full max-w-3xl text-center mb-12">
    <h1 class="text-5xl font-bold mb-4 pulse-glow">Hello, Cosmic Coders!</h1>
    <p class="text-xl mb-4">
      I'm <span class="text-purple-400">Anshuman Jadiya</span> — a school student, Java-learner, building dreams through code.
    </p>
    <a href="https://github.com/anshumanjadiya1102" target="_blank"
       class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      Visit My GitHub
    </a>
  </section>

  <!-- About Section -->
  <section class="w-full max-w-4xl glass-card p-8 mb-12">
    <h2 class="text-3xl font-semibold mb-4">About Me &amp; My Projects</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>Stack: <strong>Java</strong>, HTML &amp; CSS, Python, GitHub, GitLab, Bitbucket, VS Code.</li>
      <li>Projects: Football_Game, Number-Guessing-Game, Hello-World.</li>
      <li>Upcoming: <em>Beauty_Java_Suite</em>.</li>
      <li>Website: <a href="https://anshumanjadiya1102.github.io" class="text-purple-300 underline">anshumanjadiya1102.github.io</a>.</li>
    </ul>
  </section>

  <!-- Importance of Java -->
  <section class="w-full max-w-4xl glass-card p-8 mb-12">
    <h2 class="text-3xl font-semibold mb-4">Why Java Matters</h2>
    <p class="mb-4">
      Java powers enterprise systems, Android, web apps, and more. It’s portable, reliable, and career-relevant.
    </p>
    <ul class="list-inside list-decimal space-y-2">
      <li>Platform Independent</li>
      <li>Rich Ecosystem</li>
      <li>OOP &amp; Scalability</li>
      <li>High Industry Demand</li>
    </ul>
  </section>

  <!-- Footer -->
  <footer class="mt-auto text-center text-gray-400">
    Crafted with ❤️ under the stars by Anshuman Jadiya<br>
    &copy; <span id="year"></span> Anshuman Jadiya. All Rights Reserved.
  </footer>

  <!-- Cookie Modal -->
  <div id="cookieModal" class="modal">
    <div class="glass-card p-8 w-96">
      <h3 class="text-2xl font-bold mb-4">Manage Cookie Preferences</h3>
      <p class="mb-4">We use cookies to improve your experience. Adjust your preferences below:</p>
      <div class="space-y-2 mb-6">
        <label class="flex items-center"><input type="checkbox" checked disabled class="mr-2">Essential (Always Enabled)</label>
        <label class="flex items-center"><input id="functionalCookies" type="checkbox" class="mr-2">Functional</label>
        <label class="flex items-center"><input id="analyticsCookies" type="checkbox" class="mr-2">Analytics</label>
        <label class="flex items-center"><input id="marketingCookies" type="checkbox" class="mr-2">Marketing</label>
      </div>
      <div class="flex justify-between">
        <button id="rejectAll" class="bg-red-500 hover:bg-red-600 px-4 py-2 rounded">Reject All</button>
        <button id="savePrefs" class="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded">Save Preferences</button>
        <button id="acceptAll" class="bg-green-500 hover:bg-green-600 px-4 py-2 rounded">Accept All</button>
      </div>
    </div>
  </div>

  <script>
    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Starfield Animation with Shooting Stars
    const canvas = document.getElementById('stars');
    const ctx = canvas.getContext('2d');
    let stars = [], shootingStars = [];
    function resize(){ canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
    window.addEventListener('resize', resize); resize();
    for(let i=0;i<250;i++){
      stars.push({x:Math.random()*canvas.width, y:Math.random()*canvas.height, r:Math.random()*1.5, d:Math.random()*1});
    }
    function drawStars(){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle = 'white';
      for(let s of stars){ ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,2*Math.PI); ctx.fill(); }
      updateStars();
      drawShootingStars();
      requestAnimationFrame(drawStars);
    }
    function updateStars(){
      for(let s of stars){ s.y += s.d; if(s.y > canvas.height){ s.y = 0; s.x = Math.random()*canvas.width; }}
      if(Math.random()<0.01){ shootingStars.push({x:Math.random()*canvas.width,y:0,len:300,speed:8,opacity:1}); }
    }
    function drawShootingStars(){
      for(let i=0;i<shootingStars.length;i++){
        let sh=shootingStars[i];
        ctx.strokeStyle=`rgba(255,255,255,${sh.opacity})`;
        ctx.lineWidth=2;
        ctx.beginPath();
        ctx.moveTo(sh.x,sh.y);
        ctx.lineTo(sh.x-sh.len,sh.y+sh.len/2);
        ctx.stroke();
        sh.x+=sh.speed; sh.y+=sh.speed/2; sh.opacity-=0.01;
        if(sh.opacity<=0) shootingStars.splice(i,1);
      }
    }
    drawStars();

    // Nebula Animation
    const nebulaCanvas = document.getElementById('nebulas');
    const nctx = nebulaCanvas.getContext('2d');
    function resizeNebula(){ nebulaCanvas.width = window.innerWidth; nebulaCanvas.height = window.innerHeight; }
    window.addEventListener('resize', resizeNebula); resizeNebula();

    let nebulas = [];
    for(let i=0;i<5;i++){
      nebulas.push({x:Math.random()*nebulaCanvas.width,y:Math.random()*nebulaCanvas.height,r:200+Math.random()*200,color:`hsla(${Math.random()*360},70%,60%,0.15)`,dx:(Math.random()-0.5)*0.5,dy:(Math.random()-0.5)*0.5});
    }
    function drawNebulas(){
      nctx.clearRect(0,0,nebulaCanvas.width,nebulaCanvas.height);
      for(let n of nebulas){
        let gradient = nctx.createRadialGradient(n.x,n.y,0,n.x,n.y,n.r);
        gradient.addColorStop(0,n.color);
        gradient.addColorStop(1,'transparent');
        nctx.fillStyle=gradient;
        nctx.beginPath();
        nctx.arc(n.x,n.y,n.r,0,Math.PI*2);
        nctx.fill();
        n.x+=n.dx; n.y+=n.dy;
        if(n.x<0||n.x>nebulaCanvas.width) n.dx*=-1;
        if(n.y<0||n.y>nebulaCanvas.height) n.dy*=-1;
      }
      requestAnimationFrame(drawNebulas);
    }
    drawNebulas();

    // Cookie Modal Logic
    const modal = document.getElementById('cookieModal');
    if(!localStorage.getItem('cookiePrefs')) modal.classList.remove('hidden');

    document.getElementById('acceptAll').onclick = ()=>{
      localStorage.setItem('cookiePrefs', JSON.stringify({functional:true,analytics:true,marketing:true}));
      modal.classList.add('hidden');
    };
    document.getElementById('rejectAll').onclick = ()=>{
      localStorage.setItem('cookiePrefs', JSON.stringify({functional:false,analytics:false,marketing:false}));
      modal.classList.add('hidden');
    };
    document.getElementById('savePrefs').onclick = ()=>{
      let prefs = {
        functional: document.getElementById('functionalCookies').checked,
        analytics: document.getElementById('analyticsCookies').checked,
        marketing: document.getElementById('marketingCookies').checked
      };
      localStorage.setItem('cookiePrefs', JSON.stringify(prefs));
      modal.classList.add('hidden');
    };
  </script>
</body>
</html>
