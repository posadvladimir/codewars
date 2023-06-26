# First non-repeating character

### Description

Write a function that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("").

### Examples

```javascript
    getFirstNonRepeatingCharacter('a'); // 'a'
    getFirstNonRepeatingCharacter('stress'); // 't'
    getFirstNonRepeatingCharacter('sTreSS'); // 'T'
    getFirstNonRepeatingCharacter('mOonMen'); // 'e'
    getFirstNonRepeatingCharacter('ttTrrR'); // ''
    getFirstNonRepeatingCharacter(''); // ''
```

[Link on codewars](https://www.codewars.com/kata/first-non-repeating-character)