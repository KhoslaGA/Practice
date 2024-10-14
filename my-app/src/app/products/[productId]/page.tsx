import { Metadata } from "next";

interface Props {
  params: {
    productId: string;
  };
}

export const generateMetaData = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${params.productId}`);
    });
  });
  return {
    title: `Buy ${title} Online - Best Price, Deals & Discounts`,
  };
};

export default function ProductPage({ params }: Props) {
  return (
    <>
      <h1>Product Details</h1>
      <p>Product ID: {params.productId}</p>
    </>
  );
}
