const handler = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: handler.addBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: handler.getAllBook,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: handler.getBookById,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: handler.editBookById,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: handler.deleteBookById,
  },
  {
    method: '*',
    path: '/{any*}',
    handler: () => 'Halaman tidak ditemukan',
  },
];

module.exports = routes;
