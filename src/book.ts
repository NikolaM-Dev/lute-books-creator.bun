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

  static async getStringBook(bookName: string): Promise<string> {
    const path = `${this.RAW_BOOKS_PATH}/${bookName}`;
    const file = Bun.file(path);

    try {
      return await file.text();
    } catch (error) {
      console.error(error);
      throw new Error('Error reading file');
    }
  }

  static async saveBook(bookName: string, bookContent: string): Promise<void> {
    const path = `${this.BOOKS_PATH}/${bookName}`;

    try {
      await Bun.write(path, bookContent);
    } catch (error) {
      console.error(error);
      throw new Error('Error writing file');
    }
  }

  static formatBook(bookContent: string): string {
    return bookContent.replaceAll('\n', '\n\n');
  }
}
