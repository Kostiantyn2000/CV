"use strict";
const list = document.querySelector(".slider__list");
const prev = document.querySelector(".arrow__prev");
const next = document.querySelector(".arrow__next");

let offset = 0;
function sliderShowPrev() {
  offset -= 250;
  if (offset < 0) {
    offset = 1000;
  }
  list.style.left = -offset + "px";
}

function sliderShowNext() {
  offset += 250;
  if (offset > 1000) {
    offset = 0;
  }
  list.style.left = -offset + "px";
}

prev.addEventListener("click", sliderShowPrev);
next.addEventListener("click", sliderShowNext);
