var newString;
var roundString = 0;

var formatString = function(string){
  newString = string.replace(/[^a-z]/gi,"").toLowerCase();
    if (newString){
      return newString;
  } else {
    return false;
  }
};

var mathString = function(newString) {

  var countString = newString.length;
    roundString = Math.ceil(Math.sqrt(countString));

  if (newString){
    return roundString;
} else {
  return false;
}
};


var rectString = function(newString){

  // for(var i = 0; i < newString.length; i++){
  var characterPlace = newString.substr(0,roundString);
  console.log(characterPlace);

  if(characterPlace){
    return characterPlace;
  }else{
    return false;
  }
// }
};




// var arrayThings = function(newString){
//   var array = [];
//   array = array.push(newString);
//   // array = newString.push();
//   console.log(newString);
//   array.charAt(0,roundString);
//   console.log(roundString);
// };


// $(document).ready(function() {
//
//
//
// });
