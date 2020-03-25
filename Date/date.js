//Get Date
let now = new Date();
console.log(now);

//Year, Month, Day
console.log('getFullYear:', now.getFullYear());
console.log('getMOnth:', now.getMonth());
console.log('getDay:', now.getDay());

//Get Hour, Minutes, Seconds
console.log('Hour:', now.getHours());
console.log('Minutes:', now.getMinutes());
console.log('Seconds:', now.getSeconds());

//Time Stamp
console.log(now.toDateString());
console.log(now.toLocaleString());
console.log(now.toTimeString());

//get seconds, hours, days, minutes between date

const before = new Date('February 1 2019 7:30:59');
const nowdate = new Date();
const diff = nowdate.getTime() - before.getTime()
console.log (`Seconds between the two dates ${diff} Seconds`);

const mins = Math.round(diff / 1000 / 60);
console.log (`Minutes between the two dates ${mins} Minutes`);

const hours = Math.round(mins / 60)
console.log (`Hours between the two dates ${hours} Hours`);

const days = Math.round(hours / 24);
console.log (`Days between the two dates ${days} Days`);

//Example
console.log (`The Blog was written ${days} days ago`)

//converting timestamp into date object
const timestamp = 1212983912912;
console.log(new Date(timestamp))


