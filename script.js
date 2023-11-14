let lastScroll = 0;
const defaultOffset = 830;
const header = document.querySelector(".header");

const scrollPosition = () =>
  window.scrollPosition || document.documentElement.scrollTop;

const containHide = () => header.classList.contains("hide");

window.addEventListener("scroll", () => {
  if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    console.log("down");
    header.classList.add("hide");
  } else if (scrollPosition() < lastScroll && containHide()) {
    header.classList.remove('hide')
    console.log("up");
  }

  lastScroll = scrollPosition();
});
