interface Props {
  productId: string;
}

export default function ProductPage({ productId }: Props) {
  return (
    <>
      <h1>Product Details</h1>
      <p>Product ID: {productId}</p>
    </>
  );
}
