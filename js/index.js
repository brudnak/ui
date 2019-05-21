const signInButton = document.querySelector(".sign-in-button");
const siteContainer = document.querySelector(".container");
const siteAside = document.querySelector("aside");

signInButton.addEventListener("click", e => {
  siteAside.classList.toggle("hide");
});
