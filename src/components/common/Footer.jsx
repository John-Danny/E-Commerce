const Footer = () => {
  return (
    <footer className="w-full bg-surface-gray">
      <div className="max-w-300 mx-auto p-4">
        <div className="flex flex-col gap-4 pb-8 border-b border-[#ddd] mb-4 md:grid md:grid-cols-3">
          <div className="w-full pr-8">
            <p className="text-caption font-bold">NOVA Store</p>
            <span className="text-fine-print text-ink-muted-80">
              Cửa hàng công nghệ và phụ kiện tối giản, mang đến trải nghiệm mua
              sắm trực tuyến tinh gọn và hiện đại.
            </span>
          </div>
          <div className="w-full pr-8">
            <p className="text-caption font-bold">Điều hướng nhanh</p>
            <ul className="flex flex-col gap-2 text-fine-print text-ink-muted-80">
              <li>Trang chủ</li>
              <li>Sản phẩm</li>
              <li>Giỏ hàng</li>
              <li>Đăng nhập</li>
            </ul>
          </div>
          <div className="w-full pr-8 ">
            <p className="text-caption font-bold">Hỗ trợ khách hàng</p>
            <ul className="flex flex-col gap-2 text-fine-print text-ink-muted-80">
              <li>Email: hotro@novastore.vn</li>
              <li>Hotline: 1900 1234</li>
              <li>Giờ làm việc: 08:30 – 21:00 hằng ngày</li>
            </ul>
          </div>
        </div>
        <p className="text-fine-print text-ink-muted-48">
          Bản quyền © 2026 NOVA Store. Bảo lưu mọi quyền
        </p>
      </div>
    </footer>
  );
};

export default Footer;
