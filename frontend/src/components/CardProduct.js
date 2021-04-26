import { React, useState, useEffect } from "react";
import { HiOutlineShoppingCart, HiShoppingCart } from "react-icons/all";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import WordLimit from "react-word-limit";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
const CardProduct = ({ product }) => {
  const [showbtn, setShowbtn] = useState(false);
  const [Incart, setIncart] = useState(false);
  const dispatch = useDispatch();
  const Cart = useSelector((state) => state.cart);
  const { cartItems } = Cart;
  useEffect(() => {
    const isincart = cartItems.find((x) => x.product === product._id);
    if (isincart) {
      setIncart(true);
    }
    return () => {};
  }, [cartItems, product._id]);
  const addcart = () => {
    setIncart(true);
    dispatch(addToCart(product._id, 1));
  };
  const removeFromCartHandler = (id) => {
    console.log(id);
    dispatch(removeFromCart(id));
  };
  return (
    <>
      <div
        className="cardProduct"
        onMouseOver={() => {
          setShowbtn(true);
        }}
        onMouseLeave={() => {
          setShowbtn(false);
        }}
      >
        {" "}
        <Link to={`/product/${product._id}`}>
          <div className="imgDiv">
            <Image
              className="imgProduct"
              boxSize="350px"
              objectFit="cover"
              src={product.images[0]}
            />
          </div>
        </Link>
        <div className="bottomcard">
          <span>
            {product.name.length > 18
              ? product.name.slice(0, 18) + "..."
              : product.name}
          </span>

          {Incart ? (
            <HiShoppingCart
              onClick={() => {
                removeFromCartHandler(product._id);
                setIncart(false);
              }}
              className="iconFav"
              size="26"
            />
          ) : (
            <HiOutlineShoppingCart
              className="iconFav"
              color="#999"
              size="26"
              onClick={addcart}
            />
          )}

          <div className="productpricecard"> {`${product.price} $`}</div>
          <div className="Rating">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </div>
        </div>
        <button className={showbtn ? "QuickView QuickViewActive" : "QuickView"}>
          View Details
        </button>
      </div>
    </>
  );
};

export default CardProduct;
