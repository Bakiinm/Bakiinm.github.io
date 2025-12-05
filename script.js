// Passwords
const mainPassword = "1234";
const lockPassword = "5678";

/* Load navbar into placeholder */
window.onload = () => {
  const nav = document.getElementById("nav-placeholder");
  if (nav) {
    fetch("navbar.html")
      .then(res => res.text())
      .then(html => nav.innerHTML = html);
  }
};

/* MAIN PASSWORD on index */
function enterSite() {
  const pass = document.getElementById("mainPass").value;
  const err = document.getElementById("mainError");

  if (pass === mainPassword) {
    document.getElementById("password-gate").style.display = "none";
    document.getElementById("content").style.display = "block";
  } else {
    err.textContent = "Incorrect password";
  }
}

/* SECRET PASSWORD */
function unlockSecret() {
  const pass = prompt("Enter secret password:");
  const err = document.getElementById("lockError");

  if (pass === lockPassword) {
    document.getElementById("unlockBtn").innerHTML = "🔓 Unlocked!";
    document.getElementById("unlockBtn").disabled = true;
  } else {
    err.textContent = "Wrong password.";
  }
}
// Video control functions
function playVideo() {
  const video = document.getElementById("loveVideo");
  video.play();
}

function pauseVideo() {
  const video = document.getElementById("loveVideo");
  video.pause();
}
