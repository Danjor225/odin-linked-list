import linkedListFactory from './linkedlist.js'


let testingLinkList = linkedListFactory()

console.log(testingLinkList.getAtIndex(1))
testingLinkList.append(90)
console.log(testingLinkList.getAtIndex(1))
testingLinkList.append(7)
testingLinkList.append(2)
console.log(testingLinkList.getTail())
testingLinkList.pop()
console.log(testingLinkList.getTail())
// console.log(testingLinkList.getHead())
// testingLinkList.prepend(3)
// console.log(testingLinkList.getHead())
// console.log(testingLinkList.size())
// console.log(testingLinkList.getTail())
// console.log('Get Index:')
// console.log(testingLinkList.getAtIndex(1))
// console.log(testingLinkList.getAtIndex(3))