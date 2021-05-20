import React, { useState, useEffect } from "react";
import Button from "../components/Button/Button";
import Cards from "../components/Cards/Cards";
import Filter from "../components/Filter/Filter";
import Header from "../components/Header/Header";
import Pagination from "../components/Pagination/Pagination";
import SearchBooks from "../scripts/SearchBooks";

export default () => {
  const [bookName, setbookName] = useState("");
  const [result, setresult] = useState([]);
  const [totalItens, settotalItens] = useState(0);
  const [page, setPage] = useState(0);

  let time = null;
  const handlekeyup = (event) => {
    clearTimeout(time);
    time = setTimeout(() => {
      setbookName(event.target.value);
    }, 1000);
  };

  const serachBooks = () => {
    SearchBooks(bookName, page).then((resp) => {
      setresult(resp.items);
      settotalItens(resp.totalItems);
    });
  };

  useEffect(() => {
    serachBooks();
  }, [page]);

  return (
    <>
      <Header />
      <div className="flex flex-row md:flex-row justify-center items-center">
        <Filter
          type="text"
          class="m-5 h-10 flex-grow rounded focus:outline-none focus:ring-2 focus:ring-blue-600 border border-blue-700"
          placeholder="Digite o nome do livro ou parte dele"
          onChange={handlekeyup}
        />
        <div className="m-5 flex-grow-0">
          <Button
            text="Procurar"
            className="rounded border border-blue-700 p-2 m-0 bg-blue-700 text-gray-50"
            click={serachBooks}
          />
        </div>
      </div>
      <Cards result={result} />
      <Pagination changePage={setPage} totalRecords={totalItens} />
    </>
  );
};
