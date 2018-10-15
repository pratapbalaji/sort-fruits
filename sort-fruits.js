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

var newlist = []
for(var i = 0; i < list.length; i++) {
  if (newlist.length === 0) {
    newlist.push(list[0])
  } else {
    for (var j = 0; j < newlist.length; j++) {
      if (list[i].qty < newlist[j].qty) {
        newlist.unshift(list[i])
        break;
      } else if (list[i].qty > newlist[j].qty && list[i].qty <= newlist[j+1].qty) {
        newlist.splice(j+1, 0, list[i])
        break;
      } else if (list[i].qty > newlist[newlist.length-1].qty) {
        newlist.push(list[i])
        break;
      }
    }
  }
};

for(var i = 0; i < newlist.length; i++) {
  newlist[i] = newlist[i].name
}

console.log('sorted by qty:', newlist.toString())