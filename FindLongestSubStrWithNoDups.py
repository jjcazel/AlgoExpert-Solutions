'''
Given a string, find the length of the longest substring without any repeating characters. If there are multiple substrings with the same maximum length, return any one.
'''
# O(n) time and O(min(n, a) space where n is the length of the input string and a is the
# alphabet represented in our string
def longestSubstringWithoutDuplication(string):
    longest_substr = [0, 1] # ["a"]
    last_seen = {}  
    start_idx = 0 
    
    for end_idx in range(len(string)): # 3
        curr_char = string[end_idx] # "b"
        if curr_char in last_seen and last_seen[curr_char] >= start_idx:
            start_idx = last_seen[curr_char] + 1
            
        last_seen[curr_char] = end_idx

        if end_idx + 1 - start_idx > longest_substr[1] - longest_substr[0]:
            longest_substr = [start_idx, end_idx + 1]

    start, end = longest_substr
    return string[start:end]
