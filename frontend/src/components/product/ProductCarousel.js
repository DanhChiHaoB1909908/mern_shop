import React from "react";

import { Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCarousel = () => {
  return (
    <Carousel variant="dark" pause="hover">
      <Carousel.Item>
        <Link to="/">
          <Image src="/images/slider1.jpeg" />
          <Carousel.Caption className="carousel-caption">
            <h2>Sản phẩm mới</h2>
            <p>Đem đến sự trải nghiệm của khách hàng</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/">
          <Image src="/images/slider1.jpeg" />
          <Carousel.Caption className="carousel-caption">
            <h2>Sản phẩm mới</h2>
            <p>Đem đến sự trải nghiệm của khách hàng</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/">
          <Image src="/images/slider1.jpeg" />
          <Carousel.Caption className="carousel-caption">
            <h2>Sản phẩm mới</h2>
            <p>Đem đến sự trải nghiệm của khách hàng</p>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarousel;
