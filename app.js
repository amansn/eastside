window.onload = function() {
  console.log('load');

  //AJAX request
  $.ajax({
    url: "https://raw.githubusercontent.com/amansn/eastside/master/posts.json"
  }).done(function(response) {
    console.log('done');
    var data = JSON.parse(response);
    console.log('response1', data);
    var sortedData = response.sort(function(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.item_published) - new Date(a.item_published);
    });
    console.log('sortedData', sortedData);
  }).fail(function() {
    console.log('fail');
  });
}
