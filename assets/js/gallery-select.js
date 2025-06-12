const img_gals = document.querySelectorAll(".img_gal");
// For each image gallery
img_gals.forEach((gal) => {
  // Variables
  const img_main = gal.querySelector(".img_main");
  const img_small = gal.querySelectorAll(".img_small");
  const img_first = gal.querySelector(".img_small");

  // Apply function on first image
  img_first.classList.add("selected");
  UpdateImage(img_main, img_first);

  // Add click event listeners to images
  img_small.forEach((img) => {
    img.addEventListener("click", () => UpdateImage(img_main, img));
  });
});

// Image update function
function UpdateImage(main, small) {
  main.src = small.src;
  main.parentNode.querySelector(".selected").classList.remove("selected");
  small.classList.add("selected");
}
