// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
      traverse(this, array)
          return array
    }
  }
  
  const traverse = (node, array) => {
      if(!node) return
      array.push(node.name)
      if(node.children.length > 0)
          node.children.forEach(child => {			
              traverse(child, array)
          })
  }
  
  // Do not edit the line below.
  exports.Node = Node;
  