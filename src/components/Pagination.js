import { Link } from "gatsby"
import React from "react"
import { PaginationElement, PaginationWrapper } from "../elements"

export default function Pagination({
  isFirst,
  isLast,
  prevPage,
  nextPage,
  numPages,
  currentPage,
}) {
  return (
    <PaginationWrapper isFirst={isFirst} isLast={isLast} numPages={numPages}>
      {/* <PaginationElement to={prevPage}>Previous Page</PaginationElement>
      <PaginationElement to={nextPage}>Next Page</PaginationElement> */}
      {!isFirst && (
        <PaginationElement to={prevPage} rel="prev">
          {"<< Previous page"}
        </PaginationElement>
      )}

      {Array.from({ length: numPages }, (_, i) => (
        <li key={`pagination-number${i + 1}`}>
          <PaginationElement
            to={`/blog/${i === 0 ? "" : i + 1}`}
            currentPage={i + 1 === currentPage}
          >
            {i + 1}
          </PaginationElement>
        </li>
      ))}

      {!isLast && (
        <PaginationElement to={nextPage} rel="next">
          {"Next page >>"}
        </PaginationElement>
      )}
    </PaginationWrapper>
  )
}
