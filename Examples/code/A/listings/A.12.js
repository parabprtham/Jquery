$.print = function(message) {
  $(document).ready(function() {
    $('<div class="result"><div>')
      .text(String(message))
      .appendTo('#results');
  });
};

$(document).ready(function() {
  $('#button-1').show();
});

$(document).ready(function() {
  var counter = 0;
  $('#button-1').click(function() {
    counter++;
    $.print('counter = ' + counter);
    return false;
  });
});
