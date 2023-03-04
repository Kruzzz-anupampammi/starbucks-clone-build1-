//to get filter buttons first
const filterButtons = document.querySelectorAll(".filter-btn");

//to get selected category name
const selectedCategory = document.getElementById("s-category");

//add event listeners for the buttons
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    //get attribute on click handler
    const category = btn.getAttribute("data-category");

    //filter products based on category
    const products = document.querySelectorAll(".products");
    products.forEach((product) => {
      if (product.getAttribute("data-category") === category) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
    // append the selected category to the container
    selectedCategory.innerText = `${
      category.charAt(0).toUpperCase() + category.slice(1)
    }`;
  });
});
