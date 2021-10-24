const url = new URL(window.location.href);
const score = url.searchParams.get("score");

const scoreHtml = document.querySelector("#score");

scoreHtml.innerHTML = score;

const stressHtml = document.querySelector("#stress");

var stress = "";

if (score <= 13) {
  stress = "low";
} else if (score <= 26) {
  stress = "moderate";
} else {
  stress = "high perceived";
}

stressHtml.innerHTML = stress;
