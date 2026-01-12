function login() {
  const key = document.getElementById("key").value;
  const status = document.getElementById("status");

  if (key === "KEY123") {
    status.innerText = "Authenticating...";
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  } else {
    status.innerText = "Invalid Access Key ❌";
  }
}

function logout() {
  window.location.href = "index.html";
}

setInterval(() => {
  const t = new Date();
  const timeEl = document.getElementById("time");
  const periodEl = document.getElementById("period");

  if (timeEl && periodEl) {
    timeEl.innerText = t.toLocaleTimeString();
    periodEl.innerText = Math.floor(Math.random() * 100000);
  }
}, 1000);
