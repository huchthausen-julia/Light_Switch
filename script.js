const tglBtn = document.getElementById("toggle-button");

tglBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-off");
  document.body.classList.toggle("light-on");
  document.body.style.backgroundColor = document.body.classList.contains(
    "light-off"
  )
    ? "black"
    : "snow";

  document.title = document.body.classList.contains("light-off")
    ? "Good Night"
    : "Good Morning";
});
