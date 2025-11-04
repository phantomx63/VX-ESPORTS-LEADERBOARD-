const contentContainer = document.getElementById("content-container");
const navLinks = document.querySelectorAll(".nav-link");

// Page content
const pages = {
  home: `
    <section id="home">
      <h2>Welcome to VX ESPORT</h2>
      <p>We are VX ESPORT — dominating every Free Fire match with strategy and power!</p>
      <img src="https://cdn.pixabay.com/photo/2018/03/22/00/38/gaming-3245653_960_720.jpg" alt="Gaming" style="max-width:80%;border-radius:10px;margin-top:20px;">
    </section>
  `,

  team: `
    <section id="team">
      <h2>Our Team</h2>
      <div class="team-container">
        <div class="team-card">
          <img src="https://i.imgur.com/n3yR4O2.jpg" alt="Player">
          <h3>VX AIMBOT</h3>
          <p>Sniper</p>
        </div>
        <div class="team-card">
          <img src="https://i.imgur.com/4J6sQfA.jpg" alt="Player">
          <h3>VX VANSH</h3>
          <p>Secondary Rusher</p>
        </div>
        <div class="team-card">
          <img src="https://i.imgur.com/gU2jZ2E.jpg" alt="Player">
          <h3>VX PREM</h3>
          <p>Primary Rusher</p>
        </div>
      </div>
    </section>
  `,

  stats: `
    <section id="stats">
      <h2>Team Stats</h2>
      <p>Booyah Count: <strong>57</strong></p>
      <p>Average KD Ratio: <strong>3.8</strong></p>
      <p>Total Matches Played: <strong>122</strong></p>
    </section>
  `,

  leaderboard: `
    <section id="leaderboard">
      <h2>Leaderboard</h2>
      <p>Check out our latest match performance and wins!</p>
      <p><a href="https://docs.google.com/spreadsheets/d/1H8NH8WWSQRAoCXm0HtOJeXCEiixZjrw0cotjpOkfeBg/edit?usp=drivesdk" target="_blank" style="color:#ffd700;">View Live Leaderboard</a></p>
    </section>
  `,

  contact: `
    <section id="contact">
      <h2>Contact Us</h2>
      <p>📧 Email: gamingvx02@gmail.com</p>
      <p>🎮 Discord: <a href="https://discord.gg/vx-gaming-1106815061747585036" target="_blank">Join Server</a></p>
      <p>▶ YouTube: <a href="https://youtube.com/@vxgaming_" target="_blank">@vxgaming_</a></p>
    </section>
  `
};

// Navigation logic
function loadPage(page) {
  contentContainer.innerHTML = pages[page];
  navLinks.forEach(link => link.classList.remove("active"));
  document.querySelector(`[data-page="${page}"]`).classList.add("active");
}

// Load Home by default
loadPage("home");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const page = link.getAttribute("data-page");
    loadPage(page);
  });
});