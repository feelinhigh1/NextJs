"use client";
import React from "react";
import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathname = usePathname();
  const productId = pathname.split("/")[2]; // Assuming the productId is the second segment in the path
  const reviewId = pathname.split("/")[4]; // Assuming the reviewId is the fourth segment in the path

  return (
    <div>
      <h2>
        Review {reviewId} not found for product {productId}
      </h2>
    </div>
  );
};

export default NotFound;
