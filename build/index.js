const userInputAmount = document.querySelector(".amount"),
  fromCur = document.querySelector(".fromCurrency"),
  toCur = document.querySelector(".toCurrency"),
  exchangeBtn = document.querySelector(".exchange"),
  exchangeRateTxt = document.querySelector(".exchangeRateTxt"),
  exchangeRateBtn = document.querySelector(".exchange-rate"),
  imgTag = document.querySelector("img");

[fromCur, toCur].forEach((item) => {
  let count = 0;
  for (let x in Country_List) {
    item.insertAdjacentHTML(
      "beforeend",
      `<option value="${Object.keys(Country_List)[count]}">
      ${Object.keys(Country_List)[count]}
      </option>`
    );
    count++;
  }
});

const getExchangeRate = async () => {
  if (!userInputAmount.value || userInputAmount.value <= 0) {
    exchangeRateTxt.innerHTML = "Enter a valid term...";
    return;
  }

  const response = await fetch(
    `https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/${fromCur.value}`
  );

  const result = await response.json();
  exchangeRateTxt.innerHTML = `
  ${userInputAmount.value} ${fromCur.value} = ${(
    result.conversion_rates[toCur.value] * userInputAmount.value
  ).toFixed(2)} ${toCur.value}
  `;
};

const exchangeCur = () => {
  [fromCur.value, toCur.value] = [toCur.value, fromCur.value];
  getExchangeRate();
};

exchangeRateBtn.addEventListener("click", getExchangeRate);
exchangeBtn.addEventListener("click", exchangeCur);
