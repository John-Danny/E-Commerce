import { Link } from "react-router-dom";
import cloth1 from "@/assets/images/cloth1.jpg";

const ProductItem = () => {
  return (
    <div className="w-full border border-border rounded-2xl p-4 flex flex-col gap-4">
      <div className="w-full bg-surface-gray rounded-sm overflow-hidden">
        <img src={cloth1} alt="" className="w-full h-full object-contain p-4" />
      </div>
      <div className="flex flex-col gap pb-6 border-b border-border">
        <h3 className="text-tag-line font-bold">LUMI T-Shirt Jean</h3>
        <span>6.990.000đ</span>
      </div>

      <div className="flex items-center justify-between">
        <button className="px-4 py-3 text-canvas text-button-utility bg-primary rounded-full cursor-pointer hover:bg-primary-focus ">
          Thêm vào giỏ
        </button>
        <Link
          to="/products/1"
          className="text-caption text-primary hover:text-primary-focus hover:underline"
        >
          Chi tiết
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
