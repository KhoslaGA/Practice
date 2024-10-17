interface Props {
  productId: string;
}

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductPage({ productId }: Props) {
  const randomNo = getRandomInt(2);

  if (randomNo === 1) {
    throw new Error("Error loading Product");
  }
  return (
    <>
      <h1>Product Details</h1>
      <p>Product ID: {productId}</p>
    </>
  );
}
