const candyObj = {
    type: '3 muskateers',
    delicous: true,
    eaten: false
}

const newCandyObj = {
    ...candyObj,
    eaten: true,
    type: 'Snickers'
}
console.log(newCandyObj)