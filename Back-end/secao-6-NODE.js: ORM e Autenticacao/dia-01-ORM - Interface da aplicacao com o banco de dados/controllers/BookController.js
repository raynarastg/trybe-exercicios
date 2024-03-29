const BookService = require('../services/BookService');

const getAll = async (_req, res) => {
  const books = await BookService.getAll();
  res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const bookId = await BookService.getById(id);
  if (!bookId) {
    return res.status(404).json({ message: "Book not found" })
  }
  res.status(200).json(bookId);
}

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const book = await BookService.create({ title, author, pageQuantity });

  res.status(201).json(book);
}

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  const updatedBook = await BookService.update(id, { title, author, pageQuantity });
  if (!updatedBook) {
    return res.status(404).json({ message: "Book not found!"})
  }
  return res.status(200).json({ message: "Book updated!"})
}

const remove = async (req, res) => {
  const { id } = req.params;
  const removedBook = await BookService.remove(id);

  if (!removedBook) {
    return res.status(404).json({ message: "Books not found" });
  }

  return res.status(200).json({ message: "Book removed" });
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};