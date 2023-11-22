var pMenu = document.getElementById("projects-menu");
var hMenu = document.getElementById("hobbies-menu");
var selectionBar = document.getElementById("selection-bar");

function closeMenu() {
  pMenu.style.display = "none";
  hMenu.style.display = "none";
  selectionBar.style.display = "flex";
}

function openProjectsMenu() {
  selectionBar.style.display = "none";
  pMenu.style.display = "flex";
}

function openHobbiesMenu() {
  selectionBar.style.display = "none";
  hMenu.style.display = "flex";
}