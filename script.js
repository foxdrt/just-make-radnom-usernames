const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  "_",
];
let usernames = [];
const submitBtn = document.getElementById("submit");
let userQuantity, lettersLimt;
const randomLetter = (array) => {
  const randomIndex = Math.trunc(Math.random() * array.length);
  return alphabet[randomIndex];
};
let Str = "";
submitBtn.addEventListener("click", () => {
  userQuantity = document.getElementById("Quantity").value;
  lettersLimt = document.getElementById("lettersLimt").value;
  for (let i = 0; i < userQuantity; i++) {
    for (let i = 0; i < lettersLimt; i++) {
      let Letter = randomLetter(alphabet);
      Str += Letter;
    }
    usernames.push(Str);
    Str = "";
  }
  console.log(usernames);
  usernames = [];
});
