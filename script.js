const c = document.getElementById("c");
const x = c.getContext("2d");

c.width = innerWidth;
c.height = innerHeight;

const colors = ["red", "green", "blue", "black", "purple"];
const sizes  = [20, 30, 40, 60];                 // font sizes
const words  = ["Hello", "Canvas", "Typography", "JS", "Hi!"];

for (let i = 0; i < 20; i++) {
  const color = colors[Math.floor(Math.random() * colors.length)];
  const size  = sizes[Math.floor(Math.random() * sizes.length)];
  const word  = words[Math.floor(Math.random() * words.length)];

  x.fillStyle = color;
  x.font = size + "px Arial";                    // you can change Arial
  x.fillText(word, Math.random() * c.width, Math.random() * c.height);
}