//doviz.dev/v1/usd.json
let usd,
  eur,
  aud,
  gbp,
  jpy,
  chf = 0;
const currency = ["usd", "eur", "aud", "gbp", "jpy", "chf"];
const currencyObject = [
  {
    usd: "0",
    eur: "0",
    aud: "0",
    gbp: "0",
    jpy: "0",
    chf: "0"
  }
];
setInterval(() => {
  fetch("https://doviz.dev/v1/try.json")
    .then((res) => res.json())
    .then((getCurrency) => {
      currencyObject.usd = getCurrency[`USDTRY`];
      currencyObject.eur = getCurrency[`EURTRY`];
      currencyObject.aud = getCurrency[`AUDTRY`];
      currencyObject.gbp = getCurrency[`GBPTRY`];
      currencyObject.jpy = getCurrency[`JPYTRY`];
      currencyObject.chf = getCurrency[`CHFTRY`];
      //console.log(currencyObject);
    });
}, 10000);

function control(value) {
  if (value == "usd") { return 50 }
  else if (value == "eur") { return 20 }
  else if (value == "aud") { return 50 }
  else if (value == "gbp") { return currencyObject.gbp }
  else if (value == "jpy") { return currencyObject.jpy }
  else return currencyObject.chftry
}


setInterval(() => {
  fetch("https://doviz.dev/v1/try.json")
    .then((res) => res.json())
    .then((getCurrency) => {
      for (let i = 0; i < currency.length; i++) {
        document.querySelectorAll(".h4").forEach((item) => {
          item.remove();
        });
      }

      for (let i = 0; i < currency.length; i++) {
        let text = getCurrency[`${currency[i].toUpperCase()}TRY`];
        let value = currency[i];
        console.log(control(value))

        if (parseFloat(control(value)) < parseFloat(text)) {
          const tagValue = document.querySelector(`.${currency[i]}`);
          if (tagValue != null) {
            tagValue.parentElement.innerHTML = `
            <i class="bi bi-arrow-down-left text-danger fw-bolder fs-5"></i><h4 class="text-danger px-2">${Number(
              text
            ).toFixed(4)}</h4>
            `;
          }
        } else if (parseFloat(control(value)) < parseFloat(text)) {
          const tagValue = document.querySelector(`.${currency[i]}`);
          if (tagValue != null) {
            tagValue.parentElement.innerHTML = `
            <i class="bi bi-arrow-up-right text-success fw-bolder fs-5"></i><h4 class="text-success px-2">${Number(
              text
            ).toFixed(4)}</h4>
            `;
          }
        } else {
          const tagValue = document.querySelector(`.${currency[i]}`);
          if (tagValue != null) {
            tagValue.parentElement.innerHTML = `
            <i class="bi bi-arrow-left-right text-secondary fw-bolder fs-5"></i><h4 class="text-secondary px-2">${Number(
              text
            ).toFixed(4)}</h4>
            `;
          }
        }
      }
    });
}, 300);
