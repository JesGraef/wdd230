const list = document.querySelector("#list");
const badWords = ["ass", "hell"];

function hasBadWords(text) {
  return text.split(" ").filter(word => badWords.includes(word)).length > 0;
}

function getRandomJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(data => {
      const item = document.createElement("li");
      if (hasBadWords(data.value)) {
        item.className = "bad";
        item.textContent = "Sorry this joke has a bad word."
      } else {
        item.textContent = data.value;
      }

      const deleteButton = document.createElement("button");
      deleteButton.textContent = '❌';
      deleteButton.addEventListener('click', () => item.remove());

      list.appendChild(item).appendChild(deleteButton);
    })
}

function deleteJokes() {
  list.innerHTML = "";
}