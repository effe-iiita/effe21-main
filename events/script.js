const listItems = document.querySelectorAll(".events__list__item");
const cards = document.querySelectorAll(".events__card");
const headingSpan = document.querySelector(
  ".events__hero__detail__heading span"
);
const headingMain = document.querySelector(".events__hero__detail__heading h1");
const bodyPara = document.querySelector(".events__hero__detail__body p");
const imageOverlay = document.querySelector(".events__hero__image__overlay");

for (const listItem of listItems) {
  listItem.addEventListener("click", () => {
    listItem.classList.add("active");

    for (const item of listItems) {
      if (item !== listItem) {
        item.classList.remove("active");
      }
    }

    cards.forEach((card) => card.classList.add("animate"));

    for (const card of cards) {
      if (card.dataset.society !== listItem.innerHTML) {
        card.classList.add("none");
      } else {
        card.classList.remove("none");
      }
      if (listItem.innerHTML === "All") {
        card.classList.remove("none");
      }
    }
  });
}

const tl = gsap.timeline();

tl.from(headingSpan, {
  y: 100,
  opacity: -1,
  duration: 1,
})
  .from(
    headingMain,
    {
      y: 100,
      opacity: -1,
      duration: 1,
    },
    "-=0.8"
  )
  .from(
    bodyPara,
    {
      x: 100,
      opacity: -1,
      duration: 1,
    },
    "-=0.8"
  )
  .to(
    imageOverlay,
    {
      scaleX: 0,
    },
    "-=1"
  );

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".events__list",
    start: "top 80% ",
    toggleActions: "play pause resume reset",
  },
});

tl2
  .from(".events__list__item", {
    opacity: 0,
    y: 40,
    ease: "back.out(1.4)",
  })
  .from(
    ".events__card",
    {
      opacity: 0,
      y: 100,
      scale: 0,
    },
    "-=0.8"
  );
