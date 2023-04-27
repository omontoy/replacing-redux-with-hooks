// Context API
// import { useContext } from "react";
// import { ProductsContext } from "../context/products-context";

// Redux
// import { useSelector } from "react-redux";

// CUSTOM HOOK useStore
import { useStore } from "../hooks-store/store";

import FavoriteItem from "../components/Favorites/FavoriteItem";
import "./Products.css";

const Favorites = (props) => {
  // Redux
  // const favoriteProducts = useSelector((state) =>
  //   state.shop.products.filter((p) => p.isFavorite)
  // );

  // Context API
  // const productsCtx = useContext(ProductsContext);
  // const favoriteProducts = productsCtx.products.filter((p) => p.isFavorite);

  // CUSTOM HOOK useStore
  const state = useStore()[0];
  const favoriteProducts = state.products.filter((p) => p.isFavorite);

  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
