# 146. LRU Cache

# Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

# Implement the LRUCache class:

# LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
# int get(int key) Return the value of the key if the key exists, otherwise return -1.
# void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
# The functions get and put must each run in O(1) average time complexity.

 

# Example 1:

# Input
# ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
# [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
# Output
# [null, null, null, 1, null, -1, null, -1, 3, 4]

# Explanation
# LRUCache lRUCache = new LRUCache(2);
# lRUCache.put(1, 1); // cache is {1=1}
# lRUCache.put(2, 2); // cache is {1=1, 2=2}
# lRUCache.get(1);    // return 1
# lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
# lRUCache.get(2);    // returns -1 (not found)
# lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
# lRUCache.get(1);    // return -1 (not found)
# lRUCache.get(3);    // return 3
# lRUCache.get(4);    // return 4
 

# Constraints:

# 1 <= capacity <= 3000
# 0 <= key <= 104
# 0 <= value <= 105
# At most 2 * 105 calls will be made to get and put.

class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.DLL = DoublyLinkedList()
        self.hash = {}

    def get(self, key: int) -> int:
        if key not in self.hash:
            return -1
        
        self.DLL.remove(self.hash[key])
        self.hash[key] = self.DLL.push(self.hash[key])

        return self.hash[key].val

    def put(self, key: int, value: int) -> None:
        if key in self.hash:
            self.DLL.remove(self.hash[key])

        newNode = Node(key, value)
        self.hash[key] = self.DLL.push(newNode)

        if self.DLL.length > self.capacity:
            lru = self.DLL.head.next
            del self.hash[lru.key]
            self.DLL.remove(lru)


class Node:
    def __init__(self, key, val):
        self.key = key
        self.val = val
        self.next = None
        self.prev = None


class DoublyLinkedList:
    def __init__(self):
        # Dummy nodes to take care of edge cases
        self.head = Node(None, None)
        self.tail = Node(None, None)

        self.head.next = self.tail
        self.tail.prev = self.head

        self.length = 0

    def remove(self, node):
        prev = node.prev
        nxt = node.next

        prev.next = nxt
        nxt.prev = prev

        self.length -= 1

    def push(self, node):
        prev = self.tail.prev
        nxt = self.tail

        prev.next = node
        nxt.prev = node

        node.next = nxt
        node.prev = prev

        self.length += 1

        return node



# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
