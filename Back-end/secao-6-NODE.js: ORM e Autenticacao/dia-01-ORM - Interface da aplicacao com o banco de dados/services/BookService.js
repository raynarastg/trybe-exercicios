const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
}

const getById = async (id) => {
  const bookId = await Book.findById(id);
  return bookId;
}

const create = async ({ title, author, pageQuantity }) => {
  const book = await Book.create({title, author, pageQuantity});
  return book;
}

const update = async (id, { title, author, pageQuantity }) => {
  const [updatedBook] = await Book.update(
    {
      title,
      author,
      pageQuantity,
    },
    {
      where: { id }
    },
  );

  return updatedBook;
};

const remove = async (id) => {
  const removedBook = await Book.destroy(
    { where: { id } },
  );
  return removedBook;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};