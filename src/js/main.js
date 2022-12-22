"use strict";

const aboutTab = document.querySelector(".about__details");
const tabs = document.querySelectorAll(".about__tab");
const aboutDetails = document.querySelector(".about__detail p");

const nav = document.querySelector(".navigation");
const navSticky = document.querySelector(".navigation__sticky");

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const aboutDetail = [
  `I mainly work on backend development using Java and Springboot as my primary technology. Other than that, I also work on SQL Databases which includes PostgreSQL, Oracle SQL, and MS SQL Server. Besides backend development, I'm familiar in using UNIX-like systems and familiar with using CI/CD tools of Openshift RedHat and Jenkins.`,
  `In terms of frontend development I'm comfortable using Javascript or Typescript. I have experience in using JQuery and Angular but still lacks of experience on using the framework (Still on it!). I can also do HTML + CSS designing (from you or designed by myself).`,
];

aboutTab.addEventListener("click", function (e) {
  const clicked = e.target.closest(".about__tab");

  if (!clicked) return;
  tabs.forEach((t) => t.classList.remove("about__tab--active"));

  clicked.classList.add("about__tab--active");

  aboutDetails.textContent = aboutDetail[clicked.dataset.tab - 1];
});

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   navSticky.style.display = "flex";

//   // if (!entry.isIntersecting && window.screen.width > 524) {
    
//   // } else {
//   //   navSticky.style.display = "none";
//   // }
// };

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

console.log(window.screen);
console.log(window.screen.width);
