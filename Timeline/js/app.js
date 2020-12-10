const ham = document.getElementById("ham");
const navtext = document.getElementById("nav-text");
ham.onclick = () => {
  navtext.classList.toggle("active");
};
