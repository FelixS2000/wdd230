const hamburgerButton = document.getElementById("hamButton");
const navigation = document.querySelector(".navigation");

hamburgerButton.addEventListener("click", function() {
  navigation.classList.toggle("responsive");
});
