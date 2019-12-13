import React from "react";
import {
  Pagination as PaginationContainer,
  PageItem,
  Row
} from "react-bootstrap";

import { strings } from "common/constants";

const Pagination = ({
  pages,
  pageSizeOptions,
  selected,
  onPageSelect,
  onPageSizeSelect
}) => (
  <Row style={{ marginTop: "30px" }}>
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
    <div style={{ marginLeft: "15px" }}>
      {strings.pagination.pageSize}
      <select
        style={{ height: "38px" }}
        onChange={event => onPageSizeSelect(parseInt(event.target.value))}
      >
        {pageSizeOptions.map(o => (
          <option key={`pagination-page-size-option-${o}`} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  </Row>
);

export default Pagination;
