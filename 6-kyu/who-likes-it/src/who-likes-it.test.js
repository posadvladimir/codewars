
const getLikes = require('./who-likes-it');

describe(('Who likes it?'), () => {
    test('[]', () => {
        expect(getLikes([])).toBe('no one likes this');
    })
    test('["Peter"]', () => {
        expect(getLikes(['Peter'])).toBe('Peter likes this');
    })
    test('["Jacob", "Alex"]', () => {
        expect(getLikes(['Jacob', 'Alex'])).toBe('Jacob and Alex like this');
    })
    test('["Max", "John", "Mark"]', () => {
        expect(getLikes(['Max', 'John', 'Mark'])).toBe('Max, John and Mark like this');
    })
    test('["Alex", "Jacob", "Mark", "Max"]', () => {
        expect(getLikes(['Alex', 'Jacob', 'Mark', 'Max'])).toBe('Alex, Jacob and 2 others like this');
    })
})