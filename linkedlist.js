import nodeFactory from './nodeFactory.js'



export default function linkedListFactory(){
    let head = null
    
    function append(value){
        let newNode = nodeFactory(value, null)
        if(!head){
            head = newNode
            return head
        }
        let tempNode = head
        while(tempNode.nextNode){
            tempNode = tempNode.nextNode

        }
        tempNode.nextNode = newNode
    }

   

    return {append}
}

    


