const OPEN_LIBRARY_API_URL = 'https://openlibrary.org';

const fetchScienceFictionBooks = async () => {
  const response = await fetch(
    `${OPEN_LIBRARY_API_URL}/subjects/science_fiction.json?limit=18`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch Science Fiction books data');
  }
  const data = await response.json();
  return data.works;
};

const formatBookData = (book) => {
  const bookData = {
    title: book.title,
    coverImageUrl: `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`,
    publishYear: book.first_publish_year,
  };
  return bookData;
};

const getBooks = async () => {
  const books = await fetchScienceFictionBooks();
  const formattedBooks = books.map((book) => formatBookData(book));
  return formattedBooks;
};

export default getBooks;
