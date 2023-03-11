# 20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

`1` Example 1:

```
Input: s = "()"
Output: true
```

`2` Example 2:

```
Input: s = "()[]{}"
Output: true
```

`3` Example 3:

```
Input: s = "(]"
Output: false
```

Constraints:

```
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
```
