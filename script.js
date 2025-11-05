document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const role = document.getElementById("roleSelect").value;
  if (role === "admin") window.location.href = "admin.html";
  else if (role === "igl") window.location.href = "igl.html";
  else window.location.href = "player.html";
});