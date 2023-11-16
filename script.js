var dateDiffInDays = function (date1, date2) {
  //   write your code here

	//8 9

	let num1="";
	num1+=date1[8];
	num1+=date1[9];
	let num2="";
	num2+=date2[8];
	num2+=date2[9];

	let n1=Number(num1);  
	let n2=Number(num2);

	return n2-n1;
};

// Do not change the code below. 
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
