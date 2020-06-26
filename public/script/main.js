var short_text;
if ($('#card-text').html().length > 20) {
  short_text = $('#card-text').html().substr(0, 20);
  $('#card-text').html(short_text + '...');
}

// let text = document.getElementById('#card-text').textContent;
// if (text.length > 20) {
//   short_text = text.substr(0, 20);
//   text = short_text + ' ...';
// }

