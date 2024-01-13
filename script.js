const obj = [  
      ['M',1000], 
	  ['CM',900],
      ['D', 500], 
	  ['CD',400],
      ['C', 100], 
      ['L', 50], 
	  ['XL',40],
      ['X', 10], 
	  ['IX',9],
      ['V', 5], 
      ['IV',4],
      ['I', 1]
    ];



function convertToRoman(num) {
  	
for (let i = 0; i < obj.length; i++){
	if(obj[i][1] === num){
		return obj[i];
	}
	if(obj[i][1] < num){
		return obj[i];
	}
}
return obj[0][1];	
}
let num = prompt("Enter the number");
let ans = "";
while(num != 0){ 
let roman = convertToRoman(num);
	ans += roman[0];
	n -= roman[1];
}
console.log(ans);
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
