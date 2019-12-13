import React from "react";
import { Pagination as PaginationContainer, PageItem } from "react-bootstrap";

const Pagination = ({ pages, pageSizeOptions, selected, onPageSelect, onPageSizeSelect }) => (
  <>
    <PaginationContainer>
      {Array(pages)
        .fill()
        .map((elem, index) => (
          <PageItem
            key={`pagination-option-${index}`}
            active={selected === index}
            onClick={() => onPageSelect(index)}
          >
            {index + 1}
          </PageItem>
        ))}
    </PaginationContainer>
    <select onChange={event => onPageSizeSelect(parseInt(event.target.value))}>
      {pageSizeOptions.map(o => (<option key={`pagination-page-size-option-${o}`} value={o}>{o}</option>))}
    </select>
  </>
);

export default Pagination;
