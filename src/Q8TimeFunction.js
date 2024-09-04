function updateTime() {
  const now = new Date();
  document.getElementById('dateTimeDisplay').innerText = now.toLocaleString();
}

setInterval(updateTime, 1000);
window.onload = updateTime;
