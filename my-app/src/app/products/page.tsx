import React from "react";
import Link from "next/link";
function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

type Props = {};

const Products = (props: Props) => {
  const productId = 100;
  const randomNo = getRandomInt(2);

  if (randomNo === 1) {
    throw new Error("Error loading Product");
  }
  return (
    <>
      <Link href="/">Home </Link>
      <h1>Product List</h1>
      <h2>
        <Link href="products/1">Product 1</Link>
      </h2>
      <h2>
        <Link href="products/2">Product 2</Link>
      </h2>
      <h2>
        {/* Replace removes history takes back to home page */}
        <Link href="products/3" replace>
          Product 3
        </Link>
      </h2>
      <h2>
        <Link href={`products/${productId}`}>Product {productId}</Link>
      </h2>
    </>
  );
};

export default Products;
