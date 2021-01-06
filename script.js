const leftSide = document.querySelector(".left");
const rightSide = document.querySelector(".right");
const containerOfBothSides = document.querySelector(".container");

let addClass = (className) => containerOfBothSides.classList.add(className);
let removeClass = (className) =>
  containerOfBothSides.classList.remove(className);
// }
leftSide.addEventListener("mouseenter", () => addClass("hover-left"));
leftSide.addEventListener("mouseleave", () => removeClass("hover-left"));
rightSide.addEventListener("mouseenter", () => addClass("hover-right"));
rightSide.addEventListener("mouseleave", () => removeClass("hover-right"));
