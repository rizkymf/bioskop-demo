"use strict";

const aboutTab = document.querySelector(".about__details");
const tabs = document.querySelectorAll(".about__tab");
const aboutDetails = document.querySelector(".about__detail p");

const nav = document.querySelector(".navigation");
const navSticky = document.querySelector(".navigation__sticky");

const header = document.querySelector(".header");
// const navHeight = nav.getBoundingClientRect().height;
var selectSchedule = document.querySelector(".schedule");
var selectSeat = document.querySelector(".seat");

const modalOrder = document.getElementById("modal_order");
// const btnOrder = document.getElementById("btn_pesan");
var span = document.getElementsByClassName("close")[0];

var imgs = [
  // {
  //   imgUrl : "src/img/movie1.jpg",
  //   movieName : "Nama Movie"
  // },
  // {
  //   imgUrl : "src/img/movie2.jpg",
  //   movieName : "Nama Movie"
  // },
  // {
  //   imgUrl : "src/img/movie3.jpg",
  //   movieName : "Nama Movie"
  // },
  // {
  //   imgUrl : "src/img/movie4.jpg",
  //   movieName : "Nama Movie"
  // },
  // {
  //   imgUrl : "src/img/movie5.jpg",
  //   movieName : "Nama Movie"
  // },
  // {
  //   imgUrl : "src/img/movie6.jpg",
  //   movieName : "Nama Movie"
  // },
];

var schedules = [
  'Sunday, 20:00',
  'Monday, 15:00',
  'Monday, 18:00',
  'Tuesday, 18:00'
];

var seats = [
  1, 2, 3, 4, 5, 6, 7
];

(async function() {
  let baseUrl = prompt("please enter your backend base url here", "http://yoururl");
  await fetch(baseUrl + '/api/bioskop/get-movies')
    .then(response => response.json())
    .then(data => {
    imgs = data;
    console.log(imgs);
  });
  console.log("HEHE");
  imgs.forEach(val => {
    document.querySelector(".techstack__images").insertAdjacentHTML('beforeend',
    `<div class="movie">
        <img src="`+val.url+`" class="movie_img">
        <div class="movie_info">
          <p>`+val.name+`</p>
          <button class="btn btn__ghost btn_pesan">Pesan</button>
        </div>
     </div>`
    )
  });

  document.querySelectorAll(".btn_pesan").forEach(el => {
    el.addEventListener("click", ev => {
      const im = el.closest('.movie').querySelector('.movie_img').src;
      const name = el.closest('.movie').querySelector('.movie_info').getElementsByTagName("p")[0].innerHTML;
      // console.log(name);
      document.querySelector(".modal-content-order").insertAdjacentHTML('afterbegin',
        `
        <img src="` + im + `" class="movie_img_modal">
        <div class="movie_info_modal">
          <p>` + name + `</p>
        </div>
      `);
      console.log(ev);
      schedules.forEach(sched => {
        const option1 = document.createElement("option");
        option1.value = sched;
        option1.text = sched;
        option1.append = sched;
        selectSchedule.append(option1);
      });
  
      seats.forEach(seat => {
        const option2 = document.createElement("option");
        option2.value = seat;
        // option2.text = seat;
        option2.append(seat);
        selectSeat.append(option2);
      });
  
      modalOrder.style.display = "block";
    });
  }
  );
})();

span.onclick = function() {
  modalOrder.style.display = "none";
  document.querySelector('.movie_img_modal').remove();
  document.querySelector('.movie_info_modal').remove();
}

window.onclick = function(event) {
  if (event.target == modalOrder) {
    modalOrder.style.display = "none";
    document.querySelector('.movie_img_modal').remove();
    document.querySelector('.movie_info_modal').remove();
  }
}

const aboutDetail = [
  `I mainly work on backend development using Java and Springboot as my primary technology. Other than that, I also work on SQL Databases which includes PostgreSQL, Oracle SQL, and MS SQL Server. Besides backend development, I'm familiar in using UNIX-like systems and familiar with using CI/CD tools of Openshift RedHat and Jenkins.`,
  `In terms of frontend development I'm comfortable using Javascript or Typescript. I have experience in using JQuery and Angular but still lacks of experience on using the framework (Still on it!). I can also do HTML + CSS designing (from you or designed by myself).`,
];

// aboutTab.addEventListener("click", function (e) {
//   const clicked = e.target.closest(".about__tab");

//   if (!clicked) return;
//   tabs.forEach((t) => t.classList.remove("about__tab--active"));

//   clicked.classList.add("about__tab--active");

//   aboutDetails.textContent = aboutDetail[clicked.dataset.tab - 1];
// });

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   navSticky.style.display = "flex";

//   // if (!entry.isIntersecting && window.screen.width > 524) {
    
//   // } else {
//   //   navSticky.style.display = "none";
//   // }
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });
// headerObserver.observe(header);

