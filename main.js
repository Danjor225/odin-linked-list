import linkedListFactory from './linkedlist.js'


let testingLinkList = linkedListFactory()


testingLinkList.append(90)
testingLinkList.append(7)
testingLinkList.append(2)
console.log(testingLinkList.getHead())
testingLinkList.prepend(3)
console.log(testingLinkList.getHead())
console.log(testingLinkList.size())
