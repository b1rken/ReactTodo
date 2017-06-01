var moment = require('moment');

console.log(moment().format());

var now = moment();
console.log('Current timestamp', now.unix());


var timestamp = 1496346529;
var currentMoment = moment.unix(1496346529);

console.log('current moment: ', currentMoment.format('MMMM Mo, YYYY @ hh:mm A'));
