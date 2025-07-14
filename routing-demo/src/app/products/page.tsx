import React from "react";
import Link from "next/link";

const page = () => {
  const productId = 100; // Example product ID, can be dynamic
  return (
    <>
      <div>
        <h1>Products</h1>
        <h2>
          <Link href="/products/1">Product 1</Link>
        </h2>
        <h2>
          <Link href="/products/2">Product 2</Link>
        </h2>
        <h2>
          <Link href="/products/3" replace>
            Product 3
          </Link>
        </h2>
        <h2>
          <Link href={`/products/${productId}`}>Product {productId}</Link>
        </h2>
      </div>
      <Link href="/">Go Back Home</Link>
    </>
  );
};

export default page;
