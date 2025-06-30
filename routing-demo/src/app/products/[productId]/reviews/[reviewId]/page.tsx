import React from "react";
import { notFound } from "next/navigation";

export default async function ProductReview({
  params,
}: {
  params: Promise<{ reviewId: string; productId: string }>;
}) {
  const { reviewId, productId } = await params;

  if (parseInt(reviewId) > 1000) {
    notFound();
  }

  return (
    <div>
      Details about product {productId}. Review number {reviewId}
    </div>
  );
}
