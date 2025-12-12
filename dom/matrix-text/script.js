const para = document.querySelector("p");
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = para.innerHTML;

let iteration = 0;

function randomText() {
  const str = text
    .split("")
    .map((char, index) => {
      if (index < iteration) {
        return char;
      }

      return chars.split("")[Math.floor(Math.random() * 52)];
    })
    .join("");

  para.innerHTML = str;

  iteration += 0.5;
}

setInterval(randomText, 10);
