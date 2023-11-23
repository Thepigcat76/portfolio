var pMenu = document.getElementById("projects-menu");
var hMenu = document.getElementById("hobbies-menu");
var selectionBar = document.getElementById("selection-bar");
var followDiv = document.getElementById('cursor-following');

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

document.addEventListener('mousemove', function(event) {
  followDiv.style.display = "block"
  followDiv.style.left = (event.clientX - followDiv.offsetWidth / 2) + 'px';
  followDiv.style.top = (event.clientY - followDiv.offsetHeight / 2) + 'px';
})