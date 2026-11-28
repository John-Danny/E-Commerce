import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import ProductList from "@/features/products/components/ProductList";

export default function ProductPage() {
  const getNavPageHeaderCss = ({ isActive }) => {
    return isActive ? "text-[#000] cursor-text" : "hover:text-primary";
  };

  return (
    <div>
      {/* 1. Page Header */}
      <section className="bg-surface-gray">
        <div className="max-w-500 mx-auto p-8">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 text-ink-muted-48">
              <NavLink to="/" end className={getNavPageHeaderCss}>
                Trang chủ
              </NavLink>
              <span>/</span>
              <NavLink to="/products" className={getNavPageHeaderCss}>
                Sản phẩm
              </NavLink>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="text-display-lg font-bold">Tất cả sản phẩm</h1>
                <p className="text-[20px] text-ink-muted-80 leading-7s">
                  Chọn lọc các thiết bị công nghệ và phụ kiện tối giản cho nhu
                  cầu hằng ngày.
                </p>
              </div>

              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm"
                  className="w-100 py-3 px-12 bg-canvas border border-border rounded-full focus:outline-primary text-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Products */}
      <section class="border-b border-border">
        <div className="max-w-500 mx-auto p-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_3fr]">
            {/* Bộ lọc */}
            <div className="w-full h-fit flex flex-col gap-4 p-4 border border-border rounded-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <h3 className="text-tag-line font-medium">Bộ lọc</h3>
                <span className="text-primary hover:underline cursor-pointer">
                  {" "}
                  Xóa bộ lọc
                </span>
              </div>
              <div className="pb-4 border-b border-border">
                <h4 className="font-bold mb-4">Danh mục</h4>
                <ul className="flex flex-col gap-4 px-2">
                  <li className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      id="music"
                      className=" w-5 h-5  cursor-pointer"
                    />{" "}
                    <label for="music" className="cursor-pointer">
                      {" "}
                      Áo thun
                    </label>
                  </li>
                  <li className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      id="music"
                      className=" w-5 h-5  cursor-pointer"
                    />{" "}
                    <label for="music" className="cursor-pointer">
                      {" "}
                      Áo sơ mi
                    </label>
                  </li>
                  <li className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      id="music"
                      className=" w-5 h-5  cursor-pointer"
                    />{" "}
                    <label for="music" className="cursor-pointer">
                      {" "}
                      Áo polo
                    </label>
                  </li>
                  <li className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      id="music"
                      className=" w-5 h-5  cursor-pointer"
                    />{" "}
                    <label for="music" className="cursor-pointer">
                      {" "}
                      Áo khoác
                    </label>
                  </li>
                </ul>
              </div>
              <div className="pb-4 border-b border-border">
                <h4 className="font-bold mb-4">Khoảng giá (đ)</h4>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    placeholder="Tối thiểu"
                    min="0"
                    className="w-full px-2 py-4 border border-border rounded-md focus:outline-primary"
                  />
                  <input
                    type="number"
                    placeholder="Tối đa"
                    min="0"
                    className="w-full px-2 py-4 border border-border rounded-md focus:outline-primary"
                  />
                </div>
              </div>
              <div className="pb-4 ">
                <h4 className="font-bold mb-4">Danh mục</h4>
                <ul className="flex flex-col gap-4 px-2">
                  <li className="flex items-center gap-4">
                    <input
                      type="radio"
                      id="4_5start"
                      name="cloth"
                      className=" w-5 h-5  cursor-pointer"
                    />{" "}
                    <label for="4_5start" className="cursor-pointer">
                      {" "}
                      Từ 4.5 sao trở lên
                    </label>
                  </li>
                  <li className="flex items-center gap-4">
                    <input
                      type="radio"
                      id="4star"
                      name="cloth"
                      className=" w-5 h-5  cursor-pointer"
                    />{" "}
                    <label for="4star" className="cursor-pointer">
                      {" "}
                      Từ 4.0 sao trở lên
                    </label>
                  </li>
                </ul>
              </div>
              <div></div>
            </div>

            {/* Products */}
            <div className="flex flex-col gap-4">
              {/* header */}
              <div className="flex flex-col justify-between md:flex-row pb-4 border-b border-border">
                <div className="flex flex-wrap items-center gap-4">
                  <p className="text-ink-muted-80">
                    Hiển thị 4 sản phẩm trên 6 sản phẩm
                  </p>
                  <span className="flex items-center gap-1 px-4 py-2 bg-surface-gray border border-border rounded-full text-caption">
                    Áo thun
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="text-ink-muted-48 cursor-pointer"
                    />
                  </span>
                  <span className="flex items-center gap-1 px-4 py-2 bg-surface-gray border border-border rounded-full text-caption">
                    Áo khoác
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="text-ink-muted-48 cursor-pointer"
                    />
                  </span>
                </div>
                <div>
                  <span className="mr-2">Sắp xếp: </span>
                  <select className="px-4 py-4 border border-border rounded-md">
                    <option selected>Mặc định</option>
                    <option>Giá thấp đến cao</option>
                    <option>Giá cao đến thấp</option>
                    <option>Tên A-Z</option>
                  </select>
                </div>
              </div>

              <div className="pb-4 border-b border-border mt-6">
                <ProductList />
              </div>

              {/* Pagination */}
              <div className="w-full flex items-center justify-center gap-2 mt-6">
                <button className="px-6 py-4 bg-surface-gray border border-border rounded-full text-ink-muted-48 cursor-not-allowed">
                  Trước
                </button>
                <button className="w-14 py-4 border border-border rounded-full text-canvas bg-primary">
                  1
                </button>
                <button className="w-14 py-4 border border-border rounded-full hover:border-primary cursor-pointer">
                  2
                </button>
                <button className="px-6 py-4  border border-border rounded-full hover:border-primary  cursor-pointer">
                  Tiếp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
