<!DOCTYPE html>
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

    /* Starfield Background */
    #stars,#stars2,#stars3 {
      position:fixed;width:100%;height:100%;display:block;top:0;left:0;z-index:-10;
    }
    #stars {background:transparent url('https://www.script-tutorials.com/demos/360/images/stars.png') repeat top center;animation:moveStars 200s linear infinite;}
    #stars2{background:transparent url('https://www.script-tutorials.com/demos/360/images/stars2.png') repeat top center;animation:moveStars 400s linear infinite;}
    #stars3{background:transparent url('https://www.script-tutorials.com/demos/360/images/stars3.png') repeat top center;animation:moveStars 600s linear infinite;}
    @keyframes moveStars {from{background-position:0 0;}to{background-position:0 -10000px;}}

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
  </style>
</head>
<body class="relative">
  <div id="stars"></div><div id="stars2"></div><div id="stars3"></div>

  <!-- Hero -->
  <section class="text-center py-20">
    <h1 class="text-5xl md:text-7xl glitch neon-text" data-text="JavaBeauty-Suite">JavaBeauty-Suite</h1>
    <p class="mt-6 text-lg text-gray-300">Futuristic Java-powered tools and open source projects.</p>
    <div class="mt-8 flex justify-center gap-4">
      <a href="https://github.com/anshumanjadiya1102" target="_blank" class="futuristic-btn">GitHub</a>
      <a href="https://gitlab.com/anshumanjadiya1102" target="_blank" class="futuristic-btn">GitLab</a>
      <a href="https://bitbucket.org/anshumanjadiya1102" target="_blank" class="futuristic-btn">Bitbucket</a>
    </div>
  </section>

  <!-- About + Org -->
  <section class="max-w-6xl mx-auto p-8 grid md:grid-cols-2 gap-8">
    <div class="glass-card">
      <h2 class="text-3xl neon-text mb-4">About Me</h2>
      <p>I’m <strong>Anshuman Jadiya</strong>, passionate about open-source projects built with Java and modern tools.</p>
      <ul class="list-disc list-inside mt-4 space-y-2">
        <li>Stack: Java, Python, HTML/CSS, GitHub, GitLab, Bitbucket</li>
        <li>Projects: Football_Game, Number-Guessing-Game, Hello-World</li>
        <li>Upcoming: Beauty_Java_Suite</li>
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
  <section class="max-w-4xl mx-auto p-8 text-center">
    <h2 class="text-4xl neon-text mb-6">Why Java Matters 🚀</h2>
    <p class="text-lg text-gray-300">Java powers enterprise, banking, Android apps, cloud computing, and more. Its portability, stability, and scalability make it a cornerstone of modern IT.</p>
  </section>

  <!-- Footer -->
  <footer class="text-center py-6 text-gray-400">
    © 2025 JavaBeauty-Suite | Built by Anshuman Jadiya
  </footer>

  <!-- Cookie Modal -->
  <div id="cookieModal" class="fixed inset-0 flex items-center justify-center hidden bg-black/70">
    <div class="cookie-modal">
      <h3 class="text-xl neon-text mb-4">Cookie Preferences</h3>
      <label class="block mb-2"><input type="checkbox" checked disabled> Functional (Required)</label>
      <label class="block mb-2"><input type="checkbox" checked> Analytics</label>
      <label class="block mb-4"><input type="checkbox"> Marketing</label>
      <button onclick="acceptCookies()" class="futuristic-btn w-full">Accept</button>
    </div>
  </div>

  <script>
    setTimeout(()=>{document.getElementById('cookieModal').classList.remove('hidden')},2000);
    function acceptCookies(){document.getElementById('cookieModal').classList.add('hidden');}
  </script>
</body>
</html>

