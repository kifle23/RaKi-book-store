const bookCount = (count) => {
  const counter = document.getElementById('book-count');
  counter.innerHTML = `(${count})`;
};

export default bookCount;
