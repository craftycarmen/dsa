// 146. LRU Cache

// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.



// Example 1:

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4


// Constraints:

// 1 <= capacity <= 3000
// 0 <= key <= 104
// 0 <= value <= 105
// At most 2 * 105 calls will be made to get and put.

var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.hash = {};
    this.DLL = new DoublyLinkedList();
}

LRUCache.prototype.get = function (key) {
    if (!this.hash[key]) return -1;

    this.DLL.remove(this.hash[key]);
    this.hash[key] = this.DLL.push(this.hash[key]);

    return this.hash[key].val;
}

LRUCache.prototype.put = function (key, value) {
    if (this.hash[key]) this.DLL.remove(this.hash[key]);

    const newNode = new Node(key, value);
    this.hash[key] = this.DLL.push(newNode);

    if (this.DLL.length > this.capacity) {
        const lru = this.DLL.head.next;
        delete this.hash[lru.key];
        this.DLL.remove(lru);
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = new Node(null, null);
        this.tail = new Node(null, null);

        this.head.next = this.tail;
        this.tail.prev = this.head;

        this.length = 0;
    }

    remove(node) {
        let prev = node.prev;
        let nxt = node.next;

        prev.next = nxt;
        nxt.prev = prev;

        this.length--;
    }

    push(node) {
        let prev = this.tail.prev;
        let nxt = this.tail;

        prev.next = node;
        nxt.prev = node;

        node.next = nxt;
        node.prev = prev;

        this.length++;

        return node;
    }
}

class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
