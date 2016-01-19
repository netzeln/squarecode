
var formatString = function(string){
  var newString = string.replace(/[^a-z]/gi,"").toLowerCase();
    if (newString){
      return newString;
  } else {
    return false;
  }
};

var mathString = function(newString) {

  var countString = newString.length;
  var roundString = Math.ceil(Math.sqrt(countString));

  if (newString){
    return roundString;
} else {
  return false;
}
};



// $(document).ready(function() {
//
//
//
// });
