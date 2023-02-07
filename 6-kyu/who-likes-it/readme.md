# Who likes it?

### Description

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples.

Note: For 4 or more names, the number in "and 2 others" simply increases.

### Examples

```javascript
getLikes([]); // no one likes this
getLikes(['Peter']); // Peter likes this
getLikes(['Jacob', 'Alex']); // Jacob and Alex like this
getLikes(['Max', 'John', 'Mark']); // Max, John and Mark like this
getLikes(['Alex', 'Jacob', 'Mark', 'Max']); // Alex, Jacob and 2 others like this
```

[Link on codewars](https://www.codewars.com/kata/who-likes-it)