import { Book } from './book';

const bookName = '';

if (bookName.length === 0) throw new Error('Book name is empty');

Book.bookExists(bookName);

const bookContent = await Book.getStringBook(bookName);
const formattedBookContent = Book.formatBook(bookContent);

await Book.saveBook(bookName, formattedBookContent);

console.log('Book saved sucessfully');
