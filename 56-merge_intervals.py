# 56. Merge Intervals

# Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.


# Example 1:
# Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
# Output: [[1,6],[8,10],[15,18]]
# Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
# Example 2:

# Input: intervals = [[1,4],[4,5]]
# Output: [[1,5]]
# Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

# Constraints:
# 1 <= intervals.length <= 104
# intervals[i].length == 2
# 0 <= starti <= endi <= 104

def merge(self, intervals):
    # intervals.sort()
    # # sort the list of intervals so it ensures that the intervals are in ascending order based on their start times, which simplifies the merging process

    # stack = [intervals[0]]
    # # initialize a stack with the first interval from the sorted list, which will be used to keep track of the merged intervals

    # for i in range(1, len(intervals)):
    #     # iterate through the remaining intervals starting from the second interval (index 1)

    #     curr_int = {
    #         'start': intervals[i][0],
    #         'end': intervals[i][1]
    #     }
    #     # extract the current interval

    #     last_int = {
    #         'start': intervals[-1][0],
    #         'end': stack[-1][1]
    #     }
    #     # extract the last interval, which represents the most recently merged interval

    #     if curr_int['start'] <= last_int['end'] and curr_int['end'] > last_int['end']:
    #         stack[-1][1] = curr_int['end']
    #         # if the curr interval overlaps with the last interval in the stack, merge them by extending the end time of the last interval in the stack to the end time of the curr interval

    #     elif curr_int['start'] > last_int['end']:
    #         stack.append(intervals[i])
    #         # if curr interval does not overlap, add it to the stack as a new interval

    # return stack
    
    intervals.sort()
    stack = [intervals[0]]

    for i in range(1, len(intervals)):
        curr_int = {
            'start': intervals[i][0],
            'end': intervals[i][0]
        }

        last_int = {
            'start': stack[-1][0],
            'end': stack[-1][1]
        }

        if curr_int['start'] <= last_int['end']:
            stack[-1][1] = max(stack[-1][1], curr_int['end'])
            # if the curr interval starts before or at the same time as the end of the last interval in the stack, it indicates overlap
            # when it overlaps, the end time of the last interval in the stack needs to be updated to reflecte the merge interval
            # the max func ensurs end time of last interval in the stack is set to the later of the two end times, which effectively merges the two intervals, extending the time to cover both

        else:
            stack.append(intervals[i])
            # if no overlap, curr interval is added as a new interval to the end stack
    
    return stack
