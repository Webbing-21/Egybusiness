import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import './pagination.css'

export default function PaginationComponent({ setCurrentPage , totalProducts, productsPerPage}) {
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setInternalCurrentPage] = useState(1);
  const pagesPerSet = 10;

  const totalPages = Math.ceil(totalProducts / productsPerPage);


  const handlePageChange = (pageNumber) => {
    setInternalCurrentPage(pageNumber);
    setCurrentPage(pageNumber);
  };

  const handleShowMorePages = () => {
    if (startPage + pagesPerSet <= totalPages) {
      setStartPage(startPage + pagesPerSet);
    }
  };

  const handleShowPreviousPages = () => {
    if (startPage - pagesPerSet >= 1) {
      setStartPage(startPage - pagesPerSet);
    }
  };

  const handleShowLastPages = () => {
    setStartPage(Math.max(1, totalPages - pagesPerSet + 1));
    handlePageChange(totalPages);
  };

  const handleShowFirstPages = () => {
    setStartPage(1);
    handlePageChange(1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  return (
    <Pagination>
      <Pagination.First
        onClick={handleShowFirstPages}
        disabled={currentPage === 1}
      />

      <Pagination.Prev
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      />

      {startPage > 1 && (
        <Pagination.Ellipsis onClick={handleShowPreviousPages} />
      )}

      {Array.from(
        { length: Math.min(pagesPerSet, totalPages - startPage + 1) },
        (_, i) => startPage + i
      ).map((pageNumber) => (
        <Pagination.Item
          key={pageNumber}
          active={pageNumber === currentPage}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </Pagination.Item>
      ))}

      {startPage + pagesPerSet <= totalPages && (
        <Pagination.Ellipsis onClick={handleShowMorePages} />
      )}

      <Pagination.Next
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      />

      <Pagination.Last
        onClick={handleShowLastPages}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  );
}
