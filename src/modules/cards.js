const cards = () => {
  const bookGrid = document.querySelector('.book-grid');

  for (let i = 1; i <= 8; i += 1) {
    const thumbnail = document.createElement('img');
    thumbnail.classList.add('thumbnail');
    thumbnail.src = `thumbnails/thumbnail-${i}.webp`;

    const bookTime = document.createElement('div');
    bookTime.classList.add('book-time');
    bookTime.textContent = '34:41';

    const thumbnailRow = document.createElement('div');
    thumbnailRow.classList.add('thumbnail-row');
    thumbnailRow.append(thumbnail, bookTime);

    const profilePicture = new Image();
    profilePicture.classList.add('profile-picture');
    profilePicture.src = 'channel-pictures/channel-1.jpeg';

    const channelPicture = document.createElement('div');
    channelPicture.classList.add('channel-picture');
    channelPicture.appendChild(profilePicture);

    const bookTitle = document.createElement('p');
    bookTitle.classList.add('book-title');
    bookTitle.textContent = 'EOTC TV | ወቅታዊጉዳይ | የቅዱስ ሲኖዶስ መግለጫ አንድምታ';

    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('book-author');
    bookAuthor.textContent = 'EOTC TV';

    const bookStats = document.createElement('p');
    bookStats.classList.add('book-stats');
    bookStats.textContent = '1M views · 49 minutes ago';

    const bookInfo = document.createElement('div');
    bookInfo.classList.add('book-info');
    bookInfo.append(bookTitle, bookAuthor, bookStats);

    const bookInfoGrid = document.createElement('div');
    bookInfoGrid.classList.add('book-info-grid');
    bookInfoGrid.append(channelPicture, bookInfo);

    const bookPreview = document.createElement('div');
    bookPreview.classList.add('book-preview');
    bookPreview.append(thumbnailRow, bookInfoGrid);

    bookGrid.appendChild(bookPreview);
  }
};

export default cards;
