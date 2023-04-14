//Fetching HTML Elements
const user = document.querySelector('.username');
const form = document.querySelector('form');
const datestart = document.getElementById('dateTime');
const nosDay = document.getElementById('Days');
const cycle = document.getElementById('cycles');
const inner1 = document.querySelector('.periodStart');
const inner2 = document.querySelector('.ovuStart');

// const names = prompt('Please enter your name');
// user.textContent = names;

form.addEventListener('submit', (e) => {
	e.preventDefault();
	//Period Start Date
	const now = new Date();
	const startday = datestart.value;
	const daysVal = nosDay.value;
	const cycleVal = cycle.value;
	//Validation
	if (daysVal == '' || cycleVal == '' || startday == '') {
		alert('Please Fill in the appropriate fields!');
		return;
	}
	//Set Date
	const startdayDate = new Date(startday);
	const nextPeriod = startdayDate.setDate(
		startdayDate.getDate() + parseInt(cycleVal)
	);
	const arr1 = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
	const arr2 = [
		'Jan',
		'Feb',
		'Mar',
		'April',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sept',
		'Oct',
		'Nov',
		'Dec',
	];
	const period1 = new Date(nextPeriod);
	const day1 = arr1[period1.getDay()];
	const month1 = arr2[period1.getMonth()];
	const day2 = period1.getDate();
	const year1 = period1.getFullYear();
	//Period End
	const periodEnds = period1.setDate(period1.getDate() + parseInt(daysVal) - 1);
	const period2 = new Date(periodEnds);
	const day3 = arr1[period2.getDay()];
	const month2 = arr2[period2.getMonth()];
	const day4 = period2.getDate();
	const year2 = period2.getFullYear();

	//Ovulation Starts
	const ovuStarts = period2.setDate(period2.getDate() + 7);
	const ovula = new Date(ovuStarts);
	const day5 = arr1[ovula.getDay()];
	const month3 = arr2[ovula.getMonth()];
	const day6 = ovula.getDate();
	const year3 = ovula.getFullYear();

	//Ovulation Ends
	const ovuEnds = ovula.setDate(ovula.getDate() + 5);
	const endOvu = new Date(ovuEnds);
	const day7 = arr1[endOvu.getDay()];
	const month4 = arr2[endOvu.getMonth()];
	const day8 = endOvu.getDate();
	const year4 = endOvu.getFullYear();

	//Display on Page
	const perStarts = `${day1}-${month1}-${day2}-${year1} till ${day3}-${month2}-${day4}-${year2}`;
	const ovuInner = `${day5}-${month3}-${day6}-${year3} till ${day7}-${month4}-${day8}-${year4}`;
	inner1.textContent = perStarts;
	inner2.textContent = ovuInner;
});

// const form = document.getElementById('form');
// const startDate = document.getElementById('startDate');
// const days = document.getElementById('days');
// const weekDay = document.querySelector('.weekDay');

// form.addEventListener('submit', (e) => {
// 	e.preventDefault();
// 	const now = new Date();
// 	let nosDay = 28;
// 	let value = startDate.value;
// 	let dayss = new Date(value);
// 	let result = dayss.setDate(dayss.getDate() + nosDay);
// 	let output = new Date(result);
// 	let whenEnd = output.setDate(output.getDate() + parseInt(days.value) - 1);
// 	let prdDays = new Date(whenEnd);
// 	let ovuStart = prdDays.setDate(prdDays.getDate() + 7);
// 	let ovulate = new Date(ovuStart);
// 	let ovuEnd = ovulate.setDate(ovulate.getDate() + 6);
// 	const arr = ['Sun','Mon','Tue','Wed','Thurs','Fri','Sat']
// 	console.log(new Date(ovuEnd));
// });

// var someDate = new Date()
// var numberOfDaysToAdd = 1;
// var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
// console.log(new Date(result));

// let someFate = new Date();
// let result = someFate.setDate();
// console.log(new Date(result));

// Date.prototype.addDays = function (days) {
// 	var date = new Date(this.valueOf());
// 	date.setDate(date.getDate() + days);
// 	return date;
// };

// let date = new Date();
// console.log(date);
// var date = new Date();

// console.log(date.addDays(28));
