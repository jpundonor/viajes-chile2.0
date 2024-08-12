// Change navbar background color when scrolling
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("bg-custom-dark");
  } else {
    navbar.classList.remove("bg-custom-dark");
  }
});

// Form alert message
document.getElementById('form-contact').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents page reload

  alert('Mensaje enviado con éxito!');
  
  this.reset(); // Restart the form after submitting
});

// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// Modal
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
