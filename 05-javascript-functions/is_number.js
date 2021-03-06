/* run your program from the command line: $ node number.js input
 * for example: $ node is_number.js 12
 * for example: $ node is_number.js "philip"
 *
 * whatever input you provide will be available in the variable input
 * your program should check if input is a number
 *
 * if it is a number, print out "<input> is a valid number" where <input> is the number
 * for example: "12 is a valid number"
 *
 * if it is not a number, print out "<input>" is not a number" where <input> is the number
 * for example: "philip is not a number"

 * how can you check to see if a value contains or can be converted to a valid number?
 */

var input = process.argv[2];
console.log(Number(input));

console.log(typeof(input));

if (Number(input) == input){
	console.log(input + " is a valid number.");
}else {
	console.log(input + " is not a valid number.");
}