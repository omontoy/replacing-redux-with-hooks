// Context API
// import { useContext } from "react";
// import { ProductsContext } from "../context/products-context";

// Redux
// import { useSelector } from "react-redux";

// CUSTOM HOOK useStore
import { useStore } from "../hooks-store/store";

import ProductItem from "../components/Products/ProductItem";
import "./Products.css";

const Products = (props) => {
  // Context API
  // const productsCtx = useContext(ProductsContext);
  // const productList = productsCtx.products

  // Redux
  // const productList = useSelector((state) => state.shop.products);

  // CUSTOM HOOK useStore
  const state = useStore()[0];
  const productList = state.products;

  return (
    <ul className="products-list">
      {productList.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
