const gallery = document.getElementById("emoji-gallery");
const emojis = [
  128512, // 😀
  128525, // 😍
  128293, // 🔥
  128640, // 🚀
  127919, // 🎯
  128187, // 💻
  127891, // 🎓
  127758, // 🌎
  128176, // 💰
  128128, // 💀
  128170, // 💪
  128081  // 👑
];
emojis.forEach(code => {
  const card = document.createElement("div");
  card.classList.add("emoji-card");

  const emoji = document.createElement("span");
  emoji.classList.add("emoji");
  emoji.innerHTML = `&#${code};`;
  const label = document.createElement("code");
  label.textContent = code;

  card.appendChild(emoji);
  card.appendChild(label);
  gallery.appendChild(card);
});