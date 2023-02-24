import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      {/* <footer className="py-1">
        <p className="text-center mt-1">
          Shopping Cart - 2022-2023, All Rights Reserved
        </p>
      </footer> */}

      <footer className="py-1">
        <div className="container-lg">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="mb-4 mt-4">
                <h6>About</h6>
                <div className="mt-4 mb-2 d-block"></div>
                <p style={{ textAlign: "justify" }}>
                  <i className="text-uppercase">
                    Một trang thương mại điện tử,{" "}
                  </i>
                  nơi mọi người đến với nhau để làm, bán, mua và thu thập các
                  mặt hàng độc đáo. Chúng tôi cũng là một cộng đồng thúc đẩy sự
                  thay đổi tích cực cho các doanh nghiệp nhỏ, mọi người và hành
                  tinh. Dưới đây là một số cách chúng ta đang cùng nhau tạo ra
                  tác động tích cực.
                </p>
              </div>

              <div className="mb-4 mt-2">
                <h6>Công nghệ sử dụng</h6>
                <p style={{ textAlign: "justify" }}>
                  React.js, Node.js, Express.js, Mongo DB and Bootstrap.
                </p>
              </div>

              {/* <div className="">
                <h6>Thanks</h6>
                <p style={{ textAlign: "justify" }}>
                  Master Nguyen Minh Trung, Can Tho University of Technology and
                  Education.
                </p>
              </div> */}
            </div>

            <div className="col-xs-6 col-md-3 mt-4">
              <h6>Danh mục</h6>
              <ul className="footer-links">
                <li>
                  <Link className="link-hover text-reset" to="/">
                    Quà tặng bạn bè
                  </Link>
                </li>
                <li>
                  <Link className="link-hover text-reset" to="/">
                    Quà tặng bạn gái
                  </Link>
                </li>
                <li>
                  <Link className="link-hover text-reset" to="/">
                    Quà tặng cho bé
                  </Link>
                </li>
                <li>
                  <Link className="link-hover text-reset" to="/">
                    Quà tặng bạn trai
                  </Link>
                </li>
                <li>
                  <Link className="link-hover text-reset" to="/">
                    Quà tặng thầy cô
                  </Link>
                </li>
                <li>
                  <Link className="link-hover text-reset" to="/">
                    Quà tặng ông bà
                  </Link>
                </li>
                <li>
                  <Link className="link-hover text-reset" to="/">
                    Quà tặng cha mẹ
                  </Link>
                </li>
                <li>
                  <Link className="link-hover text-reset" to="/">
                    Quà tặng sếp
                  </Link>
                </li>
                <li>
                  <Link className="link-hover text-reset" to="/">
                    Quà sinh nhật
                  </Link>
                </li>
                <li>
                  <Link className="link-hover text-reset" to="/">
                    Quà tặng giáng sinh
                  </Link>
                </li>
                <li>
                  <Link className="link-hover text-reset" to="/">
                    Quà tặng tết thiếu nhi
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3 mt-4">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <Link className="link-hover text-reset" to="#">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="link-hover text-reset" to="#">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="link-hover text-reset" to="#">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2023 All Rights Reserved by{" "}
                <Link className="link-hover text-reset" to="#">
                  Shop quà online
                </Link>
                .
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <Link
                    className="facebook"
                    to={{
                      pathname: "https://www.facebook.com/nghiadang666/",
                    }}
                    target="_blank"
                  >
                    <i className="fa fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link className="google" to="#">
                    <i className="fa fa-google"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="github"
                    to={{
                      pathname: "https://github.com/langde666",
                    }}
                    target="_blank"
                  >
                    <i className="fa fa-github"></i>
                  </Link>
                </li>
                <li>
                  <Link className="linkedin" to="#">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
