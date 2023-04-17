const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
    constructor() {
        this.rootElement = null;
    }

  root() {
    return this.rootElement;
  }

  add(data) {
    this.rootElement = addElementToTree (this.rootElement, data);

    function addElementToTree (node, data) {
        if (!node) {
            return new Node(data);
        }

        if (node.data === data) {
            return node;
        }

        if (data < node.data) {
            node.left = addElementToTree (node.left, data)
        } else {
            node.right = addElementToTree (node.right, data)
        }

        return node;
    }
  }

  has(data) {
    return searchElementToTree (this.rootElement, data);

    function searchElementToTree (node, data) {
        if (!node) {
            return false;
        }

        if (node.data === data) {
            return true;
        }

        if (data < node.data) {
            return searchElementToTree(node.left, data);
        } else if (data > node.data) {
            return searchElementToTree(node.right, data)
        }
    }
  }

  find(data) {
    return findElementToTree (this.rootElement, data);

    function findElementToTree (node, data) {
        if (!node) {
            return null;
        }

        if (node.data === data) {
            return node;
        }

        if (data < node.data) {
            return findElementToTree(node.left, data);
        } else if (data > node.data) {
            return findElementToTree(node.right, data)
        }
    }
  }

  remove(data) {
    this.rootElement = removeElementToTree(this.rootElement, data);

    function removeElementToTree(node, data) {
        if(!node) {
            return null;
        }

        if (data < node.data) {
            node.left = removeElementToTree(node.left, data);
            return node;
        } else if (data > node.data) {
            node.right = removeElementToTree(node.right, data);
            return node;
        } else {
            if (!node.left && !node.right) {
                return null;
            }
        }

        if (!node.left) {
            node = node.right;
            return node;
        } else if (!node.right) {
            node = node.left;
            return node;
        }


        let minimalRightThreeElement = node.right;

        while (minimalRightThreeElement.left) {
            minimalRightThreeElement = minimalRightThreeElement.left;
        }

        node.data = minimalRightThreeElement.data;

        node.right = removeElementToTree (node.right, minimalRightThreeElement.data);

        return node;
    }
  }

  min() {
    if(this.rootElement) {
        let nodeElementMin = this.rootElement;

        while (nodeElementMin.left) {
            nodeElementMin = nodeElementMin.left;
        }
    
        return nodeElementMin.data;
    }

    return;
  }

  max() {
    if(this.rootElement) {
        let nodeElementMax = this.rootElement;

        while (nodeElementMax.right) {
            nodeElementMax = nodeElementMax.right;
        }
    
        return nodeElementMax.data;
      }

    return;
    }
}

module.exports = {
  BinarySearchTree
};