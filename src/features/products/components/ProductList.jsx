import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <section className="mb-8">
      <div className="max-w-300 mx-auto px-4 py-6">
        <div className="w-full flex flex-col gap-4">
          <div className="w-full">
            <h2 className="text-display-md font-bold">Sản phẩm nổi bật</h2>
            <p className="text-body">Khám phá những lựa chọn được yêu thích</p>
          </div>
          <div className="grid grid-cols-1 gap-8 mb-4 md:grid-cols-2 lg:grid-cols-4">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
          <Link
            to="/products"
            className="text-center text-primary hover:text-primary-focus hover:underline"
          >
            Xem tất cả sản phẩm
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
