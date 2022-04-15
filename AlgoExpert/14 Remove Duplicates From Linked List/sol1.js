function removeDuplicatesFromLinkedList(linkedList) {
    let i = 0
      let baseNode = linkedList
      let nextNode = linkedList.next
      while(nextNode){
          if(baseNode.value != nextNode.value ){
              baseNode.next = nextNode
              baseNode = nextNode
          }
          if(nextNode.next === null) baseNode.next = null
          nextNode = nextNode.next
      }
      return linkedList
  }