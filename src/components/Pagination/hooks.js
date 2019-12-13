import { useEffect, useState } from "react";

const isSelectedPageEmpty = (data, selectedPage, pageSize) => {
  return selectedPage * pageSize >= data.length;
};

export const usePagination = (data, initialPageSize) => {
  const [pageSize, setPageSize] = useState(initialPageSize);
  const [selectedPage, setSelectedPage] = useState(0);

  const numberOfPages = Math.ceil(data.length / pageSize);

  const getCurrentPageData = (data, pageSize, pageNumber) => {
    return data.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
  };

  const [pageData, setPageData] = useState(
    getCurrentPageData(data, pageSize, selectedPage)
  );

  const onPageSelect = pageIndex => {
    setSelectedPage(pageIndex);
  };

  const onPageSizeSelect = newPageSize => {
    setPageSize(newPageSize);
  };

  useEffect(() => {
    setPageData(getCurrentPageData(data, pageSize, selectedPage));
  }, [selectedPage, data, pageSize]);

  useEffect(() => {
    // reset page on page size change to avoid blank page
    setSelectedPage(0);
  }, [pageSize]);

  useEffect(() => {
    // if selected page is blank it means last page data was deleted - change the page to the last - 1
    if (isSelectedPageEmpty(data, selectedPage, pageSize)) {
      setSelectedPage(page => page - 1);
    }
  }, [data]);

  return {
    pageData,
    selectedPage,
    onPageSelect,
    numberOfPages,
    onPageSizeSelect
  };
};
