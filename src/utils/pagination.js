import _ from "lodash";

/**
 *
 * @param {*} items: mảng cần cắt
 * @param {*} page: số trang hiện tại
 * @param {*} perPage: số item trên 1 trang
 * @param start = (page - 1) * perPage
 * @return Array đã đước cắt từ @param start.
 * Lấy số phần tử từ mảng đó take(perPage).value()
 */

export function paginate(items, page, perPage) {
  const start = (page - 1) * perPage;
  return _(items).slice(start).take(perPage).value();
}
