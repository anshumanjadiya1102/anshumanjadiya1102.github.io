
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>JavaBeauty-Suite</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            rust: {
              50: '#fef7f0',
              100: '#fdeee0',
              200: '#fad9bf',
              300: '#f6bd94',
              400: '#f09867',
              500: '#ea7943',
              600: '#dc5f29',
              700: '#b74920',
              800: '#923d1f',
              900: '#77331e',
            }
          }
        }
      }
    }
  </script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap');

    body {
      font-family: 'Poppins', sans-serif;
      background: black;
      color: #f3f4f6;
      overflow-x: hidden;
    }
    h1,h2,h3,.futuristic {
      font-family: 'Orbitron', sans-serif;
    }

    /* Neon Gradient Text */
    .neon-text {
      background: linear-gradient(90deg,#00f5ff,#9d4edd,#00ffcc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200% 200%;
      animation: shimmer 5s linear infinite;
    }
    @keyframes shimmer {
      0% {background-position:0% 50%;}
      100% {background-position:200% 50%;}
    }

    /* Glitch Hero */
    .glitch {
      position:relative;
      animation: glitch 2s infinite;
    }
    .glitch::before,.glitch::after {
      content:attr(data-text);
      position:absolute;
      left:0;top:0;width:100%;
    }
    .glitch::before {color:#ff00c1;animation: glitchTop 2s infinite;}
    .glitch::after {color:#00fff9;animation: glitchBottom 1.5s infinite;}

    @keyframes glitchTop {
      0% {clip-path:inset(0 0 80% 0);transform:translate(-2px,-2px);}
      50% {clip-path:inset(0 0 30% 0);transform:translate(2px,2px);}
      100% {clip-path:inset(0 0 80% 0);transform:translate(0,0);}
    }
    @keyframes glitchBottom {
      0% {clip-path:inset(80% 0 0 0);transform:translate(2px,2px);}
      50% {clip-path:inset(30% 0 0 0);transform:translate(-2px,-2px);}
      100% {clip-path:inset(80% 0 0 0);transform:translate(0,0);}
    }

    /* Futuristic Button */
    .futuristic-btn {
      background: linear-gradient(90deg,#00f5ff,#9d4edd,#00ffcc);
      background-size:300% 300%;
      animation: shimmer 6s infinite linear;
      color:#fff;
      border-radius:9999px;
      padding:.75rem 1.5rem;
      font-weight:600;
      transition:transform .3s,box-shadow .3s;
    }
    .futuristic-btn:hover {
      transform:scale(1.05);
      box-shadow:0 0 25px #00f5ff;
    }

    /* Glassmorphic Card */
    .glass-card {
      background:rgba(255,255,255,0.05);
      border:1px solid rgba(255,255,255,0.1);
      backdrop-filter:blur(15px);
      border-radius:1rem;
      padding:1.5rem;
      transition:transform .3s,box-shadow .3s;
    }
    .glass-card:hover {
      transform:perspective(600px) rotateY(5deg) scale(1.02);
      box-shadow:0 0 30px rgba(0,255,204,0.3);
    }

    /* Cookie Modal */
    .cookie-modal {
      background:rgba(20,20,30,0.95);
      border:1px solid rgba(0,255,204,0.2);
      backdrop-filter:blur(12px);
      border-radius:1rem;
      max-width:400px;
      padding:1.5rem;
      box-shadow:0 0 30px rgba(0,255,204,0.3);
    }

    /* Canvas Background */
    #spaceCanvas {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      z-index: -20;
      background: radial-gradient(ellipse at center, #05010f 0%, #000000 100%);
    }
  </style>
</head>
<body class="relative">

  <!-- Galaxy Background -->
  <canvas id="spaceCanvas"></canvas>

  <!-- Hero -->
  <section class="text-center py-20 relative z-10">
    <h1 class="text-5xl md:text-7xl glitch neon-text" data-text="JavaBeauty-Suite">JavaBeauty-Suite</h1>
    <p class="mt-6 text-lg text-gray-300">Futuristic Java-powered tools and open source projects.</p>
    <div class="mt-8 flex justify-center gap-4">
      <a href="https://github.com/anshumanjadiya1102" target="_blank" class="futuristic-btn">GitHub</a>
      <a href="https://gitlab.com/anshumanjadiya1102" target="_blank" class="futuristic-btn">GitLab</a>
      <a href="https://bitbucket.org/anshumanjadiya1102" target="_blank" class="futuristic-btn">Bitbucket</a>
    </div>
  </section>

  <!-- About + Org -->
  <section class="max-w-6xl mx-auto p-8 grid md:grid-cols-2 gap-8 relative z-10">
    <div class="glass-card">
      <h2 class="text-3xl neon-text mb-4">About Me</h2>
      <p>I’m <strong>Anshuman Jadiya</strong>, passionate about open-source projects built with Java and modern tools.
      </p>
      <ul class="list-disc list-inside mt-4 space-y-2">
        <li> - ☕Java (main language)
 - 📕HTML (side language with CSS)<img src="https://img.shields.io/badge/-HTML5-DE5934?logo=HTML5&logoColor=white&style=flat">&nbsp;
 - 🗽Python <img src="https://img.shields.io/badge/-python-437CAC?logo=python&logoColor=white&style=flat">
 - 🛠 Gitlab (side support and CI/CD)
 - 🚀 Git and Github desktop support (Version control)
 - 🏞 Bitbucket (with Jira)
 - ⚓Visual Studio Code <img src="https://img.shields.io/badge/-Visual%20Studio%20Code-25AEF4?logo=visualstudio&logoColor=white&style=flat">
 - 🎨Passion & Determination</li>
 

        <li>Upcoming: Beauty_Java_Suite</li>
        <li> <p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=anshumanjadiya1102&style=dracula" alt="anshumanjadiya1102" /></a> </p>

<p align="centre">
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.java.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> </p>

<p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=anshumanjadiya1102&show_icons=true&locale=en&layout=compact" alt="anshumanjadiya1102" /></p>

<p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=anshumanjadiya1102&show_icons=true&locale=en" alt="anshumanjadiya1102" /></p>

<p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=anshumanjadiya1102&" alt="anshumanjadiya1102" /></p> </li>
      </ul>
    </div>
    <div class="glass-card">
      <h2 class="text-3xl neon-text mb-4">My Organization</h2>
      <p>My personal open-source–first org focuses on building Java-centric tools and beginner-friendly projects.</p>
      <ul class="list-disc list-inside mt-4 space-y-2">
        <li><strong>Learning by building</strong>: games, utilities, tools</li>
        <li><strong>Community-driven</strong>: good first issues, docs</li>
        <li><strong>Cross-platform</strong>: desktop + web</li>
      </ul>
    </div>
  </section>

  <!-- Importance of Java -->
  <section class="max-w-4xl mx-auto p-8 text-center relative z-10">
    <h2 class="text-4xl neon-text mb-6">Why Java Matters 🚀</h2>
    <p class="text-lg text-gray-300">Java powers enterprise, banking, Android apps, cloud computing, and more. Its portability, stability, and scalability make it a cornerstone of modern IT.</p>
  </section>

  <!-- Footer -->
  <footer class="text-center py-6 text-gray-400 relative z-10">
    © 2025 JavaBeauty-Suite | Built by Anshuman Jadiya
  </footer>

  <!-- Cookie Modal -->
  <div id="cookieModal" class="fixed inset-0 flex items-center justify-center hidden bg-black/70 z-50">
    <div class="cookie-modal">
      <h3 class="text-xl neon-text mb-4">Cookie Preferences</h3>
      <label class="block mb-2"><input type="checkbox" checked disabled> Functional (Required)</label>
      <label class="block mb-2"><input type="checkbox" checked> Analytics</label>
      <label class="block mb-4"><input type="checkbox"> Marketing</label>
      <button onclick="acceptCookies()" class="futuristic-btn w-full">Accept</button>
    </div>
  </div>

  <!-- Background Script -->
  <script>
    const canvas = document.getElementById("spaceCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let stars = [];
    let shootingStars = [];
    let nebulas = [];

    function random(min,max){return Math.random()*(max-min)+min;}

    // Stars
    for(let i=0;i<300;i++){
      stars.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*1.5,o:Math.random()});
    }

    // Nebulas
    const nebulaColors=["hsla(280,70%,60%,0.15)","hsla(200,80%,60%,0.15)","hsla(320,70%,60%,0.15)"];
    for(let i=0;i<5;i++){
      nebulas.push({x:random(0,canvas.width),y:random(0,canvas.height),r:random(200,500),color:nebulaColors[i%nebulaColors.length],dx:random(-0.2,0.2),dy:random(-0.2,0.2)});
    }

    function drawStars(){
      ctx.fillStyle="white";
      stars.forEach(s=>{
        ctx.globalAlpha = s.o + Math.sin(Date.now()/1000 + s.x)*0.3;
        ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill();
      });
    }

    // Shooting stars
    function spawnShootingStar(){
      shootingStars.push({x:Math.random()*canvas.width,y:0,len:random(80,150),speed:random(8,15),opacity:1});
    }
    setInterval(spawnShootingStar,4000);

    function drawShootingStars(){
      for(let i=0;i<shootingStars.length;i++){
        let s=shootingStars[i];
        ctx.strokeStyle=`rgba(255,255,255,${s.opacity})`;
        ctx.lineWidth=2;
        ctx.beginPath();
        ctx.moveTo(s.x,s.y);
        ctx.lineTo(s.x-s.len,s.y+s.len);
        ctx.stroke();
        s.x+=-s.speed; s.y+=s.speed; s.opacity-=0.01;
        if(s.opacity<=0) shootingStars.splice(i,1);
      }
    }

    function drawNebulas(){
      nebulas.forEach(n=>{
        let g=ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,n.r);
        g.addColorStop(0,n.color); g.addColorStop(1,"transparent");
        ctx.fillStyle=g; ctx.beginPath(); ctx.arc(n.x,n.y,n.r,0,Math.PI*2); ctx.fill();
        n.x+=n.dx; n.y+=n.dy;
        if(n.x<-n.r) n.x=canvas.width+n.r;
        if(n.y<-n.r) n.y=canvas.height+n.r;
        if(n.x>canvas.width+n.r) n.x=-n.r;
        if(n.y>canvas.height+n.r) n.y=-n.r;
      });
    }

    function animate(){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      drawNebulas();
      drawStars();
      drawShootingStars();
      requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener("resize",()=>{
      canvas.width=window.innerWidth;
      canvas.height=window.innerHeight;
    });

    // Cookie Modal
    setTimeout(()=>{document.getElementById('cookieModal').classList.remove('hidden')},2000);
    function acceptCookies(){document.getElementById('cookieModal').classList.add('hidden');}
  </script>
</body>
</html>
