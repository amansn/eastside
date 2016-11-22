window.onload = function() {
  console.log('load');

  //AJAX request
  $.ajax({
    url: 'https://raw.githubusercontent.com/amansn/eastside/master/posts.json'
  }).done(function(response) {
    console.log('done');
    var data = JSON.parse(response);
    var sortedData = data.items.sort(function(a, b) {
      a = a.item_published;
      b = b.item_published;
      return a>b ? -1 : a<b ? 1 : 0;
    });
    console.log('sortedData', sortedData);
    var wall = document.getElementById('wall');
    for (item in sortedData) {
      console.log('test');
      var div = document.createElement('div');
      div.className = 'post';
      if ()
      div.innerHTML = 'test';
      wall.appendChild(div);
    }
  }).fail(function() {
    console.log('fail');
  });
}

var displayManual = function() {

}
