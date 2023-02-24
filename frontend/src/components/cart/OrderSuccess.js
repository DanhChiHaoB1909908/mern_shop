import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";

const OrderSuccess = () => {
  return (
    <Fragment>
      <MetaData title={"Đặt hàng thành công"} />

      <div className="row justify-content-center">
        <div className="col-6 mt-5 text-center">
          <img
            className="my-5 img-fluid d-block mx-auto"
            src="/images/order_success.png"
            alt="Đặt hàng thành công"
            width="200"
            height="200"
          />

          <h2>Đặt hàng thành công.</h2>

          <Link to="/orders/me">Đơn hàng của bạn</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default OrderSuccess;
