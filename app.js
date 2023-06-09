var loader = document.getElementById("preloader");
var mainContainer = document.querySelector(".main-container");

mainContainer.style.display = "none";

setTimeout(function () {
  loader.style.display = "none";
  mainContainer.style.display = "block";
}, 2000);

/*LOADER ENDS HERE */

/*FEATHER ICONS */
feather.replace();

/*EXPERIENCE */
const buttons = document.querySelectorAll(".experience-button");
const descriptions = document.querySelectorAll(".experience-description");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-target");

    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
    button.classList.add("active");

    descriptions.forEach((desc) => {
      desc.classList.remove("active");
    });
    document.getElementById(target).classList.add("active");
  });
});


/* 
window.addEventListener("load", function() {
  var currentPage = window.location.pathname;

  if (currentPage === "/specific-page") {
    document.body.style.backgroundColor = "#FF0000";
  } else {
    document.body.style.backgroundColor = "#FFFFFF";
  }
});
*/