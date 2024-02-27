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
  let result = '';
  for (let i = 0; i < obj.length; i++) {
    while (obj[i][1] <= num) {
      result += obj[i][0];
      num -= obj[i][1];
    }
  }
  return result;
}

let num = prompt("Enter the number");
console.log(convertToRoman(num));
