document.addEventListener("DOMContentLoaded", function() {
  // Fetch the bn HTML file
  fetch('https://wrmorrison.github.io/les/includes/bn.html')
  .then(response => response.text())
  .then(html => {
    // Insert the bannernav HTML into the container
    document.getElementById('bn').innerHTML = html;
  });
 
  // Fetch the bannernav HTML file
  fetch('https://wrmorrison.github.io/les/includes/bannernav.html')
  .then(response => response.text())
  .then(html => {
    // Insert the bannernav HTML into the container
    document.getElementById('bannernavContainer').innerHTML = html;
  });

  // Fetch the hero HTML file
  fetch('https://wrmorrison.github.io/les/includes/hero.html')
  .then(response => response.text())
  .then(html => {
    // Insert the hero HTML into the container
    document.getElementById('heroContainer').innerHTML = html;
  });

  // Fetch the footer HTML file
  fetch('https://wrmorrison.github.io/les/includes/footer.html')
  .then(response => response.text())
  .then(html => {
    // Insert the footer HTML into the container
    document.getElementById('footerContainer').innerHTML = html;
  });
});
