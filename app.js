// function for nav bar
function showNav(){
    var navbar = document.getElementById('navbar');
    var scrollVal = window.scrollY;
    console.log(scrollVal);

    if(scrollVal >= 780){
        navbar.classList.add('show');
    }
    else{
        navbar.classList.remove('show');
    }
}

window.addEventListener('scroll', showNav);



//coin sound
var coinSound = new Audio('assets/audio/coin.mp3');
var soundLinks = document.querySelectorAll('.sound-source');
// Attach a click event listener to each <a> tag
soundLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      var volume = document.getElementById('volume-controller').classList == 'volume'? 1 : 0;
      coinSound.volume = volume
      coinSound.currentTime = 0; // Rewind the sound effect
      coinSound.play(); // Play the sound effect
      // You can add additional actions or code here if needed
    });
  });

  window.onload = function() {
    var audioElement = document.getElementById('themesong');
    var volumeController = document.getElementById('volume-controller');
    var isMuted = false;

    volumeController.addEventListener('click', function() {
      isMuted = !isMuted;

      audioElement.volume = isMuted? 0 : 0.3;
      audioElement.play();
    })

      // Play audio automatically when the page loads
      audioElement.volume = isMuted? 0 : 0.3;
      audioElement.play();
  };


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
    
    var targetOffsetTop = targetElement.offsetTop;
    // Scroll smoothly to the target position
    window.scrollTo({
      top: targetOffsetTop-navbarHeight,
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



var stickyDiv = document.getElementById('img-hobbies');
var stickyPosition = 4800; // Adjust the scroll position where the div becomes sticky
var unstickyPosition = 5200; // Adjust the scroll position where the div becomes unsticky

function updateStickyDiv() {
  var scrollPosition = window.scrollY;
  
  if (scrollPosition >= stickyPosition && scrollPosition < unstickyPosition) {
    stickyDiv.classList.add('sticky');
  } else {
    stickyDiv.classList.remove('sticky');
  }
}

window.addEventListener('scroll', updateStickyDiv);


var stickyDiv1 = document.getElementById('img-extra');
var stickyPosition1 = 3290; // Adjust the scroll position where the div becomes sticky
var unstickyPosition1 = 3750; // Adjust the scroll position where the div becomes unsticky

function updateStickyDiv1() {
    var scrollPosition = window.scrollY;
    
    if (scrollPosition >= stickyPosition1 ) {
      stickyDiv1.classList.add('sticky');
    } else {
      stickyDiv1.classList.remove('sticky');
    }
  }
  
window.addEventListener('scroll', updateStickyDiv1);
  

function setVolumeState(){
  volumeDiv = document.getElementById('volume-controller');
  currentState = volumeDiv.classList;
  if (currentState == 'volume'){
    volumeDiv.classList.remove('volume');
    volumeDiv.classList.add('novolume');
  }
  else{
    volumeDiv.classList.remove('novolume');
    volumeDiv.classList.add('volume');
  }
}

document.getElementById('volume-controller').addEventListener('click', setVolumeState);
