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

var newList = []
for(var i = 0; i < list.length; i++) {
  if (newList.length === 0) {
    newList.push(list[0])
  } else if (list[i].qty > newList[newList.length-1].qty) {
    newList.push(list[i])
  } else {
    for (var j = 0; j < newList.length; j++) {
      if (list[i].qty < newList[j].qty) {
        newList.unshift(list[i])
        break;
      } else if (list[i].qty > newList[j].qty && list[i].qty <= newList[j+1].qty) {
        newList.splice(j+1, 0, list[i])
        break;
      }
    }
  }
};

for(var i = 0; i < newList.length; i++) {
  newList[i] = newList[i].name
}

console.log('sorted by qty:', newList.toString())