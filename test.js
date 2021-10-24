function reverse(n) {
  return Math.abs(4 - n);
}

const submit = document.querySelector("#submit");

const select1 = parseInt(document.getElementById("1").value);
const select2 = parseInt(document.getElementById("2").value);
const select3 = parseInt(document.getElementById("3").value);
const select4 = reverse(parseInt(document.getElementById("4").value));
const select5 = reverse(parseInt(document.getElementById("5").value));
const select6 = parseInt(document.getElementById("6").value);
const select7 = reverse(parseInt(document.getElementById("7").value));
const select8 = reverse(parseInt(document.getElementById("8").value));
const select9 = parseInt(document.getElementById("9").value);
const select10 = parseInt(document.getElementById("10").value);

submit.addEventListener("click", () => {
  location.assign(
    `http://127.0.0.1:5500/result.html?score=${
      select1 +
      select2 +
      select3 +
      select4 +
      select5 +
      select6 +
      select7 +
      select8 +
      select9 +
      select10
    }`
  );
});
