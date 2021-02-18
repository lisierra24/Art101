// Lizeth Sierra

//Find the section you want to add the button to
var challengesEl = $('#challenges');
var problemsEl = $('#problems');
var resultsEl = $('#results');

// Create the button
var myButton = "<button>Click Me</button>";
// Give the text label
// Add it to the section
challengesEl.append(myButton);
problemsEl.append(myButton);
resultsEl.append(myButton);


// Access the button
$('#challenges button').click(function() {
  $('#challenges').toggleClass('special');
})

$('#problems button').click(function() {
  $('#problems').toggleClass('special');
})

$('#results button').click(function() {
  $('#results').toggleClass('special');
})
// beautify to structure everything
