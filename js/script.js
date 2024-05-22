// nav toggle - select button and links

const navToggle = document.querySelector("#navToggle")
const nav = document.querySelector("#nav-links")

// add event listener

navToggle.addEventListener("click", () => {
    nav.classList.toggle('nav-open')
})

// ------------ FAQ -----------

// select faqs and answers
const faqs = document.querySelectorAll('.faqs');
const answers = document.querySelectorAll('.answer');

// add event listener for click 





faqs.forEach((faq, index) => {
    faq.addEventListener('click', () => {
        answers[index].classList.toggle('active');
        faq.classList.toggle('active');
    });
});


//esto es del formulario con la validación
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
// Validación del nombre y apellido
  var name = document.getElementById('name').value;
  if(name.trim() === ""){
    alert('Por favor, ingresa tu nombre y apellido.');
    return false;
  } else {
    var parts = name.split(' ');
    if(parts.length < 2 || parts[1] === ""){
      alert('Por favor, asegúrate de ingresar tanto tu nombre como tu apellido.');
      return false;
    }
  }
  
    // Validación del correo electrónico
    var email = document.getElementById('email').value;
    if(email == ""){
      alert('Por favor, ingresa tu correo electrónico.');
      return false;
    } else if(!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email)){
      alert('Por favor, ingresa un correo electrónico válido.');
      return false;
    }
    // Validación del número de teléfono
    var numero = document.getElementById('telefono').value; // Cambiado de 'numero' a 'telefono'
    if(numero == ""){
      alert('Por favor, ingresa tu número de teléfono.');
      return false;
    } else if(!/^\d+$/.test(numero)){
      alert('El número de teléfono solo debe contener dígitos.');
      return false;
    }
    // Validación del asunto
    var subject = document.getElementById('subject').value;
    if(subject == ""){
      alert('Por favor, selecciona un asunto.');
      return false;
    }
  
    // Validación del mensaje
    var message = document.getElementById('message').value;
    if(message == ""){
      alert('Por favor, ingresa tu mensaje.');
      return false;
    }
  
    alert('Formulario enviado con éxito!');
  });

  // ---------------------- Scrooll to Top----------------------------

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  // Obtener el botón
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  // Función para desplazar hacia arriba
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Evento de clic para el botón
  scrollToTopBtn.addEventListener('click', scrollToTop);
});


document.addEventListener("DOMContentLoaded", function() {
  // Función para cargar los archivos HTML
  function loadHTML(file, elementId) {
      fetch(file)
          .then(response => {
              if (!response.ok) {
                  throw new Error(`Error al cargar ${file}: ${response.statusText}`);
              }
              return response.text();
          })
          .then(data => {
              document.getElementById(elementId).innerHTML = data;
          })
          .catch(error => {
              console.error(error);
          });
  }

  // Cargar el header y el footer
  loadHTML('partials/header.html', 'header-container');
  loadHTML('partials/footer.html', 'footer-container');
});


