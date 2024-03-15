let isLightTheme = true;

function toggleTheme() {
	isLightTheme = !isLightTheme;
	document.body.setAttribute("data-theme", isLightTheme ? "light" : "dark");
}

const sun = document.getElementById("sun");

sun.checked = isLightTheme;

sun.addEventListener("change", toggleTheme);




window.onscroll = function () {
  nav();
};

let navbar = document.getElementById('navbar');
let sticky = navbar.offsetTop;

function nav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}




let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}