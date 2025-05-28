import linkedListFactory from './linkedlist.js'


let testingLinkList = linkedListFactory()

console.log(testingLinkList.getAtIndex(1))
testingLinkList.append(90)
console.log(testingLinkList.getAtIndex(1))
testingLinkList.append(7)
testingLinkList.append(2)

console.log(testingLinkList.checkListContains(2))
console.log(testingLinkList.checkListContains(9))
console.log(testingLinkList.checkListContains(7))
console.log(testingLinkList.checkListContains(10))
console.log(testingLinkList.find(90))
console.log(testingLinkList.find(7))
console.log(testingLinkList.find(2))
console.log(testingLinkList.find(910))

console.log(testingLinkList.toString())
testingLinkList.insertAt(69, 1)
console.log(testingLinkList.toString())
testingLinkList.insertAt(70,0)
testingLinkList.insertAt(100,100)
console.log(testingLinkList.toString())

// console.log(testingLinkList.getHead())
// testingLinkList.prepend(3)
// console.log(testingLinkList.getHead())
// console.log(testingLinkList.size())
// console.log(testingLinkList.getTail())
// console.log('Get Index:')
// console.log(testingLinkList.getAtIndex(1))
// console.log(testingLinkList.getAtIndex(3))