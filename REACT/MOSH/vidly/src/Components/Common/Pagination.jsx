import React from "react";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pages = Math.ceil(itemsCount / pageSize);
  const arr = _.range(1, pages + 1);
  if (arr.length === 1) return null;
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {arr.map((page) => (
          <li
            onClick={() => onPageChange(page)}
            key={page}
            className={currentPage === page ? "active page-item" : "page-item"}
          >
            <a className="page-link" href="#">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
