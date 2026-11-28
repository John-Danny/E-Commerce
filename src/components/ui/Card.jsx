import cloth1 from "@/assets/images/cloth1.jpg";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Card() {
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
        <Button>Thêm vào giỏ</Button>
        <Link
          to="/products/1"
          className="text-caption text-primary hover:text-primary-focus hover:underline"
        >
          Chi tiết
        </Link>
      </div>
    </div>
  );
}
