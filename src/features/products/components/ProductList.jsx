import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 gap-8 mb-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
};

export default ProductList;
