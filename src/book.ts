export class Book {
  private static readonly BOOKS_PATH =
    '/home/nikola/Documents/english/lute/books';
  private static readonly RAW_BOOKS_PATH = './raw-books';
  static async bookExists(bookName: string): Promise<void> {
    const path = `${this.RAW_BOOKS_PATH}/${bookName}`;
    const file = Bun.file(path);

    const exists = await file.exists();

    if (!exists) throw new Error('Book does not exist');
  }
}
