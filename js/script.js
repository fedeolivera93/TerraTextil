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