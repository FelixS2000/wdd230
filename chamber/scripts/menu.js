const hamburgerButton = document.getElementById("hamButton");
const navigation = document.querySelector(".navigation");

hamburgerButton.addEventListener("click", function() {
  console.log("Clicked!");
  navigation.classList.toggle("responsive");
});
