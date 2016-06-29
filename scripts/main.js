var navTemplate = ''
    + ' <div class="container-fluid">'
    + '     <div class="navbar-header">'
    + '         <!-- <div class="logo navbar-brand"><a class="JND" href="index.html">JND</a></div> -->'
    + '         <a class="JND navbar-brand" href="index.html">JND</a>'
    + '         <button class="navbar-toggle collapsed", type="button", data-toggle="collapse", data-target="#myNavBar">'
    + '             <!-- <span class="sr-only">Toggle navigation</span> -->'
    + '             <span class="icon-bar"></span>'
    + '             <span class="icon-bar"></span>'
    + '             <span class="icon-bar"></span>'
    + '         </button>'
    + '     </div>'
    + '     <div class="collapse navbar-collapse" id="myNavBar">'
    + '         <ul class="nav navbar-nav navbar-right">'
    + '             <li class="navbar-link"><a href="about.html" >about</a></li>'
    + '             <li class="navbar-link"><a href="portfolio.html">portfolio</a></li>'
    + '             <li class="navbar-link"><a href="https://www.linkedin.com/in/noel-deguzman-a87b942b" target="_blank"><span class="ion-social-linkedin"></span></a></li>'
    + '             <li class="navbar-link"><a href="https://github.com/noel123iamme" target="_blank"><span class="ion-social-github"></span></a></li>'
    + '             <li class="navbar-link"><a href="contact.html"><span class="ion-email"></span></a></li>'
    + '         </ul>'
    + '     </div>'
    + ' </div>';
    
var onHover = function(event) {
    $('.JND').text("J. Noel Deguzman");
};

var offHover = function(event) {
    $('.JND').text('JND');
};

var doMain = function() {
  $('.navbar').append(navTemplate);
  $('.JND').hover(onHover, offHover);
};

