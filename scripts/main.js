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
    $('.JND').text("Joseph Noel Deguzman");
    $('.JND').css({
        'font-size': '.75rem',
        'color': 'rgb(50, 10, 100)',
        'letter-spacing': '.15rem',
        'text-transform': 'uppercase',
        '-webkit-transform': 'rotate(360deg)',
        'transform': 'rotate(360deg)'
    });
};

var offHover = function(event) {
    $('.JND').text('JND');
    $('.JND').css({
        'font-size': '1rem',
        'color': 'white',
        'letter-spacing': '0rem',
        'text-transform': 'uppercase',
        '-webkit-transform': 'rotate(-360deg)',
        'transform': 'rotate(-360deg)'
    });
};

$(window).load(function() {
  $('.navbar').append(navTemplate);
  $('.logo').hover(onHover, offHover);
});
