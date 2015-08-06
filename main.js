// get the second highest and second lowest numbers of the array

var globalArray = [];
var finalArray = [];

var secondGreatLow = function(array) {

// get max and min
	var max = Math.max.apply(Math, array)
	var min = Math.min.apply(Math, array)

// get all but max and min and push
	var filtering = array.filter(function(num) {
		if((num !== max) && (num !== min)) {
			globalArray.push(num)
		}
	})
	// get max and min of new array
	var finalMax = Math.max.apply(Math, globalArray)
	var finalMin = Math.min.apply(Math, globalArray)

// push these to new array
	var finalFilter = globalArray.filter(function(number) {
		if((number === finalMax) || (number === finalMin)) {
			finalArray.push(number)
		}
	})
	console.log(finalArray)
}

secondGreatLow([5,2,18,38,84])

// convert number to hours and minutes

var timeConvert = function(num) {

	var hours = Math.floor(num / 60)
	var minutes = (num % 60);

	console.log( hours + ':' + minutes)

}

timeConvert(63)