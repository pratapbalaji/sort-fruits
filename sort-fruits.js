var list = [{
  'name': 'apple',
  'type': 'tree',
  'qty': 3
}, {
  'name': 'banana',
  'type': 'tree',
  'qty': 1
}, {
  'name': 'orange',
  'type': 'tree',
  'qty': 4
}, {
  'name': 'strawberry',
  'type': 'berry',
  'qty': 6
}, {
  'name': 'blueberry',
  'type': 'berry',
  'qty': 3
}];

var newList = list.sort(function (a, b) {
  return a.qty - b.qty
}).map(function (fruit) {
  return fruit.name
})

console.log('sorted by qty:', newList.toString())