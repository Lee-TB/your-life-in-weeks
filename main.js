import { calculateNumberOfWeeks } from "./utils.js";

const numberWeeksOfAYear = 52;
const numberOfYears = 90;

function visualize(yourBirthday = Date.now()) {
  container.innerHTML = "";
  const yourNumbersOfWeek = calculateNumberOfWeeks(yourBirthday, Date.now());
  weeks.innerHTML = yourNumbersOfWeek;

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

  for (let i = 0; i <= (numberWeeksOfAYear + 1) * numberOfYears; i++) {
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
      if (Math.floor(i / numberWeeksOfAYear) % 5 === 0)
        box.innerHTML = Math.floor(i / numberWeeksOfAYear);
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

const birthdayValue = {
  yyyy: "",
  mm: "",
  dd: "",
  toString: () => {
    if (
      birthdayValue.yyyy === "" ||
      birthdayValue.mm === "" ||
      birthdayValue.dd === ""
    )
      return "";
    return `${birthdayValue.yyyy}-${birthdayValue.mm}-${birthdayValue.dd}`;
  },
};

const month = document.querySelector("#month");
month.addEventListener("change", (e) => {
  birthdayValue.mm = e.target.value;

  if (checkDate(birthdayValue.toString())) return;
  visualize(birthdayValue.toString());
});

const day = document.querySelector("#day");
day.addEventListener("change", (e) => {
  birthdayValue.dd = e.target.value;

  if (checkDate(birthdayValue.toString())) return;
  visualize(birthdayValue.toString());
});

const year = document.querySelector("#year");
year.addEventListener("change", (e) => {
  birthdayValue.yyyy = e.target.value;

  if (checkDate(birthdayValue.toString())) return;
  visualize(birthdayValue.toString());
});

function checkDate(dateString) {
  return (
    new Date(dateString) == "Invalid Date" ||
    new Date(dateString).getTime() > Date.now()
  );
}
