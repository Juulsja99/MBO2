const wrapper2  = document.querySelector('.wrapper2');
const indicators2 = [...document.querySelectorAll('.indicators2 button')];

let currentTestimonial2 = 0; // Default 0

indicators2.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicators2[currentTestimonial2].classList.remove('active');
        wrapper2.style.marginLeft = `-${100 * i}%`;
        item.classList.add('active');
        currentTestimonial2 = i;
    })
})