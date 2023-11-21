let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};






let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');



window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });



    let header = document.querySelector('.header');
    
    header.classList.toggle('sticky',window.scrollY > 100);

    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

let dark = document.querySelector('#darkMode-icon');

dark.onclick = () => {
  dark.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
};

ScrollReveal({ 
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.services-container, .portfolio-box, .motivation-wrapper, .contact form, .home-img img, .skill-content .skill-group:nth-child(2)', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img .container-shape,.skill-content .skill-group:nth-child(1)', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content, .skill-content .skill-group:nth-child(3)', { origin: 'right' });

const contact = document.getElementById('contact-form'),
  contactmessage = document.getElementById('contact-message');

  const sendmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_ayynkor', 'template_l86fyks', '#contact-form','ckUbf3NS_l95pXx4o')
                    .then(() => {
                      contactmessage.textContent = 'Message have been sent successfully';
                      Delay();
                    }, () => {
                      contactmessage.textContent = 'A problem happened while sending the message';
                      Delay();
                    })
  };

  contact.addEventListener('submit',sendmail);

  function Delay() {
    setTimeout(function() {
      contactmessage.textContent = ' ';
    }, 2000);
}

const imageSets = [
  ['Images/img3.jpg', 'Images/img8.jpg', 'Images/img6.jpg', 'Images/img7.jpg'],
  ['Images/img5.jpg', 'Images/img9.jpg', 'Images/img10.jpg', 'Images/img12.jpg', 'Images/img11.jpg', 'Images/img13.jpg', 'Images/img14.jpg'],
];

function setupSlideshow(containerId, images) {
  let currentIndex = 0;
  const imgElement = document.querySelector(`#${containerId} .slideshow-img`);

  function updateImage() {
      imgElement.src = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;
  }

  setInterval(updateImage, 5000);

  updateImage();
}

setupSlideshow('slideshow-container-1', imageSets[0]);

setupSlideshow('slideshow-container-2', imageSets[1]);

