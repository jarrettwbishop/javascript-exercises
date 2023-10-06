/*
    # Exercise 11 - Get the Titles!

    You are given an array of objects that represent books with an author and a title that looks like this:

    ```javascript
    const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
    ]
    ```

    Your job is to write a function that takes the array and returns an array of titles:

    ```javascript
    getTheTitles(books) // ['Book','Book2']
*/

const getTheTitles = function(arr) {
    let result = [];
    arr.forEach((book) => result.push(book.title))
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
