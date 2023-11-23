var pMenu = document.getElementById("projects-menu");
var hMenu = document.getElementById("hobbies-menu");
var selectionBar = document.getElementById("selection-bar");
var followDiv = document.getElementById("cursor-following");

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

window.onmousemove = (event) => {
  followDiv.style.display = "block"
  const x = event.clientX - followDiv.offsetWidth / 2 + "px";
  followDiv.style.left = x;
  const y = event.clientY - followDiv.offsetHeight / 2 + "px";
  followDiv.style.top = y;

  var cursorType =
    event.target.style.cursor || getComputedStyle(event.target).cursor;

  var isTextMode = cursorType === "text";

  console.log("cursor type: " + cursorType);

  // Log the result to the console
  console.log("Is in text mode:", isTextMode);

  var elementUnderCursor = document
    .elementFromPoint(event.clientX, event.clientY)
    .tagName.toLowerCase();

  if (
    elementUnderCursor == "p" ||
    elementUnderCursor == "li" ||
    elementUnderCursor == "ul" ||
    elementUnderCursor == "a"
  ) {
    followDiv.style.opacity = '0'
    console.log("over text")
  } else {
    followDiv.style.opacity = '1'
  }
};

window.onmouseout = (event) => {
    followDiv.style.display = "none"
    console.log("left window")
}
