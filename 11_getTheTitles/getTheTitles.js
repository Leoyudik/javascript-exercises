// const books = [
//   {
//     title: 'Book',
//     author: 'Name'
//   },
//   {
//     title: 'Book2',
//     author: 'Name2'
//   }
// ]

const getTheTitles = function(array) {
    let titles = array.map(item => item.title);
    return titles;

};
//['Book','Book2']
// getTheTitles(books)

// Do not edit below this line
module.exports = getTheTitles;
