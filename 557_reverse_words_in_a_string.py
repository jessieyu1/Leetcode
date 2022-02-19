# Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
# Input: s = "Let's take LeetCode contest"
# Output: "s'teL ekat edoCteeL tsetnoc"

def reverseWords(s):
    wordList = s.split()
    newList = []
    for w in wordList:
        w = w[::-1]
        newList.append(w)
    return ' '.join(newList)


s = "Let's take LeetCode contest"
print(reverseWords(s))
