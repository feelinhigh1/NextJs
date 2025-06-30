import React from "react";

export default async function ProductReview({
  params,
}: {
  params: Promise<{ reviewId: string; productId: string }>;
}) {
  const { reviewId, productId } = await params;

  return (
    <div>
      Details about product {productId}. Review number {reviewId}
    </div>
  );
}
