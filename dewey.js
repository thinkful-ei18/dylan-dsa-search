'use strict';
const library = [
  { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
  { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
  {
    author: 'Stroustrup., Bjarne',
    dewey: '005.133',
    title: 'The C++ Programming Language'
  },
  {
    author: 'Crockford, Douglas',
    dewey: '005.2762',
    title: 'JavaScript: The Good Parts'
  },
  {
    author: 'Flanagan, David',
    dewey: '005.2762',
    title: 'JavaScript: The Definitive Guide'
  },
  {
    author: 'Schmidt, Meinhard',
    dewey: '005.44684',
    title: 'Windows Vista for Dummies'
  },
  { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
  {
    author: 'Humphries, Russell, Dr.',
    dewey: '231.7652',
    title: 'Starlight and Time'
  },
  {
    author: 'Jane, Frederick Thomas',
    dewey: '623.82509051',
    title: "Jane's Fighting Ships"
  },
  {
    author: 'Norris, Chuck',
    dewey: '796.8092',
    title: 'The Official Chuck Norris Fact Book'
  }
];

function findBook(library, book) {
  let matches = library;
  matches = deweySearch(matches, book.dewey);
  if (matches.length === 1) {
    return matches;
  }
  matches = authorSearch(matches, book.author);
  if (matches.length === 1) {
    return matches;
  }
  matches = titleSearch(matches, book.title);
  if (matches.length === 1) {
    return matches;
  }
  return 'No matches';
}

function deweySearch(library, dewey) {
  if (dewey === undefined) return library;
  return library.filter(book => book.dewey === dewey);
}

function authorSearch(library, author) {
  if (author === undefined) return library;
  return library.filter(book => book.author === author);
}

function titleSearch(library, title) {
  if (title === undefined) return library;
  return library.filter(book => book.title === title);
}

const book = {
  title: 'JavaScript: The Definitive Guide'
};
console.log(findBook(library, book));
