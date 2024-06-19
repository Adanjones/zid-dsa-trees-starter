class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    // If the tree is empty, then this key being inserted is the root node of the tree.
    if (this.key == null) {
        this.key = key;
        this.value = value;
    }

    /* If the tree already exists, then start at the root,
       and compare it to the key that you want to insert.
       If the new key is less than the node's key,
       then the new node needs to live in the left-hand branch. */
    else if (key < this.key) {
        /* If the existing node does not have a left child,
           meaning that the `left` pointer is empty,
           then you can just instantiate and insert the new node
           as the left child of that node, passing `this` as the parent. */
        if (this.left == null) {
            this.left = new BinarySearchTree(key, value, this);
        }
        /* If the node has an existing left child,
           then you recursively call the `insert()` method
           so that the node is added further down the tree. */
        else {
            this.left.insert(key, value);
        }
    }
    /* Similarly, if the new key is greater than the node's key,
       then you do the same thing, but on the right-hand side. */
    else {
        if (this.right == null) {
            this.right = new BinarySearchTree(key, value, this);
        }
        else {
            this.right.insert(key, value);
        }
    }
}

  find(key) {
    // If the item is found at the root, then return the value.that you are looking for is less than the root,
  if (this.key == key) {
    //console.log(this);
    return this.value;
  }
  /* If the item that you are looking for is less than the root,
    then follow the left child.
    If there is an existing left child,
    then recursively check its left and/of right child
    until you find the item. */
  else if (key < this.key && this.left) {
    return this.left.find(key);
  }
  /* If the item that you are looking for is greater
    then follow the right child.
    If there is an existing right child,
    then recursively check its left and/or right child
    until you find the item. */
  else if (key > this.key && this.right) {
    return this.right.find(key);
  }
  // You have searched the ree, and the item isn't in the tree.
  else {
    throw new Error(`Key Not Found`);
  }
}

find(key){
  // If the item is found at the root, then return the value.
  if (this.key == key) {
    return this.key;
  }
  /* If the item that you are looking for is less than the root
    then follow the left child.
    If there is an existing left child,
    then recursively check its left and/or right child
    until you find the item. */
  else if ( key < this.key && this.left) {
    return this.left.find(key);
  }
  /* If the item that you are looking for is greater than the root
    then follow the right child.
    If there is an existing right child,
    then recursively check its left and/of right child
    until you find the item. */
  else if ( key > this.key && this.right) {
    return this.right.find(key);
  }
  // You have searched the tree, and the item isn't in the tree.
  else {
    throw new Error(`Key Not Found`);
  }
}

  getHeight(currentHeight = 0) {
    // BASE CASE:
    // If the current node doesn't have a left or right child,
    // then the base case is reached, and the function can return the height.
    if (!this.left && !this.right) return currentHeight;

    // RECURSIVE CASE:
    // Otherwise, compute the new height.
    const newHeight = currentHeight + 1;

    // If there's no left child, recurse down the right subtree only,
    // passing down the height of the current node.
    if (!this.left) return this.right.getHeight(newHeight);

    // If there's no right child, recurse down the left subtree only,
    // passing down the height of the current node.
    if (!this.right) return this.left.getHeight(newHeight);

    // If both children exist, recurse down both subtrees,
    // passing down the height of the current node.
    const leftHeight = this.left.getHeight(newHeight);
    const rightHeight = this.right.getHeight(newHeight);

    // Return the greater of the left or right subtree heights.
    return Math.max(leftHeight, rightHeight);
  }
}

const bst = new BinarySearchTree(5);
bst.insert(2);
bst.insert(19);
bst.insert(15);
bst.insert(28);
bst.insert(18, "You found me!");
console.log(bst.find(18));