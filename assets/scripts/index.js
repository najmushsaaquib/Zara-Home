document.addEventListener("DOMContentLoaded", () => {
  const selectDrop = document.querySelector("#countries");

  fetch("https://restcountries.com/v3.1/all")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let output = "";
      data.forEach((country) => {
        output += `
        
        <option value="${country.name.common}"><i class="fa-solid fa-bag-shopping"></i>${country.name.common}</option>`;
      });

      selectDrop.innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });
});

console.log("Is it working?");

document.querySelector("#goHome").addEventListener("click", () => {
  window.location.href = "/assets/pages/zarahome.html";
});
