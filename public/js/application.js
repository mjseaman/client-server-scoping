$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
  	$('h1').text($(this).data('heading'));
  });

  $('.skill_teller').on('click', function() {
  	$('h1').text(window.location.pathname.match(/\w*$/));
  });

  $('.meal_teller').on('click', function() {
  	$('h1').text($('#meal').val());
  });

  // What other events do you need to bind to make the other pages work?
});
