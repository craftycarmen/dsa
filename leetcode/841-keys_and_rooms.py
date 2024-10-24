# 841. Keys and Rooms

# There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

# When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

# Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.


# Example 1:
# Input: rooms = [[1],[2],[3],[]]
# Output: true
# Explanation: 
# We visit room 0 and pick up key 1.
# We then visit room 1 and pick up key 2.
# We then visit room 2 and pick up key 3.
# We then visit room 3.
# Since we were able to visit every room, we return true.

# Example 2:
# Input: rooms = [[1,3],[3,0,1],[2],[0]]
# Output: false
# Explanation: We can not enter room number 2 since the only key that unlocks it is in that room.


'''
1. Create a stack and a set to keep track
2. Start wour stack with 0, with 0 being the key to the first room
3. While have keys via our stack:
3a. Pop off the top of the stack, which is a key
3b. Index into the rooms
4. If there are any keys not in seen, add them to our stack and seen
5. Check if seen is equal to the length of rooms
6. Return true if so, false otherwise
'''

def canVisitAllRooms(self, rooms):
    stack = [0]
    seen = set()

    while stack:
        key = stack.pop()

        for k in rooms[key]:
            if k not in seen:
                stack.append(k)

        seen.add(key)

    return len(seen) == len(rooms)
