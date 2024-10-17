"use client";
import { notFound } from "next/navigation";

// function getRandomInt(count: number) {
//   return Math.floor(Math.random() * count);
// }

export default function ReviewDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  // const randomNo = getRandomInt(2);

  // if (randomNo === 1) {
  //   throw new Error("Error loading review");
  // }
  const reviewId = parseInt(params.reviewId);

  if (isNaN(reviewId) || reviewId > 1000) {
    return notFound();
  }

  return (
    <div>
      <h1>
        {" "}
        Review {reviewId} for product {params.productId}
      </h1>
    </div>
  );
}
