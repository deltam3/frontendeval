import React from "react";
import { useState } from "react";
import "./Timer.css";

function Timer({ timer }) {
  return (
    <li>
      <h1>{timer.id}</h1>
    </li>
  );
}

export default Timer;

// import BookShow from './BookShow';
// function BookList({ books, onDelete, onEdit }) {
//   const renderedBooks = books.map((book) => {
//     return (
//       <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
//     );
//   });
//   return <div className="book-list">{renderedBooks}</div>;
// }
// export default BookList;
