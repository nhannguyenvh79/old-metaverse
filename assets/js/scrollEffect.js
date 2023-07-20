const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  smartphone: {
    smooth: true,
  },
});
function scrollToTop() {
  scroll.scrollTo(0, 0);
}
////////////
const $projects = document.querySelectorAll(".project-img");
scroll.on("scroll", () => {
  $projects.forEach((el) => {
    if (
      el.getBoundingClientRect().top < window.innerHeight * 0.6 &&
      el.getBoundingClientRect().top > 0
    ) {
      el.parentNode.classList.add("active");
    } else {
      el.parentNode.classList.remove("active");
    }
  });
});

//////////////////

const $pen = document.getElementById("pen");
const $penCap = document.getElementById("pen-cap");
const $penContainer = document.getElementById("pen-container");
scroll.on("scroll", () => {
  if (
    $pen.getBoundingClientRect().top < window.innerHeight * 1.1 &&
    $penContainer.getBoundingClientRect().top > 0
  ) {
    $pen.style.transform = `translateX(${
      40 *
      ($penContainer.getBoundingClientRect().top / (window.innerHeight / 2))
    }vw)`;
    $penCap.style.transform = `translateX(${
      -40 *
      ($penContainer.getBoundingClientRect().top / (window.innerHeight / 2))
    }vw)`;
  } else {
    $pen.style.transform = `translateX(0)`;
    $penCap.style.transform = `translateX(0)`;
  }
});
