import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { listTopProducts } from "../../actions/productActions";
import { Link } from "react-router-dom";

const ProductTopRated = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return (
    <div class="container mt-5">
      <div class="reviews w-75">
        <h3>Top sản phẩm đánh giá cao:</h3>
      </div>
      <hr />
      <div className="row">
        {products &&
          products.map((product) => (
            <div className={`col-sm-12 col-md-6 col-lg-3 my-3`}>
              <div className="card p-3 rounded">
                <img
                  style={{ borderRadius: "15px" }}
                  className="card-img-top mx-auto"
                  src={product.images[0].url}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">
                    <Link to={`/product/${product._id}`}>{product.name}</Link>
                  </h5>
                  <div className="ratings mt-auto">
                    <div className="rating-outer">
                      <div
                        className="rating-inner"
                        style={{ width: `${(product.ratings / 5) * 100}%` }}
                      ></div>
                    </div>
                    <span id="no_of_reviews">
                      ({product.numOfReviews} Đánh giá)
                    </span>
                  </div>
                  <p className="card-text">{product.price} vnđ</p>
                  <Link
                    to={`/product/${product._id}`}
                    id="view_btn"
                    className="btn btn-block"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductTopRated;
