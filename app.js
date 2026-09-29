const form = document.getElementById("proxy-form");
const urlInput = document.getElementById("game-url");
const frame = document.getElementById("game-frame");
const statusText = document.getElementById("status-text");
const demoButtons = document.querySelectorAll(".demo-btn");

function setFrame(url) {
  if (!url) return;
  frame.src = url;
  statusText.textContent = `Loading: ${url}`;
}

demoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setFrame(button.dataset.url);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = urlInput.value.trim();
  if (!value) {
    statusText.textContent = "Please enter a valid URL";
    return;
  }

  try {
    const url = new URL(value);
    setFrame(url.href);
  } catch {
    statusText.textContent = "Invalid URL. Include http:// or https://";
  }
});