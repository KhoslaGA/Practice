import { notFound } from "next/navigation";

export default function ReviewDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const reviewId = parseInt(params.reviewId);

  if (isNaN(reviewId) || reviewId > 1000) {
    return notFound();
  }

  return (
    <h1>
      Review {reviewId} for product {params.productId}
    </h1>
  );
}
