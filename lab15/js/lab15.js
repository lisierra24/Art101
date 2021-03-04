// Author: Brock
// Lizeth Sierra
// Created: March 3, 2021



$('#submit').click(function() {
  var topic = $('#topic').val();
  console.log(topic)
  var apiUrl= "https://en.wikipedia.org/api/rest_v1/page/summary/"+topic.replace(" ", "_")+"?redirect=true";
    console.log(apiUrl);
    $.ajax({
      url: apiUrl,
      data: { },
      type: "GET",
      dataType: "json"
    })
    .done(function( data ) {
      $('#output').html(data.extract_html);
    })
    .fail(function(xhr, status, errorThrow ) {
        $('output').html('<p>I coul not find anything with that name!');
    });
})
