interface Props {
  productId: string;
}

export default function ProductPage({ params }: Props) {
  return (
    <>
      <h1>Product Details</h1>
      <p>Product ID: {params.productId}</p>
    </>
  );
}
