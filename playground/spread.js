// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5, 10, 20];
// console.log(add(...toAdd));
//
// var groupA = ['Sverre', 'Knut'];
// var groupB = ['Jenny', 'Kine', 'Yvonne'];
//
// var final = [3, ...groupA, ...groupB];
//
// console.log(final);

var person = ['Espen', 29];
var person2 = ['Knut', 28];

function greet(name, age) {
  console.log('Hei ' + name + ', du er ' + age + ' år.');
}

greet(...person);
greet(...person2);
// Hi Espen, you are 29.


var names = ['Knut', 'Sverre'];
var final = ['Espen', ...names];
final.forEach(function(name){
  console.log('Hei ' + name);
});
