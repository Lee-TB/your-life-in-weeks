import { calculateNumberOfWeeks } from "./utils.js";

const numberWeeksOfAYear = 52;
const numberOfYears = 90;

function visualize(yourBirthday = Date.now()) {
  container.innerHTML = "";
  const yourNumbersOfWeek = calculateNumberOfWeeks(yourBirthday, Date.now());

  for (let i = 0; i <= numberWeeksOfAYear; i++) {
    const box = document.createElement("div");
    box.style.display = "inline-block";
    box.style.width = "8px";
    box.style.height = "8px";
    box.style.paddingBottom = "10px";
    box.style.fontSize = "10px";
    box.style.fontWeight = "bold";
    box.style.textAlign = "center";

    if (i % 5 === 0) {
      box.innerHTML = i;
    }
    container.appendChild(box);
  }

  for (let i = 0; i <= (numberWeeksOfAYear + 1) * (numberOfYears - 1); i++) {
    const box = document.createElement("div");
    box.style.display = "inline-block";
    box.style.width = "8px";
    box.style.height = "8px";

    box.style.border = "1px solid #090909";
    if (i % (numberWeeksOfAYear + 1) === 0) {
      box.style.border = "none";
      box.style.fontSize = "10px";
      box.style.fontWeight = "bold";
      box.style.textAlign = "center";
      if (Math.ceil((i + 1) / numberWeeksOfAYear) % 5 === 0)
        box.innerHTML = Math.ceil((i + 1) / numberWeeksOfAYear);
    } else if (
      i <
      yourNumbersOfWeek + Math.ceil((i + 1) / numberWeeksOfAYear)
    ) {
      box.style.backgroundColor = "#39d353";
    }

    container.appendChild(box);

    container.style.display = "grid";
    container.style.gridTemplateColumns = new Array(numberWeeksOfAYear + 1)
      .fill("10px")
      .join(" ");
    container.style.gap = "2px";
  }
}

visualize();

const birthday = document.querySelector("#birthday");
birthday.addEventListener("change", (e) => {
  if (new Date(e.target.value).getTime() > Date.now()) return;
  visualize(e.target.value);
});
