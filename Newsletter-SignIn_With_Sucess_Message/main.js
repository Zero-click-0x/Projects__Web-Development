let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.querySelector("#email__address").value;
  let check = input.split("").slice(-4).join("");
  if (check === ".com") {
    let newsletter = document.querySelector(".newsletter");
    newsletter.className = "offscreen";
    let TksBox = document.querySelector(".TksMessage");
    let span = document.querySelector(".TksMessage span");
    span.style.fontWeight = "bold";
    span.innerText = input;
    TksBox.style.display = "block";
  } else {
    alert("Wrong Email");
  }
  let dismiss = document.querySelector(".dismiss");
  let TksBox = document.querySelector(".TksMessage");
  dismiss.addEventListener("click", (e) => {
    TksBox.innerHTML = "";
    TksBox.style.backgroundColor = "hsl(234, 29%, 20%)";
  });
});
