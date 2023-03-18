// Sart with icone page

let page_icone = document.querySelector(".ppage-icone");
let page_manu = document.querySelector(".pages-menu");
page_icone.addEventListener("click", () => {
  if (page_manu.style.display === "none") {
    page_manu.style.display = "block";
  } else {
    page_manu.style.display = "none";
  }
});

// end

// trantion

// transtion form right to left

const observer = new IntersectionObserver((enters) => {
  enters.forEach((entery) => {
    if (entery.isIntersecting) {
      entery.target.classList.add("show__right");
    } else {
      entery.target.classList.remove("show__right");
    }
  });
});

const hiddenElement__right = document.querySelectorAll(".hidden__right");

hiddenElement__right.forEach((el) => observer.observe(el));

// transtion form left to right

const observerr = new IntersectionObserver((enters) => {
  enters.forEach((entery) => {
    if (entery.isIntersecting) {
      entery.target.classList.add("show__left");
    } else {
      entery.target.classList.remove("show__left");
    }
  });
});

const hiddenElement__left = document.querySelectorAll(".hidden__left");

hiddenElement__left.forEach((ele) => observerr.observe(ele));

// transtion form tottom to top

const observerrr = new IntersectionObserver((enters) => {
  enters.forEach((entery) => {
    if (entery.isIntersecting) {
      entery.target.classList.add("show__top");
    } else {
      entery.target.classList.remove("show__top");
    }
  });
});

const hiddenElement__top = document.querySelectorAll(".hidden__top");

hiddenElement__top.forEach((elee) => observerrr.observe(elee));

// our sevess nav

var servises__nav = document.querySelectorAll(".top__nav li");
var design = document.querySelectorAll(".design");
var devlopment = document.querySelectorAll(".devlop");

for (var i = 0; i < servises__nav.length; i++) {
  (function (index) {
    servises__nav[index].addEventListener("click", () => {
      for (let j = 0; j < servises__nav.length; j++) {
        servises__nav[j].classList.remove("active");
      }
      servises__nav[index].classList.add("active");

      for (let x = 0; x < design.length; x++) {
        if (servises__nav[index].innerHTML == "Design") {
          design[x].style.display = "none";
          devlopment[x].style.display = "block";
        } else if (servises__nav[index].innerHTML == "Development") {
          design[x].style.display = "block";
          devlopment[x].style.display = "none";
        } else {
          design[x].style.display = "block";
          devlopment[x].style.display = "block";
        }
      }
    });
  })(i);
}

// change Nav bar when scroll

var nav__container = document.querySelector(".nav__container");
var nav__ulli = document.querySelectorAll(".color-icon a");
var nav__ulli_s = document.querySelectorAll(".color-icon_name");

window.addEventListener("scroll", () => {
  let scrolling = scrollY;
  if (scrolling > 100) {
    nav__container.style =
      "width:100%; left:0; background-color: white; color: black";
    for (i = 0; i < nav__ulli.length; i++) {
      nav__ulli[i].style.color = "black";
    }
    for (i = 0; i < nav__ulli.length; i++) {
      nav__ulli_s[i].style.color = "#2124b1";
    }
  } else {
    nav__container.style = "width : ; left: ; color: white;";
    for (i = 0; i < nav__ulli.length; i++) {
      nav__ulli[i].style.color = "white";
    }
    for (i = 0; i < nav__ulli.length; i++) {
      nav__ulli_s[i].style.color = "white";
    }
  }
});

// nav icon on responsive

let ullis = document.querySelector(".nav__menu > ul");
let icon = document.querySelector(".burger");
icon.addEventListener("click", () => {
  let computedWidth = window.getComputedStyle(ullis).getPropertyValue("width");
  console.log(computedWidth);
  if (computedWidth === "0px") {
    ullis.style.width = "100%";
  } else {
    ullis.style.width = "0";
  }
});

// upper arrow

let upperArrow = document.querySelector(".upper__arrow");

upperArrow.addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  x = scrollY;
  if (x <= 100) {
    upperArrow.style.display = "none";
  } else {
    upperArrow.style.display = "block";
  }
});

// upper arrow

// lodding page

window.addEventListener("load", function () {
  const loadingScreen = document.querySelector(".spinner");
  loadingScreen.style.display = "none";
});

// lodding page
