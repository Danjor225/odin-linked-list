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


   return {append, prepend, getHead, size}
}

    


