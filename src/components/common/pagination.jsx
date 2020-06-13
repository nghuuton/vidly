import _ from "lodash";
import React from "react";

const Pagination = (props) => {
  /**
   * @param itemCount: Tổng số item
   * @param pageSize: Số item trên 1 trang
   * @param pageCount: số trang được làm tròn. Phải làm tròn nếu không 9/10 = 0.9
   * @param pages: sử dụng lodash để lấy mảng số trang bắt đầu từ 1
   */

  const { itemCount, pageSize, onPageChange, currentPage } = props;
  const pageCount = Math.ceil(itemCount / pageSize);
  const pages = _.range(1, pageCount + 1);

  /**
   * @param pageCount
   * Nếu pageCount === 1 Nếu trong danh sach <= số item trên 1 trang
   * thì không hiển thị số trang
   * @return null
   */

  if (pageCount === 1) return null;

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
            key={page}
          >
            <div onClick={() => onPageChange(page)} className="page-link">
              {page}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
