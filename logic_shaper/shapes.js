//	Which shape’s sum of numbers is the lowest? 
//Create a function called lowestSumForShape that can find out.

function lowestSumForShape(shapes) {
  var holder = {}
  var shapez = ''
  var min = Infinity;


if (typeof shapes == "string"){
  return 'enter an array pls'
}

   if (shapes !== null || shapes !== '') {

    for (var i = 0; i < shapes.length; i++) {
      var type = shapes[i].type
      if (holder[type] === undefined) {
        holder[type] = shapes[i].number

      }

      else {
        holder[type] += shapes[i].number
      }

    }
    for (var x in holder) {
      if (holder[x] < min) {
        min = holder[x]
        shapez = x

      }
    }

    return shapez
  }
  else {
    return ' please enter valid data'
  }
 
}
