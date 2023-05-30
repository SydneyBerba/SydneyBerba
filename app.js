// function for nav bar
function showNav(){
    var navbar = document.getElementById('navbar');
    var scrollVal = window.scrollY;
    console.log(scrollVal);

    if(scrollVal >= 800){
        navbar.classList.add('show');
    }
    else{
        navbar.classList.remove('show');
    }
}

window.addEventListener('scroll', showNav);

//coin sound
var coinSound = new Audio('assets/audio/coin.mp3');
// declare all a tags
var soundLinks = document.querySelectorAll('.sound-source');
// Attach a click event listener to each <a> tag
soundLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      coinSound.currentTime = 0; // Rewind the sound effect
      coinSound.play(); // Play the sound effect
      // You can add additional actions or code here if needed
    });
  });


  // Get the height of the sticky navbar
var navbarHeight = document.querySelector('.sticky-navbar').offsetHeight;

// Add click event listener to the scroll links
var scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Get the target div ID from the href attribute
    var targetId = link.getAttribute('href').substring(1);
    var targetElement = document.getElementById(targetId);

    // Calculate the scroll position, accounting for the sticky navbar height
    var offsetPosition = targetElement.offsetTop - navbarHeight;
    
    // Calculate the center position of the viewport
    var viewportCenter = window.innerHeight / 2.4;
    
    // Calculate the target position to center the div
    var targetPosition = offsetPosition - viewportCenter + targetElement.offsetHeight / 2;
    
    // Scroll smoothly to the target position
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

function showFriends(){
    var person_img = document.getElementById('img-personality');
    var scrollVal = window.scrollY;
    console.log(scrollVal);

    if(scrollVal >= 1390){
        person_img.classList.add('show');
    }
    else{
        person_img.classList.remove('show');
    }
}

window.addEventListener('scroll', showFriends);

function showExtras(){
    var person_img = document.getElementById('img-extra');
    var scrollVal = window.scrollY;
    console.log(scrollVal);

    if(scrollVal >= 2430){
        person_img.classList.add('show');
    }
    else{
        person_img.classList.remove('show');
    }
}

window.addEventListener('scroll', showExtras);


function showHobbies(){
    var person_img = document.getElementById('img-hobbies');
    var scrollVal = window.scrollY;
    console.log(scrollVal);

    if(scrollVal >= 3265){
        person_img.classList.add('show');
    }
    else{
        person_img.classList.remove('show');
    }
}

window.addEventListener('scroll', showHobbies);

function showHomelife(){
    var person_img = document.getElementById('img-homelife');
    var scrollVal = window.scrollY;
    console.log(scrollVal);

    if(scrollVal >= 920){
        person_img.classList.add('show');
    }
    else{
        person_img.classList.remove('show');
    }
}

window.addEventListener('scroll', showHomelife);

