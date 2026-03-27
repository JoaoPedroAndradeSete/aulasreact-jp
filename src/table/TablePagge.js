import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../api";

const TablePagge = (props) => {
  const [books, setBooks] = useState([]);

  // UseEffect com parametro [] (vazio dentro) roda a função que está dentro (no caso getBooks)
  // quando carrega o componente
  useEffect(() => {
    getBooks();
  }, []);

  // Pegar os livros do servidor
  const getBooks = () => {
    api
      .get("/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  };

  // Deleta algum livro do servidor dado o id desse livro
  const deleteFromServer = (id) => {
    api.delete("/books/" + id).then((res) => {
      console.log(res);
      getBooks();
    });
  };

  return (
    <div>
      <h1>Table Page</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <td> | </td>
            <th>Title</th>
            <td> | </td>
            <th>Author</th>
            <td> | </td>
            <th>Deletar</th>
          </tr>
        </thead>
        <tbody>
          {/* Transformo cada livro em livros numa linha de tabela com seus respectivos atributos */}
          {books.map((book) => (
            <tr>
              <td>{book.id}</td>
              <td> | </td>
              <td>{book.title}</td>
              <td> | </td>
              <td>{book.author}</td>
              <td> | </td>
              {/* Quando passa parâmetro específico, usa-se a notação de função anonima */}
              <td onClick={() => deleteFromServer(book.id)}>X</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TablePagge.propTypes = {};

export default TablePagge;
