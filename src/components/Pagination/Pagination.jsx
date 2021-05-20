import React, { useState, useEffect } from "react";

const Pagination = (props) => {
  const { totalRecords } = props;
  const [totalPage, settotalPage] = useState(0);
  const [currentPageNumber, setcurrentPageNumber] = useState(0);

  useEffect(() => {
    settotalPage(Math.ceil(props.totalRecords / 10));
  }, [totalRecords]);

  const nextPage = () => {
    if (currentPageNumber < totalPage - 1) {
      setcurrentPageNumber(currentPageNumber + 1);
      props.changePage(currentPageNumber + 1);
    }
  };

  const jumpToLastPage = () => {
    setcurrentPageNumber(totalPage - 1);
    props.changePage(totalPage - 1);
  };

  const previousPage = () => {
    if (currentPageNumber > 0) {
      setcurrentPageNumber(currentPageNumber - 1);
      props.changePage(currentPageNumber - 1);
    }
  };

  const jumpToFirstPage = () => {
    setcurrentPageNumber(0);
    props.changePage(0);
  };

  return (
    <div className="flex justify-center my-4" role="navigation" aria-label="Page Navigation">
      <div className="flex items-center">
        <button aria-label={`Jump to First Page`} className="text-gray-800" onClick={jumpToFirstPage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
        <button aria-label={`Previous Page`} onClick={previousPage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button key={"01"} aria-label={`Page`} className="px-2 py-1 rounded  mr-1">
          {currentPageNumber + 1}
        </button>
        <button aria-label={`Next Page`} onClick={nextPage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <button aria-label={`Jump to Last Page`} className="text-gray-800" onClick={jumpToLastPage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
