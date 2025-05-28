import nodeFactory from './nodeFactory.js'



export default function linkedListFactory(){
    let head = null
    
    function append(value){
        let newNode = nodeFactory(value, null)
        if(!head){
            head = newNode
            return
        }
        let tempNode = head
        while(tempNode.nextNode){
            tempNode = tempNode.nextNode

        }
        tempNode.nextNode = newNode
    }

   function prepend(value){
    let newNode = nodeFactory(value, head)
    head = newNode

   }

   function size(){
    if(!head){
        return 0
    }
    let counter = 1
    let tempNode = head
    while(tempNode.nextNode){
        counter ++
        tempNode = tempNode.nextNode
    }
    return counter

   }

   function getHead(){
    return head
   }

   function getTail(){
    if(!head){
        return head
    }
    let tempNode = head
    while(tempNode.nextNode){
        tempNode = tempNode.nextNode
    }
    return tempNode
   }


   function getAtIndex(index){
    if(index == 0){
        return null
    }
    let tempNode = head
    for(let x = 1; x < index; x++){
        tempNode = tempNode.nextNode
    }
    return tempNode
   }

   function pop(){

        if(!head){
            return
        }
        let tempNode = head
        while(tempNode.nextNode.nextNode){
            tempNode = tempNode.nextNode

        }
        tempNode.nextNode = null

   }

   function checkListContains(value){
    if(!head){
        return false
    }
    let tempNode = head
    while(tempNode.nextNode){
        if(tempNode.value == value){
            return true
        }
        tempNode = tempNode.nextNode
    }
    return tempNode.value == value
   }
    
   return {append, prepend, getHead, size, getTail, getAtIndex, pop, checkListContains}
}

    


