# Parsing data to display book reviews

## Introduction

This is a simple application that parses JSON data about books and reviews, then displays the reviews associated with each book.

## Your task

You have been given the task to implement two functions in the `src/app/app.js` file.

### (1) parseBooksData function

- The `parseBooksData(books, reviews)` function should that create an array of `BookWithReviews` objects, by parsing the two arrays passed in (`books` and `reviews`).
- Sample JSON data for books and reviews are in the `app/dataset/books.json` and `app/dataset/reviews.json` files.
- The `BookWithReviews` class is defined in the `app/model.js` file; a `BookWithReviews` object should contain the `id`, `title` and all reviews matched by `bookId` attribute from `reviews` array.

### (2) displayBooksWithReviews function

The `displayBooksWithReviews(parentNode, booksWithReviews)` function should append DOM nodes to the passed `parentNode`, to render the book review information stored in the passed array, which contains a collection of `BookWithReviews` objects.

For the sample book and review data in the `app/dataset` folder, the following DOM tree should be created under the `parentNode`:

```html
  <ol>
    <li>
      <span>Some book title</span>
      <ul>
        <li>Great book! by John</li>
        <li>Worth reading. by Alice</li>
      </ul>
    </li>
    <li>
      <span>Another book title</span>
      <ul>
        <li>Waste of time :( by Joe</li>
      </ul>
    </li>
    <li>
      <span>Best book title ever</span>
    </li>
  </ol>
```

## Hints

- The unit tests check how your code works with sample data.
- You're not expected to modify any of the existing files, other than `src/app/app.js`; you can add new files if it helps you.
