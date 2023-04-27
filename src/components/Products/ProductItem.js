import React from "react";
// Context API
// import  { useContext } from "react";
// import { ProductsContext } from "../../context/products-context";

// Redux
// import { useDispatch } from "react-redux";
// import { toggleFav } from "../../store/actions/products";

// CUSTOM HOOK useStore
import { useStore } from "../../hooks-store/store";

import Card from "../UI/Card";
import "./ProductItem.css";

const ProductItem = React.memo((props) => {
  console.log("RENDERING");

  // Context API
  // const productsCtx = useContext(ProductsContext);

  // Redux
  // const dispatch = useDispatch();

  // CUSTOM HOOK useStore
  const dispatch = useStore(false)[1];

  const toggleFavHandler = () => {
    // Context API
    // productsCtx.toggleFav(props.id);

    // Redux
    // dispatch(toggleFav(props.id));

    // CUSTOM HOOK useStore
    dispatch("TOGGLE_FAV", props.id);
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
