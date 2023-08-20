function dropDown() {
  // Getting all the accordion buttons and content divs
  const buttons = document.querySelectorAll(".accordion-button");
  const contentDivs = document.querySelectorAll(".content");

  // Add a click event listener to each accordion button
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      contentDivs[index].classList.toggle("active");
    });
  });
}
