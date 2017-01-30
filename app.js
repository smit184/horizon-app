var program = require('commander');
var args = process.argv;

program
  .option('-s, --sum', 'sum')
  .option('-p, --product', 'product')
  .parse(process.argv);



if(!program.sum && !program.product) {
	// TO DO: remove after replacing with commander version
	throw 'error: incorrect number of flags present';
}

var isNumber = function(x) {
	return !isNaN(parseFloat(x));
}

var numbers = args.filter(isNumber).map(parseFloat);
var result;

if(program.sum) {
	result = numbers.reduce(function(a,b){ return a + b; });
}

if(program.product) {
	result = numbers.reduce(function(a,b){ return a * b; });
}
console.log("result is %d", result);


// var args = process.argv;
// var flagsPresent = [];
//
// args.forEach(function(item){
// 	if(item === '--sum' || item === '--product'){
// 		flagsPresent.push(item);
// 	}
// });
//
// if(flagsPresent.length !== 1) {
// 	throw 'error: incorrect number of flags present';
// }
//
// var isNumber = function(x) {
// 	return !isNaN(parseFloat(x));
// }
//
// var numbers = args.filter(isNumber).map(parseFloat);
// var result;
//
// if(flagsPresent[0] === '--sum') {
// 	result = numbers.reduce(function(a,b){ return a + b; });
// }
//
// if(flagsPresent[0] === '--product') {
// 	result = numbers.reduce(function(a,b){ return a * b; });
// }
// console.log("result is %d", result);

// if(process.argv.length <= 3){
// 	throw('error: not enough arguments');
// }
//
// if(process.argv[2] === '--sum' || process.argv[2] === '--product'){
// 	if(process.argv[2] === '--sum'){
// 		var sum=0;
// 		for(var i=3; i<process.argv.length; i++){
// 			sum += parseFloat(process.argv[i]);
// 		}
// 		console.log(sum);
//
// 	}else{
// 		var prod = 1;
// 		for(var i=3; i<process.argv.length; i++){
// 			prod *= parseFloat(process.argv[i]);
// 		}
// 		console.log(prod);
// 	}
// } else{
//   throw ('error: no flag was given');
// }
