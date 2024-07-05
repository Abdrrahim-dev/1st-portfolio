let links = document.querySelectorAll("nav a");
links.forEach((link) => {
  link.onclick = () => {
    links.forEach((e) => {
      e.classList.remove("active");
    });
    link.classList.add("active");
  };
});
//
//
let imagesButtons = document.querySelectorAll(".images button");
//
imagesButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let imageDiv = document.createElement("div");
    imageDiv.className = "full-image";
    let src = button.parentElement.parentElement
      .querySelector("img")
      .getAttribute("src");
    let image = document.createElement("img");
    image.setAttribute("src", src);
    imageDiv.appendChild(image);
    let exit = document.createElement("i");
    exit.className = `fa-solid fa-xmark`;
    imageDiv.appendChild(exit);
    document.body.appendChild(imageDiv);
    exit.onclick = () => {
      imageDiv.remove();
    };
  });
});
//
//
let filter = document.querySelector("button.filter");
filter.onclick = () => {
  document.querySelector(".filter .list").classList.toggle("active");
};
//
let filterList = document.querySelectorAll(".filter .list li");
let filterCards = document.querySelectorAll(".portfolio .card");
filterList.forEach((ele) => {
  ele.onclick = () => {
    filterList.forEach((element) => {
      element.style.cssText = `background-color: transparent; padding-left: 15px;`;
    });
    ele.style.cssText = `background-color: var(--second-clr); padding-left: 25px;`;
    let className = ele.className;
    filterCards.forEach((element) => {
      if (!element.classList.contains(className)) {
        element.style.display = `none`;
      } else {
        element.style.display = `block`;
      }
      if (className === "") {
        filterCards.forEach((el) => {
          el.style.display = `block`;
        });
      }
    });
  };
});
//
//
let bars = document.querySelector(".bars i");
bars.addEventListener("click", () => {
  bars.classList.toggle("fa-bars");
  bars.classList.toggle("fa-xmark");
  if (bars.classList.contains("fa-xmark")) {
    document.querySelector("nav").classList.add("active");
  } else {
    document.querySelector("nav").classList.remove("active");
  }
});
//
//
//
let portfolioCards = document.querySelectorAll(".portfolio .card");
let count = 0;
portfolioCards.forEach((e) => {
  e.classList.add("reveal-right");
  e.style.transitionDelay = `${(count % 4) / 10}s`;
  count += 1;
});
//
let servicesCards = document.querySelectorAll(".services .card");
count = 0;
servicesCards.forEach((e) => {
  e.classList.add("reveal-up");
  e.style.transitionDelay = `${(count % 3) / 10}s`;
  count += 1;
});
//
let skillsProgress = document.querySelectorAll(".skills .progress");
count = 0;
skillsProgress.forEach((e) => {
  e.classList.add("reveal-right");
  e.style.transitionDelay = `${(count % 4) / 10}s`;
  count += 1;
});
//
let contactInfo = document.querySelectorAll(".contact .info p");
count = 0;
contactInfo.forEach((i) => {
  i.classList.add("reveal-right");
  i.style.transitionDelay = `${count}s`;
  count += 0.1;
});
//
let revealRight = document.querySelectorAll(".reveal-right");
let revealUp = document.querySelectorAll(".reveal-up");
//
window.onload = () => {
  revealRight.forEach((e) => {
    if (
      e.getBoundingClientRect().top < window.innerHeight - 100 &&
      e.getBoundingClientRect().bottom > 0
    ) {
      e.classList.add("reveal");
    } else {
      e.classList.remove("reveal");
    }
  });
  revealUp.forEach((e) => {
    if (
      e.getBoundingClientRect().top < window.innerHeight &&
      e.getBoundingClientRect().bottom > 0
    ) {
      e.classList.add("reveal");
    } else {
      e.classList.remove("reveal");
    }
  });
};
window.onscroll = () => {
  revealRight.forEach((e) => {
    if (
      e.getBoundingClientRect().top < window.innerHeight - 100 &&
      e.getBoundingClientRect().bottom > 0
    ) {
      e.classList.add("reveal");
    } else {
      e.classList.remove("reveal");
    }
  });
  revealUp.forEach((e) => {
    if (
      e.getBoundingClientRect().top < window.innerHeight &&
      e.getBoundingClientRect().bottom > 0
    ) {
      e.classList.add("reveal");
    } else {
      e.classList.remove("reveal");
    }
  });
};
