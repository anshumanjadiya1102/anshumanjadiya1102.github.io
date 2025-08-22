<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    body { font-family: 'Inter', sans-serif; }

    .gradient-bg {
      background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    }

    .card-hover {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .card-hover:hover {
      transform: translateY(-8px);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    }

    .rust-gradient {
      background: linear-gradient(135deg, #ea7943 0%, #dc5f29 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .tech-badge {
      backdrop-filter: blur(10px);
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .pulse-glow {
      animation: pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    @keyframes pulse-glow {
      0%, 100% {
        opacity: 1;
        text-shadow: 0 0 20px rgba(234, 121, 67, 0.4);
      }
      50% {
        opacity: 0.8;
        text-shadow: 0 0 40px rgba(234, 121, 67, 0.6);
      }
    }
  </style>
</head>
<body class="gradient-bg text-white min-h-screen flex flex-col items-center justify-center p-6">
  <!-- Hero Section -->
  <section class="w-full max-w-3xl text-center mb-12">
    <h1 class="text-5xl font-bold mb-4 pulse-glow">Hello, GitHub Souls!</h1>
    <p class="text-xl mb-4">
      I'm <span class="rust-gradient">Anshuman Jadiya</span> — a school student, Java-learner, building dreams through code.
    </p>
    <a href="https://github.com/anshumanjadiya1102" target="_blank"
       class="bg-rust-500 hover:bg-rust-600 text-white font-semibold py-3 px-8 rounded card-hover inline-block">
      Visit My GitHub
    </a>
  </section>

  <!-- About Section -->
  <section class="w-full max-w-4xl bg-gray-800 bg-opacity-50 p-8 rounded tech-badge mb-12">
    <h2 class="text-3xl font-semibold mb-4">About Me &amp; My Projects</h2>
    <ul class="list-disc list-inside space-y-2">
      <li>Current Stack: <strong>Java</strong> (main), HTML &amp; CSS, Python (growing), GitLab, GitHub Desktop, Bitbucket, VS Code.</li>
      <li>Featured Projects: 
        <ul class="list-disc list-inside ml-6">
          <li><strong>Football_Game</strong> — a Java game to explore basics.</li>
          <li><strong>Number-Guessing-Game</strong> and <strong>Hello-World</strong> — starter projects practicing GitHub Flow.</li>
        </ul>
      </li>
      <li>Launching <em>Beauty_Java_Suite</em> — a personal suite of apps in the making.</li>
      <li>Find me also on GitLab, Bitbucket, Discord, and my website at <a href="https://anshumanjadiya1102.github.io" class="text-rust-200 underline">anshumanjadiya1102.github.io</a>.</li>
    </ul>
  </section>

  <!-- Importance of Java -->
  <section class="w-full max-w-4xl p-8 bg-gray-900 bg-opacity-60 rounded mb-12">
    <h2 class="text-3xl font-semibold mb-4">Why Java Matters</h2>
    <p class="mb-4">
      Java is a foundational, object-oriented programming language known for its reliability, portability across platforms (“write once, run anywhere”), and widespread adoption in industries—from enterprise back-ends to Android, web services, and more.
    </p>
    <ul class="list-inside list-decimal space-y-2">
      <li><strong>Platform independence:</strong> Runs anywhere with a Java Virtual Machine (JVM).</li>
      <li><strong>Robust ecosystem:</strong> Rich libraries, frameworks, and thoughtful community support.</li>
      <li><strong>Strong typing & OOP:</strong> Encourages clear structure, scalability, and maintainable code.</li>
      <li><strong>Career-ready skills:</strong> Powering enterprise systems, Android apps, and widely used technologies.</li>
    </ul>
  </section>

  <!-- Call-to-Action Section -->
  <section class="w-full max-w-3xl text-center mb-12">
    <h3 class="text-2xl font-medium mb-4">Want to Explore or Collaborate?</h3>
    <a href="mailto:anshuman.jadiya03@gmail.com"
       class="bg-rust-400 hover:bg-rust-500 text-white font-semibold py-3 px-6 rounded card-hover mr-4">
      Email Me
    </a>
    <a href="https://discord.gg/JydSGaBN" target="_blank"
       class="bg-rust-400 hover:bg-rust-500 text-white font-semibold py-3 px-6 rounded card-hover">
      Join Discord
    </a>
  </section>

  <!-- Footer -->
  <footer class="mt-auto text-center text-gray-400">
    Crafted with ❤️ by Anshuman Jadiya • Always learning, always coding <br>
    &copy; <span id="year"></span> Anshuman Jadiya. All Rights Reserved.
  </footer>

  <script>
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
</body>
</html>
