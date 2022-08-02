const btn1 = document.querySelector(".btn-outline-success"); // success button
const btn2 = document.querySelector(".btn-outline-danger"); // danger button
const btn3 = document.querySelector(".btn-outline-warning"); // warning button
console.log(btn1, btn2, btn3);

const afficheur = document.querySelector(".counter");
afficheur.style.fontSize = "100px";
afficheur.style.color = "teal";
let compteur = 0;
afficheur.innerText = compteur;

btn1.addEventListener("click", function plus() {
  compteur += 1;
  afficheur.innerText = compteur;
  if (compteur >= 0) {
    afficheur.style.color = "teal";
  }
});

btn2.addEventListener("click", () => {
  compteur *= 0;
  afficheur.innerText = compteur;
  if (compteur >= 0) {
    afficheur.style.color = "teal";
  }
});

btn3.addEventListener("click", () => {
  compteur -= 1;
  console.log(compteur);
  afficheur.innerText = compteur;
  if (compteur < 0) {
    afficheur.style.color = "red";
  }
});
