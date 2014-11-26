var elementYes = document.querySelector('#player-element-yes');
elementYes.setAttribute('text', 'yes');

var elementNo = document.querySelector('#player-element-no');
elementNo.setAttribute('text', 'no');

$('.yes-btn').click(function() {
  elementYes.speak();
});


$('.no-btn').click(function() {
  elementNo.speak();
});

$('.btn-access').click(function() {
  $('.main-page').hide();
  $('#core-header').show();
});

$('#back').click(function() {
  $('.main-page').show();
  $('#core-header').hide();
});


