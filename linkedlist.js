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

   function find(value){
    
    let counter = 0
    
    if(!head){
        return null
    }
    let tempNode = head
    while(tempNode.nextNode){
        if(tempNode.value == value){
            return counter
        }
        counter ++
        tempNode = tempNode.nextNode
    }
    return tempNode.value == value ? counter : null
   }

   function toString(){

     let listDisplay = ''
        if(!head){
            
            return 'There is nothing in this list'
        }
        let tempNode = head
        while(tempNode.nextNode){
            listDisplay += tempNode.value + ' -> '
            tempNode = tempNode.nextNode
            

        }
        listDisplay += tempNode.value

        return listDisplay
   }

   function insertAt(value, index){

    if(!head){
        head = nodeFactory(value, null)
        return
    }
    if(index == 0){
        head = nodeFactory(value, head)
        return
    }
    if(index > size()){
        append(value)
        return
    }
        let tempNode = head
        let previousNode = null
    for(let x = 0; x < index; x++){
        previousNode = tempNode
        tempNode = tempNode.nextNode
    }
        previousNode.nextNode = nodeFactory(value, tempNode)
   }
    
   return {append, prepend, getHead, size, getTail, getAtIndex, pop, checkListContains,find, toString, insertAt}
}

    


