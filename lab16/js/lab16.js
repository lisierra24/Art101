// Author: Lizeth Sierra
// Created: March 9, 2021
// Public




$('#submit').click(function() {
  $.ajax({
    url: "http://xkcd.com/614/info.0.json",
    data: { },
    type: "GET",
    dataType: "json",
    success: function ( data ) {
      var textData = JSON.stringify(data);
      var str = " ";
      var imageURL= data.img;
      var title = data.title;
      var alt = data.alt;
      str += "<h2>" + title + "</h1>";
      str += "<img src='" + imageURL + "'title='" + alt + "'>'"
      printing(str);
      console.log("Success:", textData);
    }
  })
  .fail(function(xhr, status, errorThrow ) {
    $('output').html('<p>I coul not find anything with that name!');
  });
})

function printing (text){
  $("#output").html(text);
}
$("#alt").html(alt);





//
// // Using the core $.ajax()method
// var comicObj = {};
//
// function getAndPutData(apiURL) { $.ajax ({
//   // the URL for t the request (from the api docs)
//   url: apiURL,
//   // the data to send (will be converted to a query string)
//   data: { },
//   // Whether this is a POST or GET request
//   type: "GET",
//   // the type of data we expect back
//   dataType: "json",
//   // what do we do when the api call is successful
//   // all the action goes in here
//   success: function(data) {
//     //do stuff
//     $('#output-image').html("<h2>" + data.title);
//     $('#output-image').htlm("<img src=" + data.img + "' title='" + data.alt + "'>'");
//   },
//   // what we do if the api call fails
//   error: function (jqXHR, textStatus, errorThrown) {
//     // do stuff
//     console.log("Error:", textStatus, errorThrown);
//   }
//
// })
//
// }
