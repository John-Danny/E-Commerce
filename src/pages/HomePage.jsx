import { Link } from "react-router-dom";
import banner from "@/assets/images/banner-clothing.jpg";
import pattern from "@/assets/images/modern-pattern.jpg";
import ProductList from "@/features/products/components/ProductList";

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero */}
      <section className="bg-surface-gray mb-4">
        <div className="max-w-300 mx-auto p-4 py-8">
          <div className="w-full mt-4 flex flex-col items-center gap-4">
            <div className="w-full flex flex-col items-center gap-4">
              <span className="text-fine-print px-2 py-1 bg-surface-pearl  rounded-lg border border-border">
                Bộ sưu tập mới
              </span>
              <h1 className="text-display-lg font-bold text-center leading-12">
                Khám phá những điều tuyệt vời
              </h1>
              <p className="text-[20px] text-ink-muted-80 text-center leading-8">
                Những sản phẩm được chọn lọc dành riêng cho bạn
              </p>
            </div>
            <button className="w-full h-12 text-center text-canvas bg-primary rounded-full cursor-pointer hover:bg-primary-focus">
              <Link to="/products">Khám phá ngay</Link>
            </button>

            <div className="w-full mt-4 rounded-lg overflow-hidden shadow-xl">
              <img
                src={banner}
                alt=""
                className="w-full max-h-120 object-cover hover:transform hover:scale-105 transition-all duration-300 ease-out cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>
      {/* 2. Products */}
      <ProductList />

      {/* 3. Pattern */}
      <section className="bg-[#272729]">
        <div className="max-w-300 min-h-150 mx-auto px-4 py-12 text-canvas text-center flex flex-col items-center gap-4">
          <h2 className="text-display-md font-bold leading-10">
            Thiết kế tối giản. <br></br>Hiệu năng vượt trội.
          </h2>
          <p className="">
            Trải nghiệm không gian làm việc gọn gàng với thế hệ thiết bị không
            dây <br></br>mới nhất.
          </p>
          <button className="w-fit px-6 py-4 text-center text-canvas bg-primary rounded-full cursor-pointer hover:bg-primary-focus">
            <Link to="/products">Mua sắm ngay</Link>
          </button>

          <div class="w-full rounded-xl overflow-hidden">
            <img
              src={pattern}
              className="w-full h-full object-cover cursor-pointer hover:transform hover:scale-105 transition-all duration-300 ease-out"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
