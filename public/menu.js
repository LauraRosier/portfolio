function initBurgerMenu() {
  console.log("Le fichier est bien chargé!");

  const menuButton = document.getElementById("menu-button");
  const menuListing = document.querySelector(".menu-listing");

 
  menuButton.addEventListener("click", function() {
    menuListing.classList.toggle("expanded");
  });
}
initBurgerMenu();