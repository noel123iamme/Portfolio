var heroTitle = $('.hero-title');

var buildPortfolioTemplate = function(number) {
  var template = 
      '<div class="project-item-container column third">'
    + '  <a href="#"><img src=""/></a>'
    + ''
    + '</div>';
      
  return $(template);
};

$(document).ready(function() {
  heroTitle.text("Portfolio");
  heroTitle.css({"opacity": "1"});
});
