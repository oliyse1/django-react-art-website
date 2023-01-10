import React from "react";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const getPages = () => {
    let displayArray = [];
    let advertsPerPage = props.advertsPerPage;
    let pageNumber = 1;

    for (let i = 0; i < props.totalAdverts; i += advertsPerPage) {
      const page = pageNumber;
      let display = null;

      if (props.active === page) {
        display = (
          <div key={i} className="pagination__page pagination__page__active">
            {pageNumber}
          </div>
        );
      } else {
        display = (
          <div
            key={i}
            onClick={() => props.visitPage(page)}
            className="pagination__page"
          >
            {pageNumber}
          </div>
        );
      }

      displayArray.push(display);
      pageNumber++;
    }

    return displayArray;
  };

  return (
    <div className="pagination">
      <div onClick={() => props.previousPage()} className="pagination__page">
        Previous
      </div>
      {getPages()}
      <div onClick={() => props.nextPage()} className="pagination__page">
        Next
      </div>
    </div>
  );
};

Pagination.propTypes = {
  advertsPerPage: PropTypes.number.isRequired,
  totalAdverts: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
  visitPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
};

export default Pagination;
