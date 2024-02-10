import React, { useState } from "react";
import StudentCard from "./StudentCard";
import { card } from "../Helper";

const StudentsCollection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  const totalItems = card.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

  const visibleStudents = card.slice(startIndex, endIndex + 1);

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <h2>Student data collection</h2>
      <div className="flex gap-3">
        {visibleStudents.map((obj, i) => (
          <StudentCard key={i} obj={obj} i={i} />
        ))}
      </div>
      {totalItems > pageSize && (
        <div className="text-center mt-10">
          <button
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous Page
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => changePage(index + 1)}
              className={
                currentPage === index + 1 ? "bg-red-700 text-white" : ""
              }
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next Page
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentsCollection;
