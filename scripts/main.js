var navTemplate = 
      '<div class="logo"><a href="index.html" class="JND">JND</a></div>'        
    +  '<div class="links-container">'
    +  '  <a href="about.html" class="navbar-link">about</a>'
    +  '  <a href="portfolio.html" class="navbar-link">portfolio</a>'
    +  '  <a href="https://www.linkedin.com/in/noel-deguzman-a87b942b" target="_blank" class="navbar-link"><span class="ion-social-linkedin"></span></a>'
    +  '  <a href="https://github.com/noel123iamme" target="_blank" class="navbar-link"><span class="ion-social-github"></span></a>'
    +  '  <a href="contact.html" class="navbar-link"><span class="ion-email"></span></a>'
    +  '</div>';
    
var onHover = function(event) {
    $('.JND').text("J. Noel Deguzman");
};

var offHover = function(event) {
    $('.JND').text('JND');
};

//add favicon
// add/remove class with single mouseon/off function to repeat need to duplicate css and have x2 function

$(window).load(function() {
  $('.navbar').append(navTemplate);
  $('.JND').hover(onHover, offHover);
});
