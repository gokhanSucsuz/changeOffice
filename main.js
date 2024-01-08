//doviz.dev/v1/usd.json

const currency = ["usd", "eur", "aud", "gbp", "jpy", "chf"];

setInterval(() => {
  fetch("http://hasanadiguzel.com.tr/api/kurgetir")
    .then((response) => response.json())
    .then((data) => console.log(data.TCMB_AnlikKurBilgileri));

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
        if (parseFloat(currency[i].innerHTML) < parseFloat(text)) {
          const tagValue = document.querySelector(`.${currency[i]}`);
          tagValue.parentElement.innerHTML = `
            <i class="bi bi-arrow-down-left text-danger fw-bolder fs-5"></i><h4 class="text-danger px-2">${Number(
              text
            ).toFixed(4)}</h4>
            `;
        } else if (parseFloat(currency[i].innerHTML) < parseFloat(text)) {
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
}, 500);
