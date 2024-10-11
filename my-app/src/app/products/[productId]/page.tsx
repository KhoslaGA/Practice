export default function ProductDetail({
  params,
}: {
  params: { productId: string };
}) {
  return <div>Product details Dynamic and id is {params.productId}</div>;
}
