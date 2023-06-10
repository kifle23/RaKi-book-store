import getBooks from './getBooks.js';
import { getLikes, getLikesAfterPost } from './getLikes.js';
import postLikes from './postLikes.js';
import bookCount from './bookCount.js';
import Popup from './popup.js';
import getComments from './getComments.js';

const bookGrid = document.querySelector('.book-grid');
bookGrid.innerHTML = '';

const display = async () => {
  try {
    const books = await getBooks();
    bookCount(books.length);
    const getTheLikes = await getLikes();
    books.forEach((book, index) => {
      const id = getTheLikes.findIndex((like) => +like.item_id === index);
      const likes = id >= 0 ? getTheLikes[id].likes : 0;

      const thumbnail = document.createElement('img');
      thumbnail.classList.add('thumbnail');
      thumbnail.src = book.coverImageUrl;

      const bookTime = document.createElement('div');
      bookTime.classList.add('book-time');
      bookTime.textContent = `Published in: ${book.publishYear}`;

      const thumbnailRow = document.createElement('div');
      thumbnailRow.classList.add('thumbnail-row');
      thumbnailRow.append(thumbnail, bookTime);

      const bookTitle = document.createElement('p');
      bookTitle.classList.add('book-title');
      bookTitle.textContent = book.title;

      const bookLike = document.createElement('p');
      bookLike.classList.add('book-like');
      bookLike.textContent = `❤ ${likes} Likes`;
      bookLike.addEventListener('click', async () => {
        if (postLikes(id)) {
          const getPostedLikes = await getLikesAfterPost();
          if (getPostedLikes) {
            const updatedLikes = getPostedLikes[id].likes;
            bookLike.textContent = `❤ ${updatedLikes} Likes`;
          }
        }
      });

      const bookInfo = document.createElement('div');
      bookInfo.classList.add('book-info');
      bookInfo.append(bookTitle, bookLike);

      const bookInfoGrid = document.createElement('div');
      bookInfoGrid.classList.add('book-info-grid');
      bookInfoGrid.append(bookInfo);

      const bookPreview = document.createElement('div');
      bookPreview.classList.add('book-preview');
      bookPreview.append(thumbnailRow, bookInfoGrid);

      const commentButton = document.createElement('button');
      commentButton.classList.add('comment-button');
      commentButton.textContent = 'Add Comment';
      commentButton.addEventListener('click', () => {
        // show comment popup for this book
        const popup = new Popup(index);
        popup.showPopup(book);
        // get comments for this book and display them in the popup
        getComments(index).then((comments) => {
          popup.displayComments(comments);
        });
        // add event listener to the popup's form
        const popupForm = document.querySelector('.popup__new-comment-button');
        popupForm.addEventListener('submit', (e) => {
          e.preventDefault();
          popup.addComment(index);
        });
      });
      bookPreview.appendChild(commentButton);

      bookGrid.appendChild(bookPreview);
    });
  } catch (error) {
    bookGrid.innerHTML = `<p class="error-message">${error.message}</p>`;
  }
};

export default display;
